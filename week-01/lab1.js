function sleep (time){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("done")
        }, time);
    })
}

async function handleSleep(){
    const log = await sleep(1000);
    console.log(log)
    
} // log chính là result mà thg resolve trả về

handleSleep()



