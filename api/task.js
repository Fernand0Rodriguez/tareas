const express = require( 'express');
const Task = require( '../models/Task');
const router = express.Router();
router.get( '/api/tasks', (req, res) => {
  Task.find((err, tasks) => {
    res.status(200).json(tasks);
  });
});
router.post( '/api/tasks', (req, res) => {
  const { text } = req.body;
  const newTask = new Task({ text });
  newTask.save((err, task) => {
    res.status(201).json(task);
  });
});
router.put( '/api/tasks/:id', (req, res) => {
  res.end();
});
router.delete( '/api/tasks/:id', (req, res) => {
  Task
    .findByIdAndDelete(req.params.id)
    .exec((err, task) => {
      res.status(200).json({ msg: 'Tarea borrada'});
    });
});

module.exports = router
