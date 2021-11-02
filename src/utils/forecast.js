
const request = require ("request")
const forecast = (latitude,longitude,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=fa22e8f51afbe64e8570f5fe5dd23962&query=' + latitude + ',' + longitude +   '&units=f'
    request({url, json:true},(error,{body}) => { if (error) {
        callback('Sorry! Unable to connect to weather service!',undefined) 
        }else if (body.error) {
         callback('unable to find location',undefined)
        }else{
        callback(undefined, body.current.temperature + ' \xB0C      ' + body.current.weather_descriptions [0])
        }
        })
        request({url, json:true},(error,{body}) => { if (error) {
                callback('Sorry! Unable to connect to weather service!',undefined) 
                }else if (body.error) {
                 callback('Unable to find location',undefined)
                }else{
                callback(undefined, body.current.temperature + ' \xB0C      ' + body.current.weather_descriptions [0])
                }
        })
}                
module.exports = forecast