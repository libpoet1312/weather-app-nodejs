const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibGliZXJ0YXJpYW5wb2V0IiwiYSI6ImNrNzEwbnFybTAxeTAza3Mxc3Q4Y3lzZ3AifQ.aotImMRu-SmaZyxRLzfU_w'

    request({url, json:true}, (error, {body}) =>{
        if (error){
            // console.log('Error1')
            callback('Unable to connect to location services')
        }else if (body.features.length === 0){
            // console.log('Error2')
            callback('Unable to find location. Try another search')
        }else {
            callback(undefined,{
                long : body.features[0].center[0],
                lat : body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode