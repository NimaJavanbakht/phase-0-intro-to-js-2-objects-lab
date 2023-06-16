const employee = {
    name: "Sam",
    streetAddress: '11 BroadWay'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newKeyAndValue = {...employee}

    newKeyAndValue[key] = value;
    return newKeyAndValue;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newKeyAndValue = {...employee}

    delete newKeyAndValue[key];
    return newKeyAndValue;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}