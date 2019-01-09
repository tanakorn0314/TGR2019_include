var mongoose = require("mongoose");
var Employee = require("../models/Employee");

var employeeController = {};

// Show list of employees
employeeController.list = function(req, res) {
  Employee.find({}).exec(function (err, employees) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.send(employees);
    }
  });
};

// Show employee by id
employeeController.show = function(req, res) {
  Employee.findOne({_id: req.params.id}).exec(function (err, employee) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.send(employee);
    }
  });
};

// Create new employee
// employeeController.create = function(req, res) {
//   res.send("../views/employees/create");
// };

// Save new employee
employeeController.save = function(req, res) {
  var employee = new Employee(req.body);

  employee.save(function(err,data) {
    if(err) {
      console.log(err);
    } else {
      console.log("Successfully created an employee.");
      res.send(data)
    }
  });
};

// Edit an employee
employeeController.edit = function(req, res) {
  Employee.findOne({teamID: req.params.teamID}).exec(function (err, employee) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.send(employee);
    }
  });
};

// Update an employee
employeeController.update = function(req, res) {
  Employee.findByIdAndUpdate(req.params._id, { $set: { temp: req.body.temp}}, { new: true }, function (err, employee) {
    if (err) {
      console.log(err);
      res.send("error");
    }
    res.send(employee);
  });
};

// Delete an employee
employeeController.delete = function(req, res) {
  Employee.remove({_id: req.params.id}, function(err,data) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Employee deleted!");
      res.send(data);
    }
  });
};

module.exports = employeeController;
