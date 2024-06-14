function getData(data){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            console.log("data",data)
            resolve("success")
        },4000);
    })
}
async function getAllData(){
     await getData(1);
     await getData(2);
     await getData(3);
     await getData(4);
}