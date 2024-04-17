//Define a function to create a car object with optional options...

type car = {
    manufacturere: string
    model: string
    [key:string]:any
}
    function create_Car(manufacturere: string, model: string , optional: Record<string, any>): car {
        return{
            manufacturere,
            model,
            ...optional
        }
    }

    const mycar: car = create_Car("Toyota", "corolla", {color: "silver", year: 2021})
    console.log(mycar);