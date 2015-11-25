var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var WorkflowSchema = new Schema({
  name: String,
  tasks: [{
    title: String,
    description: String,
    assignedTo: String
  }]
});

mongoose.model('Workflow', WorkflowSchema);

