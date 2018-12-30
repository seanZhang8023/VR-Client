

const baoma = ["X5","Z4"]
const benz = ["E级","e6"]
const audi = ["A6L","A8"]
const volvo = ["XC60","XC70"]

export const car_Brand = ["宝马", "奔驰", "奥迪","沃尔沃"]

export const car_Type = {
    "奥迪":{
        "carType": audi,
        "carColor":["黑"]
    },
    "宝马":{
        "carType": baoma,
        "carColor":["白","蓝"]
    },
    "奔驰":{
        "carType": benz,
        "carColor":["红"]
    },
    "沃尔沃":{
        "carType": volvo,
        "carColor":["白"]
    }
}


export const defaultValue = {
    "奥迪":{
        "carType": "A6L",
        "carColor":"黑"
    },
    "宝马":{
        "carType": "X5",
        "carColor":"白"
    },
    "奔驰":{
        "carType": "E级",
        "carColor":"红"
    },
    "沃尔沃":{
        "carType": "XC60",
        "carColor":"白"
    }
}