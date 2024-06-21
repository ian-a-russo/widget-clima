import { getClima } from "./consultaAPI";

const pesquisa = document.getElementById("caixa-pesquisa") as HTMLInputElement

const botaoConfirmar = <HTMLButtonElement> document.getElementById("confirmar")

const localEscolhido = <HTMLParagraphElement> document.getElementById("local")
const temperaturaLocal = <HTMLParagraphElement> document.getElementById("temperatura")
const umidadeLocal = <HTMLParagraphElement> document.getElementById("umidade")
const descricaoLocal = <HTMLParagraphElement> document.getElementById("descricao")


botaoConfirmar.addEventListener("click", async () => {
    const valor = pesquisa.value
    const dados = await getClima(valor);

    console.log(valor);

    localEscolhido.textContent = `${valor}`;
    temperaturaLocal.textContent = `${dados?.temperatura}°C`;
    umidadeLocal.textContent = `Umidade de ${dados?.umidade}%`;
    descricaoLocal.textContent = `${dados?.descricao}`;
});

