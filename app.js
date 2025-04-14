// console.dir(servicos)
// console.log(servicos[2])
// servicos[3] = "Estetisista"
// console.dir(servicos)
// servicos.push("Depilação") //adicionar um valor
// console.dir(servicos)

// let servicos = ['Barbearia', 'Desing sombrancelha', 'Manicure', 'Cabelereira', 'Massagem']
let servicosCategoria = new Array()
servicosCategoria.push("Barbearia")
servicosCategoria.push("Desing sombrancelha")
servicosCategoria.push("Manicure")
servicosCategoria.push("Cabelereira")
servicosCategoria.push("Massagem")
servicosCategoria.push("Depilação")
console.dir(servicosCategoria)

document.getElementById("conteudo").innerHTML = servicosCategoria[0] + " - "
document.getElementById("conteudo").innerHTML += servicosCategoria[1] + " - "
document.getElementById("conteudo").innerHTML += servicosCategoria[2] + " - "
document.getElementById("conteudo").innerHTML += servicosCategoria[3] + " - "
document.getElementById("conteudo").innerHTML += servicosCategoria[4] + " - "
document.getElementById("conteudo").innerHTML += servicosCategoria[5] + "  "