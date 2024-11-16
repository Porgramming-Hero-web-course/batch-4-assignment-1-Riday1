{
    //

    class Car {
        make: string;
        model: string;
        year: number
        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const currentYear = new Date().getFullYear() // to get the current year 
            return currentYear - this.year // perform subtraction to get the age of car
        }
    }

    const car = new Car("Honda", "Civic", 2018)
    // console.log(car.getCarAge())



}