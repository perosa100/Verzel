export function formatDate(date: any) {
    date = date.replace(/\D/g, '')
    if (date.length > 8) {
        date = date.substring(0, 8)
    }
    switch (date.length) {
        case 2:
            date = date.replace(/(\d{2})(.*)/, '$1/$2')
            break
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
            date = date.replace(/(\d{2})(\d{2})(.*)/, '$1/$2/$3')
            break
        default:
            break
    }

    return date
}

export function validMinAge(dataNasc: any) {
    var dataAtual = new Date()
    var anoAtual = dataAtual.getFullYear()
    var anoNascParts = dataNasc.split('/')
    var diaNasc = anoNascParts[0]
    var mesNasc = anoNascParts[1]
    var anoNasc = anoNascParts[2]
    var idade = anoAtual - anoNasc
    var mesAtual = dataAtual.getMonth() + 1
    //Se mes atual for menor que o nascimento, nao fez aniversario ainda;
    if (mesAtual < mesNasc) {
        idade--
    } else {
        //Se estiver no mes do nascimento, verificar o dia
        if (mesAtual == mesNasc) {
            if (new Date().getDate() < diaNasc) {
                //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
                idade--
            }
        }
    }

    if (idade < 12) {
        return false
    }
    return true
}
