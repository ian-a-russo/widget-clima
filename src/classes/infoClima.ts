class infoClima {
    
    public umidade: number
    public temperatura: number
    public descricao: string
    
    constructor(umidade: number, temperatura: number, descricao: string) {
        this.umidade = umidade
        this.temperatura = temperatura
        this.descricao = descricao
    }
}

export {infoClima}