import { Router } from "express";

const router = Router();
// Create User CRUD
router.post('/user',(req,res)=>{
    res.status(501).json({error:'Not Implemented'})
});

// list user
router.get('/',(req,res)=>{
    res.status(501).json({error:'Not Implemented'})
})

// get one user
router.get('/:id',(req,res)=>{
    const {id} = req.params;
    res.status(501).json({error:`Not Implemented: ${id}`})
})

// update user
router.put('/:id',(req,res)=>{
    const {id} = req.params;
    res.status(501).json({error:`Not Implemented: ${id}`})
})

// delete user
router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    res.status(501).json({error:`Not Implemented: ${id}`})
})
export default router;