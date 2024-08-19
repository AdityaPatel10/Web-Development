let student = {
    branch : 'CSE',
    course : 'BE',
}

let s1 = Object.create(student)

s1.name = 'Name'

console.log('s1:', s1);