
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")





let quantidadePositivos = 0;

for (let i=0; i < 6; i++){

    const valorInformadoPeloUsuario = gets();

   
    if (valorInformadoPeloUsuario > 0){
        quantidadePositivos += 1
    }

}

print(`${quantidadePositivos} valores positivos`);