// destrcturing array
// let arr =["zain",,"karachi"];

// let name = arr[0]
// let age = arr[1]
// let city = arr[3]


// let [nam,age = 20,city]=arr;
// console.log(nam);
// console.log(age);
// console.log(city)

// in nested arry

// let arr =["zain",2,"karachi",["pakistan","sindh"]];

// let  [nam,age,city,[country,prvince]]=arr;
// console.log(country)


// by rest opertors


// let arr = ["zain",23,"karachi"];
// let [nam,...details]= arr
// console.log(details);
// let [age,city]= details
// console.log(city)



// with functions

// let arr = ([name,age,city])=>{
// console.log(name)
// console.log(city)
// console.log(age)
// }
// arr(["zain",24,"karachi"])


// let foo = ()=>{
//     return ["zain",24,"karachi"];
// }

// let [nam,age,city]=foo();
// console.log(nam)
// console.log(city)
// console.log(age)


















// object desturctring




// let obj = {
//     nam :"zain",
//     clas: "mcs",
//     school : "abc"

// }


// let {nam : n,clas :c,school:s}= obj
// console.log(n)




function makeItem(){
return{
    data:{
        item:{
            name:'Shoes',
            size:{
                US :10,
                EU:40
            }
        }
    },
    stats:"available",


}
}


function makeArrayOfItem(){
    return {
        data:{
            itess:[
                {name: "Shoes",price:200},
                {name:"shirt",price:100},
            ]

        },
        stats:"available",
    }
}




// const first = makeItem()
// console.log(first)

// let data = first.data;
// let stats = first.stats;
// console.log(data,stats)
// console.log({data,stats})   //give deep value




// let {data,stats}= makeItem();
// console.log(data,stats)
// console.log(data.item.name) // dont want to get values like this way

let {data:{item},data:{item:{name,size:{US}}},stats}= makeItem()
console.log(item,name,US)
console.log(`name==>${name},size==>${US}`)





















// promises has pending ,reject ,fullfilled
let prom =(marks)=>{
    return new Promise((resolve,reject)=>{

        if(marks>55){
            resolve(("pass"))
        }
        else{
            reject("failed")
        }
    })
    
}


let suuccess = (s)=>{
console.log("successs")
}

let fail = (f)=>{
    console.log("fail")

}


prom(70).then(suuccess)


prom(10).catch(fail)
// console.log(prom(80))
















