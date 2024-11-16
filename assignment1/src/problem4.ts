{
    // problem: 4


    type Circle = {
        shape: "circle";
        radius: number
    }

    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number
    }

    function calculateShapeArea(Shape: Circle | Rectangle) {
        if ("radius" in Shape) {
            return Math.PI * Shape.radius * Shape.radius
        }
        else {
            return Shape.height * Shape.width
        }
    }

    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 }).toFixed(2)
    const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 })
//     console.log(rectangleArea);
//     console.log(circleArea);
// }