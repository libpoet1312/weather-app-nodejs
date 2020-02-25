const request = require('request')

const forecast = (long, lat, callback) => {
    const url = 'https://api.darksky.net/forecast/e05a6ff7129a769419a6999a02e0e1ff/'+lat+','+long+'?units=si'
    request({url , json: true}, (error, {body}) => {
        if (error){
            callback('Unable to fetch weather')
        }else if(body.error){
            callback('Unable to find location')
        }else{
            callback(undefined,{
                summary: body.daily.data[0].summary,
                temp: body.currently.temperature,
                precipProbability: body.currently.precipProbability
            })
        }

    })
}

module.exports = forecast