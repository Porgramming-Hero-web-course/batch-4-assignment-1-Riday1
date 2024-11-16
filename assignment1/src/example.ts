{
    //



    // type value = string | number

    // const value1: value = "sohel"
    // const value2: value = 21

    type office1 = {
        name: string;
        address: string;
        manager: string;
    }
    type office2 = {
        name: string;
        address: string;
        ceo: string
    }

    type newOffice = office1 | office2
    const myOffice: newOffice = {
        name: "office",
        address: "khilkhet",
        manager: "riday"
    }
    type newOffice2 = office1 & office2

    const oldOffice: newOffice2 = {
        name: "office",
        address: "khilkhet",
        manager: "khan",
        ceo: "jamal"
    }

}