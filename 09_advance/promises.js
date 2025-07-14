const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // db calls, crptography , network

    setTimeout(function(){
        console.log('asyn task is completed');
        resolve()
    }, 1000)
})


promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asyn task 2")
        resolve()
    }, 1000)

}).then(function(){
    console.log("promise 2 consumed ")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "aman", phoneNo: "123451165"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: " aman", email: "aman@aman"})
        }
        else{
            reject('error: something wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch((error) => {
    console.log(error)
}).finally(() => console.log("the Promise is either resolve or rejected"))

// method second 


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false 
        if(!error){
            resolve({username: "aman", password : " 123"})
        }
        else{
            reject("Error: js went wrong ")
        }
    }, 1000)
})

async function consumePromiseFive() {

    try {
        const response = await promiseFive
        console.log(response)
        
    } catch (error) {
        console.log(error)
    }
    
}

consumePromiseFive()


async function getAll() {

    try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.log("E: ", error)
    }
    
}

//getAll()


fetch('https://randomuser.me/api/')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error)=> {
    console.log(error)
})



