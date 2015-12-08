var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TaskSchema = new Schema({
  title: String,
  description: String,
  assignedTo: String
});

mongoose.model('Task', TaskSchema);

var WorkflowSchema = new Schema({
  name: String,
  description: String,
  tasks: [TaskSchema]
});

mongoose.model('Workflow', WorkflowSchema);
mongoose.model('Task', TaskSchema);
