function carDetails (manufacturer: string, modelName: string, ...addionalInfo){
    const car = {manufacturer, modelName, ...Object.fromEntries(addionalInfo)};
    return car;
};
const myCarDetails = carDetails("Toyota","Corolla",['color','blue'],['year, 2022']);
console.log(myCarDetails);