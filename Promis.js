
function async1(data){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data1",data)
            resolve("sucess")
        },4000)
    })
}
// function async2(){
//     return new Promise((resolve,reject)=>{
//         resolve("sucess")
//         setTimeout(()=>{
//             console.log("Data2")
//             resolve("sucess")
//         },4000)
//     })
// }


async1(1).then(()=>{
   
     async1(2).then(()=>{

         async1(3);
    })
})
