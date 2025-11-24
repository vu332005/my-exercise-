const person = {
    name: "vu",
    info: {
        number: "123345",
        detail: {
            city: "hanoi",
            education: {
                class: 'D',
                vehical: {
                    name: "xe may",
                    cost:{
                        a: '1000'
                    }
                }
            }
        }
    }
}

const a = {...person,info: {...person.info}}
a.name = 'duc'
a.info.number = '000'

const { info: { detail: { education: { vehical } } } } = person;

const { info: { detail: { education, education: { vehical:{cost} } } } } = person; // lấy cả education và cost cùng lúc

function dig(obj, path, defaultValue){
    if(!Array.isArray(path)) path = path.split(".")
    
        return path.reduce((acc, current) => {
            if(acc && acc[current] !== undefined){
                return acc[current]
            }
            return defaultValue
        },obj)
}


// console.log(dig2(person,"info","unknow"))



// console.log(dig(person,"info.detail.city","unknow"))

// console.log(a,person)S

function dig2(obj, key, defaultValue){
    if(obj && typeof obj === "object"){
        if(key in obj) return obj[key]
        for(let i in obj){
            const value = dig2(obj[i],key,undefined)
            if(value !== undefined) return value
        }
    }
    return defaultValue
}

console.log(dig2(person,"a","unknow"))
