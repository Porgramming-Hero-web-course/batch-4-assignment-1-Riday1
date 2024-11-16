{
    //Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

    function sumArray(numArray: number[]): number {
        const sum = numArray.reduce((acc, num) => acc + num, 0)
        return sum;
    }

    const sampleResult = sumArray([1, 2, 3, 4, 5])
    // console.log(sampleResult);





}