var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Workflow = mongoose.model('Workflow'),
  Task = mongoose.model('Task'),
  WorkflowInstance = mongoose.model('WorkflowInstance');

module.exports = function (app) {
  app.use('/api', router);
};

router.post('/Workflow/:id/Task', function (req, res) {
  var task = new Task(req.body);

  Workflow.findByIdAndUpdate(req.params.id,
    { $push: { tasks: task } },
    { new: true },
    function (err, workflow) {
      if (err) {
        res.status(500).send({
          message: 'Error while adding Task'
        });
      }

      res.status(200).json(workflow);
    });
});

router.put('/Workflow/:workflowId/Task/:taskId', function (req, res) {
  Workflow.update({ _id: req.params.workflowId, 'tasks._id': req.params.taskId },
    { $set: { 'tasks.$': req.body } },
    function (err, workflow) {
      if (err) {
        res.status(500).send({
          message: 'Error while updating Task'
        });
      }

      res.status(204).send();
    });
});

router.delete('/Workflow/:workflowId/Task/:taskId', function (req, res) {
  Workflow.findByIdAndUpdate(req.params.workflowId,
    { $pull: { tasks: { _id: req.params.taskId } } },
    { new: true },
    function (err, workflow) {
      if (err) {
        res.status(500).send({
          message: 'Error while deleting Task'
        });
      }

      res.status(200).json(workflow);
    });
});

