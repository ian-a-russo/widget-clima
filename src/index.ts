import { getClima } from "./consultaAPI";

const pesquisa = document.getElementById("caixa-pesquisa") as HTMLInputElement;

const confirmar = <HTMLButtonElement>document.getElementById("confirmar");

const localAtual = <HTMLParagraphElement>document.getElementById("local");

const temperaturaAtual = <HTMLParagraphElement>(
  document.getElementById("temperatura")
);

const umidadeLocal = <HTMLParagraphElement>document.getElementById("umidade");

const descricaoLocal = <HTMLParagraphElement>(
  document.getElementById("descricao")
);

confirmar.addEventListener("click", async () => {
  const local = pesquisa.value;
  const dados = await getClima(local);

  localAtual.textContent = `${local}`;
  temperaturaAtual.textContent = `${dados?.temperatura}°C`;
  umidadeLocal.textContent = `Umidade de ${dados?.umidade}%`;
  descricaoLocal.textContent = `${dados?.descricao}`;
});
