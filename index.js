// Your code here
function createEmployeeRecord(array) {
    return {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }

  function createEmployeeRecord(array) {
    return {
      firstName: array[0], // Populating the firstName field
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }

  function createEmployeeRecord(array) {
    return {
      firstName: array[0],
      familyName: array[1], // Populating the familyName field
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }

  function createEmployeeRecord(array) {
    return {
      firstName: array[0],
      familyName: array[1],
      title: array[2], // Populating the title field
      payPerHour: array[3], // Populating the payPerHour field
      timeInEvents: [],
      timeOutEvents: []
    };
  }

  function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(createEmployeeRecord);
  }

  function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(createEmployeeRecord);
  }

  
  function createEmployeeRecords(dataEmployees) {
    return dataEmployees.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(employee, dateTime) {
    let [date, hour] = dateTime.split(" ");
    employee.timeInEvents.push({
      type: "TimeIn",
      date: date,
      hour: parseInt(hour, 10)
    });
    return employee;
  }