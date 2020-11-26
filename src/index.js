import {getCityID,getCityForecastById} from './utils/requests'
export default async function  geoForecast(cityName) {
    try{
        const cityId =await geoCityID(cityName)
        const cityForecast= await getCityForecastById(cityId)

        console.log(`
        Clima em ${cityForecast.name}, ${cityForecast.state}
        Tempertura:${cityForecast.temperatura}
        Direção do vento: ${cityForecast.wind-direction}
        Velocidade do venot:${cityForecast.wind_velocity} km
        Humidade ${$cityForecast.humidity}
        Condição ${cityForecast.condition}
        Pressão Atmosferica ${cityForecast.pressure}
        Senssão: ${cityForecast.sensation}`)
    }catch (error){
        console.log(Error.message)
    }
    
    
}