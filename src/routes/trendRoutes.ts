import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Tweet CRUD

// Create Tweet
router.post('/', async (req, res) => {
  const { content, image } = req.body;
  // @ts-ignore
  const user = req.user;

  try {
    const result = await prisma.trend.create({
      data: {
        content,
        image,
        userId: user.id,
      },
      include: { user: true },
    });

    res.json(result);
  } catch (e) {
    res.status(400).json({ error: 'Username and email should be unique' });
  }
});

// list Tweet
router.get('/', async (req, res) => {
  const allTrends = await prisma.trend.findMany({
    include: {
      user: {
        select: {
          id: true,
          name: true,
          username: true,
          image: true,
        },
      },
    },
  });
  res.json(allTrends);
});

// get one Tweet
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  console.log('Query trend with id: ', id);

  const trends = await prisma.trend.findUnique({
    where: { id: Number(id) },
    include: { user: true },
  });
  if (!trends) {
    return res.status(404).json({ error: 'Trend not found!' });
  }

  res.json(trends);
});

// update trend
router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not Implemented: ${id}` });
});

// delete trend
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.trend.delete({ where: { id: Number(id) } });
  res.sendStatus(200);
});

export default router;