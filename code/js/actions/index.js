export const select = (car) => {
    alert(car);
    return{
        type: "CAR_SELECTED",
        payload: car
    }
}