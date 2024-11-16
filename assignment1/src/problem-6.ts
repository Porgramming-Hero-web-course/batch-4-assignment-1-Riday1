{
    //


    interface Profile {
        name: string;
        age: number;
        email: string
    }

    function updateProfile(obj1: Profile, obj2: unknown): Profile {
        return Object.assign(obj1, obj2) // here i use Object.assign() method to update property in obj1 .how it works?: it actually copy the source property and place it to the target property, obj1 is target property and obj2 is source property
    }

    const myProfile: Profile = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    }
    console.log(updateProfile(myProfile, { age: 26 }));

}