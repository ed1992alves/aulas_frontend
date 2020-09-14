
// faz chamada a base de dados e muda os valores
export const callDatabase = () {
    ...
}


export const function Principal () {
    callDatabase()
    render(){

    }
}

------------


import {Principal} from "../blablabla"


jest.mock("../blabla", () ={
    callDatabase: jest.fn()
})
