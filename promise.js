function a(){
    return new Promise(function(resolve,reject){
        console.log('a')
        setTimeout(function(){
            console.log('a执行完')
            resolve('aaa')
        },100)
        
    })
}
function b(){
    return new Promise(function(resolve,reject){
        console.log('b执行完')
        resolve('bbb')
    })
}
function c(){
    return new Promise(function(resolve,reject){
        console.log('c执行完')
        resolve('ccc')
    })
}
// Promise.all([b(),a(),c()]).then(res=>{
//     console.log(res)
//     console.log(res[1])
// })
Promise.race([b(),a(),c()]).then(res=>{
    console.log(res)
    console.log(res[1])
})