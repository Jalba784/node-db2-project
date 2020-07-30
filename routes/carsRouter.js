const express = require("express");
const knex = require("knex");

// const db = require('')

const router = express.Router();

/* CRUD */

router.get("/", (req, res) => {
  db('cars')
    .from("cars")
    .then(carsArray => res.status(200).json({ data: carsArray }))
    .catch(err => console.log(err));
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    //SELECT * FROM cars WHERE id = id;
    db('cars').where("id", id).first().then(cars => res.status(200).json({data: cars})).catch(err => console.log(err))
};

router.post('/', (req, res) => {
    const carData = req.body;
    //INSERT INTO cars (fields...) VALUES (values...)
    db("cars").insert(carData).then(id => res.status(201)json({ data: id })).catch(err => console.log(err))
};

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    //UPDATE cars SET field = "new value" WHERE id = id;
    db(cars).where("id", id).update(changes)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ data: count })
            } else {
                res.status(404).json({ message: 'there was no record to delete' })
            }
        })
        .catch()
};

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db(cars).where("id", id).del()
        .then(count => {
            if (count > 0) {
                res.status(200).json({ data: count })
            } else {
                res.status(404).json({ message: 'there was no record to delete' })
            }
        })
        .catch()
};

module.export = router;