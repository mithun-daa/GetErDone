var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Workflow = mongoose.model('Workflow'),
  Task = mongoose.model('Task'),
  WorkflowInstance = mongoose.model('WorkflowInstance');

module.exports = function (app) {
  app.use('/api', router);
};

router.get('/Workflow', function (req, res) {
  //var email = req.user.email;
  var email = 'mithunster@gmail.com'
  var Resource = Workflow;

  if (req.query.active && req.query.active === 'true') {
    Resource = WorkflowInstance;
  }

  Resource.find({ tasks: { $elemMatch: { assignedTo: email } } }, function (err, workflows) {
    if (err) {
      res.status(500).send({
        message: 'Error while getting Workflows'
      });
    }

    res.json(workflows);
  });
});

router.post('/Workflow', function (req, res) {
  var workflow = new Workflow(req.body);
  workflow.save(function (err, newWorkflow) {
    if (err) {
      res.status(500).send({
        message: 'Error while saving Workflow'
      });
    };

    res.status(201).json(newWorkflow);
  });
});

router.put('/Workflow/:id', function (req, res) {
  Workflow.findByIdAndUpdate(req.params.id,
    { name: req.body.name, description: req.body.description },
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

router.post('/Workflow/:id/Instantiate', function (req, res) {
  Workflow.findById(req.params.id, function (err, workflow) {
    if (err) {
      res.status(500).send({
        message: 'Error while instantiating Workflow'
      });
    }

    if (!workflow) {
      res.status(404).json({ message: 'Workflow not found' });
    }

    var workflowInstance = new WorkflowInstance();
    workflowInstance.name = workflow.name;
    workflowInstance.created = new Date();
    workflowInstance.completed = false;
    workflowInstance.tasks = [];

    for (var i = 0; i < workflow.tasks.length; i++) {
      workflowInstance.tasks.push({
        title: workflow.tasks[i].title,
        description: workflow.tasks[i].description,
        assignedTo: workflow.tasks[i].assignedTo,
        completed: false,
        completedBy: null,
        completedOn: null
      });
    }

    workflowInstance.save(function (err, newWorkflowInstance) {
      if (err) {
        console.log(err);
        res.status(500).send({
          message: 'Error while instantiating Workflow instance'
        });
      }

      res.status(201).json(newWorkflowInstance);
    });
  });
});