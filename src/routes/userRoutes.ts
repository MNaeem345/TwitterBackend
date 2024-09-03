import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();
;
//User Crudd

// Create User


router.post('/', async (req,res) =>{
    const { email, name, username } = req.body;
    console.log(email, name, username)
    try{
        const result = await prisma.user.create({
            data: {
                email,
                name,
                username,
                bio:"Hello I am new to Twitter"
            }
        })
    
        res.json(result);
    } catch (e) {
        res.status(400).json({ error: "Username and email should be unique"});
    }
})

//List user
router.get('/', async (req, res) => {
    const allUser = await prisma.user.findMany();

    res.json(allUser)
})

//get one user
router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const user = await prisma.user.findUnique({where:{id: Number(id) }})
    res.json(user)
})

//update user
router.put('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({error:`Not Implemented: ${id}`})
})

//delete user
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({error:`Not Implemented: ${id}`})
})


export default router;

