// var name = 'Aditya Patel'
// console.log('Name:', name)


// fact - you cannot change (immutable) the value of string is primitive



// var n = 'adi'
// n[0] = 'A'

// n = 'Adi'
// console.log(n)






//storing big and small information

//small

//money -> bank
//house -> house document -> bank

//storing js info {string, number, obj, func}

//small 

//string -> js memory

//big data

//object -> address -> stored in js memory



// var name1 = 'adi'
// name2 = name1
// console.log(name2);



// in js array is basically stores the heap address of the values
// so if we change the any one of the mirror array's element it will reflect to every array it is basically bcz each are pointing to the same address

var arr = [1, 2, 3, 4]
arr2 = arr
arr3 = arr2
arr3[2] = 0  
console.log(arr2);
console.log(arr);