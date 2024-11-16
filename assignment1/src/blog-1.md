union 
--------
union is a data type in typescript which is used to combine 2 types together.  
suppose we are expecting that a type  can be string or can be number . in this   
kind of scenario we will use union . it is denoted by "|".   

example : 

type Value = string | boolean  
const myValue : Value = "nothing"  
const myValue2 : Value = 21  

here we are using type Value and assigning 2 different type of data .




intersection
------------
intersection combine multiple types and their property and into one , it means you have to assign value in all of the specified types. it is denoted by "&" sign.

example:  

type Driver = {  
    name: string;  
    age: number;  
    designation: string;  
}
type Helper = {  
    name: string ;  
    age: number;  
    yearOfExperience: number  
}

type Contactor = Driver & Helper  
here we care combining all of the property of Driver and Helper type into one. when you will use   Contactor type you have to must assign name,age,designation,yearOfExperience property value. 