{
    //

    function getProperty<T, Q extends keyof T>(obj: T, key: Q): T[Q] {
        return obj[key]
    }

    type TPerson = {
        name: string;
        age: number
    }
    const person: TPerson = { name: "Alice", age: 30 }
    // console.log(getProperty(person, "name"))


}