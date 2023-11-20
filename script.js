const salary = (wage, hours, days) => {
    return wage * hours * days
}

const taxed = (salary, tax) => {
    return salary * (100 - tax) / 100

}

console.log(taxed(salary(220, 6.5, 22), 15))