module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db');

        db.get_houses()
            .then(dbResponse => res.status(200).send(dbResponse))
            .catch(err => {
                res.status(500).send({errorMessage: 'Whoops no work'})
            })
    },

    addHouse: (req, res) => {
        const db = req.app.get('db');
        const {name, address, city, state, zipcode} = req.body;

        db.add_house([name, address, city, state, zipcode])
            .then(data => res.status(200).send(data))
    },

    deleteHouse: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.delete_house(+id)
            .then(data => res.status(200).send(data))
            .catch(err => {
                res.sendStatus(500)
            })
    }
}