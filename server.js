const express = require("express");
const app = express(); // was running into issue but had to initialize this before const employees
const employees = require("./employees");

const PORT = 3000;

// sends a string "Hello employees!"
app.get("/", (req, res) => {
  res.send("Hello employees!");
});

// sends full array of employees
app.get("/employees", (req, res) => {
  res.json(employees);
});

// sends employee with the given id
app.get("/employees/:id", (req, res) => {
  const id = req.params.id;
  const employeeFound = employees.find((e) => e.id === id);

  // sends message if no employee with that id is found
  if (employees) {
    res, json(employeeFound);
  } else {
    res.status(404).send("No employee with that id.");
  }
});

// sends random employee from array
// *A REQUEST MUST BE HANDLED BY THE *FIRST* HANDLER WITH A MATCHING PATH*

app.get("/employees/random", (req, res) => {
  const randomEmpIndex = Math.floor(Math.random() * employees.length); // makes sure to check for possible errors regarding array length
  const randomEmployee = employees[randomEmpIndex];
  res.json(randomEmployee);
});
