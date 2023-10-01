// Методы массивов.


// добавление/удаление
arr.length()
arr.push()
arr.pop()
arr.shift()
arr.unshift()
arr.splice()
arr.slice()
arr.concat()
arr.forEach()
arr.indexOf()
arr.lastIndexOf()
arr.index() // ?
arr.map()
arr.includes() // 
arr.find()
arr.findIndexOf()
arr.findLastIndex()
arr.filter()
arr.sort()
arr.reverse()
arr.split()
arr.join()
arr.reduce()
arr.toString() 


Array.isArray()

let arr = "salom hdh hfh".includes("salom")
let arr2 = [{count:12},{count: 10},{count: 12}]

function summ(arr) {
    // return arr.map((num) => num.count);

    return arr.reduce((acc, curr) => {
        return [...acc, curr.count];
    }, [])

}

console.log(summ(arr2));

// Функции.
// 1. конструктор

// 2. свойства

// 3. методы
// apply(), call(), bind(), toString()




// Объекты.
// 1. свойства
// 2. методы











