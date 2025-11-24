export function debounce(callBack,time){
    let id;
    function func(arg){
        clearTimeout(id)
        id = setTimeout(() => {
            callBack(arg)
        }, time);
    }
    func.clear = () =>{
        clearTimeout(id)
    }
    return func
}

export function throttle(callBack, time){
    let lastTime = 0;
    return function(arg){
        let now = Date.now()
        if(now - lastTime >= time){
            callBack(arg)
            lastTime = now
        }
    }
}

function throttle2(callBack, limitTime, limitCount ){
    let count = 0;
    let time = 0;
    let startTime = 0;
    return function (arg) {
        let now = Date.now()
        
        if(startTime === 0){
            startTime = now
        }

        time = now - startTime

        if(time >= limitTime){
            count = 0;
            time = 0;
            startTime = now;
        }

        if(count < limitCount){
            count ++
            callBack(arg)
        }
    }
}

const log = (arg) => {
    console.log(arg)
}
const handleThrottle = throttle2(log,1000,3)

setInterval(() => handleThrottle("1"),900)


// const a = [1,2,3]
// const [x,...rest] = a
