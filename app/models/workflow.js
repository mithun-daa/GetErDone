var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Task = new Schema({
  title: String,
  description: String,
  assignedTo: String
});

var WorkflowSchema = new Schema({
  name: String,
  tasks: [Task]
});

mongoose.model('Workflow', WorkflowSchema);

