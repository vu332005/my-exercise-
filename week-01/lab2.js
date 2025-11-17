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

console.log(a,person)