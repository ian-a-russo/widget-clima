import IClima from "./Interfaces/IClima";

async function setClima(response: Response) {
  const data = await response.json();
  const umidade = data.main.humidity;
  const temperatura = Math.round(data.main.temp);
  const descricao = data.weather[0].description;

  const info: IClima = {
    temperatura,
    descricao,
    umidade,
  };

  return info;
}

export async function getClima(local: string) {
  const apiKey = "a1f4196e80a7b321eadf2b3cc2e2e702";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
    local
  )}&appid=${apiKey}&units=metric&lang=pt_br`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    const clima = setClima(response);
    return clima;
  } catch (error) {}
}
