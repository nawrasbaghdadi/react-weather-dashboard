import chanceOfRain from '../ChanceofRain';
import initialStore from './initialStore';

export default counter;

let onChangeData = function (Days: {amount: number}[], pressure: number, temperature: number) {
    let data = [[], [], []];
    Days.forEach(function (item: {amount: number}) {
        var moreData = [[], [], []];
        moreData = chanceOfRain(pressure, temperature, item.amount);
        data[0].push(moreData[0]);
        data[1].push(moreData[1]);
        data[2].push(moreData[2]);
    })
    return data
}

function counter(state: {temperature: number, pressure: number, data_arr: {amount: number}[], data_bar: number[], data_line: number[]} = initialStore, 
                    action: {temperature: number, pressure: number, data_arr: {amount: number}[], data_bar: number[], data_line: number[], type: string}) {
    let temperature = state.temperature;
    let pressure = state.pressure;
    let data_arr = state.data_arr;
    let data_bar = state.data_bar;
    switch (action.type) {
        case 'changeTemp': {
            let data_line = onChangeData(data_arr, pressure, action.temperature);
            return { temperature: action.temperature, pressure, data_arr, data_bar, data_line }
        }
        case 'ChangePressure': {
            let data_line = onChangeData(data_arr, action.pressure, temperature);
            return { temperature, pressure: action.pressure, data_arr, data_bar, data_line }
        }
        case 'newData': {
            let data_line = onChangeData(action.data_arr, pressure, temperature);
            return { temperature, pressure, data_arr: action.data_arr, data_bar: action.data_bar, data_line }
        }
        default:
            return state
    }
}