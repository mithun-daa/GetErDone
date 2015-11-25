var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var WorkflowInstanceSchema = new Schema({
  name: String,
  created: Date,
  completed: Boolean,
  tasks: [{
    title: String,
    description: String,
    assignedTo: String,
    completed: Boolean,
    completedBy: String,
    completedOn: Date
  }]
});


mongoose.model('WorkflowInstance', WorkflowInstanceSchema);