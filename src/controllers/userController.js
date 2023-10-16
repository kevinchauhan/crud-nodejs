const userController = {
    index(req, res) {
        res.send('all users are there..')
    },
    getSingleUser(req, res) {
        const { id } = req.params
        res.send({ id })
    },
    createUser(req, res) {
        res.send(req.body)
    },
    updateUser(req, res) {
        const { id } = req.params
        res.send({ ...req.body, id })
    },
    deleteUser(req, res) {
        const { id } = req.params
        res.send({ id, msg: 'deleted' })
    }
}

export default userController