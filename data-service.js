var employee = {};
var departments = [];
var fs = require("fs");

// Initializer.
module.exports.initialize = function() {
    return new Promise(function(resolve, reject) {
        try {
            fs.readFile('./data/employees.json', function(err, data) {
                if (err) throw err;
                employess = JSON.parse(data);
            });
            fs.readFile('./data/departments.json', function(err, data) {
                if (err) throw err;
                departments = JSON.parse(data);
            });
        } catch (ex) {
            reject("Read File Error!");
        }
        resolve("JSON file successfully read.");
    });
}

// Returns all employees data.
module.exports.getAllEmployees = function() {
    var _m_allEmployees = [];
    return new Promise(function(resolve, reject) {
        for (var i = 0; i < employess.length; i++) {
            _m_allEmployees.push(employess[i]);
        }
        if (_m_allEmployees.length == 0) {
            reject("No data");
        }
        resolve(_m_allEmployees);
    })
}

// Returns employees by Status.
module.exports.getEmployeesByStatus = function(status) {
    var _m_byStatus = [];
    return new Promise(function(resolve, reject) {
        for (let i = 0; i < employess.length; i++) {
            if (employess[i].status == status) {
                _m_byStatus.push(employess[i]);
            }
        }
        if (_m_byStatus.length == 0) {
            reject("No Data");
        }
        resolve(_m_byStatus);
    });
}

// Returns employees by Department.
module.exports.getEmployeesByDepartment = function(department) {
    var _m_byDepartment = [];
    return new Promise(function(resolve, reject) {
        for (let i = 0; i < employess.length; i++) {
            if (employess[i].department == department) {
                _m_byDepartment.push(employess[i]);
            }
        }
        if (_m_byDepartment.length == 0) {
            reject("No Data");
        }
        resolve(_m_byDepartment);
    });
}

// Returns Employees by manager.
module.exports.getEmployeesByManager = function(manager) {
    var _m_employeesBymaneger = [];

    return new Promise(function(resolve, reject) {
        for (let i = 0; i < employess.length; i++) {
            if (employess[i].employeeManagerNum == manager) {
                _m_employeesBymaneger.push(employess[i]);
            }
        }
        if (_m_employeesBymaneger.length == 0) {
            reject("No Data");
        }
        resolve(_m_employeesBymaneger);
    });
}

// Returns employees by Number.
module.exports.getEmployeeByNum = function(num) {
    return new Promise(function(resolve, reject) {
        for (let j = 0; j < employess.length; j++) {
            if (employess[j].employeeNum == num) {
                resolve(employess[j]);
            }
        }
        reject("No Data");
    });
}

// Returns Employees for which manager = isTrue.
module.exports.getManagers = function() {
    var _m_manager = [];
    return new Promise(function(resolve, reject) {
        if (employess.length == 0) {
            reject("No Data");
        } else {
            for (var q = 0; q < employess.length; q++) {
                if (employess[q].isManager == true) {
                    _m_manager.push(employess[q]);
                }
            }
            if (_m_manager.length == 0) {
                reject("No Data");
            }
        }
        resolve(_m_manager);
    });
}

// Returns all the department.
module.exports.getDepartments = function() {
    var _m_department = [];
    return new Promise(function(resolve, reject) {
        if (employess.length == 0) {
            reject("No Data");
        } else {
            for (var v = 0; v < departments.length; v++) {
                _m_department.push(departments[v]);
            }
            if (_m_department.length == 0) {
                reject("No Data");
            }
        }
        resolve(_m_department);
    });
}