function importantFunction(username) {
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(`hello this is first ${username}`)
    }, 5000);
   })
}
function subimportantFunction(subusername) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`hello this is second ${subusername}`)
        }, 5000);
    })

}
function sub2importantFunction(sub2username) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`hello this is third ${sub2username}`)
        }, 5000);
    })

}
const mes = importantFunction('kriti1')
.then((res)=>{
    console.log(res);
    subimportantFunction('kriti2').then((res)=>{
        console.log(res);
        sub2importantFunction('kriti3').then((res)=>{
            console.log(res);
        })
    })
})
console.log("last statement");