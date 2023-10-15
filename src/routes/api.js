import express from "express";
const router = express.Router()

// get all user
router.get('/', (req, res) => {
    res.send('all users are there..')
})
// get single user
router.get('/:id', (req, res) => {
    const { id } = req.params
    res.send({ id })
})
// create user
router.post('/', (req, res) => {
    res.send(req.body)
})
// update user
router.put('/:id', (req, res) => {
    const { id } = req.params
    res.send({ ...req.body, id })
})
// delete a user
router.delete('/:id', (req, res) => {
    const { id } = req.params
    res.send({ id, msg: 'deleted' })
})

export default router