const mongoose = require('mongoose');
const schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);


const taskSchema = new schema({
    id: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    priority: {
        type: Number,
        require: true ,
        min : 1 ,
        max : 3
    },
    startDate: {
        type: Date,
        require: true
    },
    endDate: {
        type: Date,
        require: true
    }
}, { timestamps: true })
taskSchema.plugin(AutoIncrement, { inc_field: 'id' });
const Task = mongoose.model('tasks', taskSchema);

module.exports = Task;

