{
    //

    function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
        let count: number = 0;
        const resultArray = keys.filter(key => {
            if (key in obj) {
                return true
            }
            else {
                count++
                return false
            }
        })

        if (count > 0) {
            return true
        }
        else {
            return false
        }

    }
    const person = { name: "Alice", age: 25, email: "x@gmail.com" }
    console.log(validateKeys(person, ["name", "age"]))
}