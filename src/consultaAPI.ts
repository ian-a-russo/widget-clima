import { infoClima } from "./classes/infoClima";

const getClima = async (local: string) => {

    const apiKey = "a1f4196e80a7b321eadf2b3cc2e2e702"
    const baseUrl = "https://api.openweathermap.org/data/2.5/weather"
    let complementoUrl = `?q=${encodeURI(local)}&appid=${apiKey}&units=metric&lang=pt_br`;
    let url = `${baseUrl}${complementoUrl}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        };

        const data = await response.json();
        let umidade = data.main.humidity;
        let temperatura = data.main.temp;
        let descricao = data.weather[0].description;

        const infoClima: infoClima = {
            temperatura,
            descricao,
            umidade
        };

        console.log(data)
        return infoClima
    } catch (error) {
        console.error('Erro:', error);
    };
};
   
export {getClima};