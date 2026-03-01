function verificarSerie10(serie) {
    let resultado = true;
    if(serie >= 67250001 && serie <= 67700000) {
        resultado = false;
    }
    if(serie >= 69050001 && serie <= 71300000) {
        resultado = false;
    }
    if(serie >= 76310012 && serie <= 85139995) {
        resultado = false;
    }
    if(serie >= 86400001 && serie <= 86850000) {
        resultado = false;
    }
    if(serie >= 90900001 && serie <= 91350000) {
        resultado = false;
    }
    if(serie >= 91800001 && serie <= 92250000) {
        resultado = false;
    }
    return resultado;
}

function verificarSerie20(serie) {
    let resultado = true;
    if(serie >= 87280145 && serie <= 91646549) {
        resultado = false;
    }
    if(serie >= 96650001 && serie <= 97100000) {
        resultado = false;
    }
    if(serie >= 99800001 && serie <= 100700000) {
        resultado = false;
    }
    if(serie >= 109250001 && serie <= 109700000) {
        resultado = false;
    }
    if(serie >= 110600001 && serie <= 111500000) {
        resultado = false;
    }
    if(serie >= 111950001 && serie <= 113300000) {
        resultado = false;
    }
    if(serie >= 114200001 && serie <= 115550000) {
        resultado = false;
    }
    if(serie >= 118700001 && serie <= 119600000) {
        resultado = false;
    }
    if(serie >= 120500001 && serie <= 120950000) {
        resultado = false;
    }
    return resultado;
}

function verificarSerie50(serie) {
    let resultado = true;
    if(serie >= 77100001 && serie <= 77550000) {
        resultado = false;
    }
    if(serie >= 78000001 && serie <= 78450000) {
        resultado = false;
    }
    if(serie >= 78900001 && serie <= 97250000) {
        resultado = false;
    }
    if(serie >= 98150001 && serie <= 98600000) {
        resultado = false;
    }
    if(serie >= 104900001 && serie <= 105800000) {
        resultado = false;
    }
    if(serie >= 106700001 && serie <= 107150000) {
        resultado = false;
    }
    if(serie >= 107600001 && serie <= 108500000) {
        resultado = false;
    }
    if(serie >= 109400001 && serie <= 109850000) {
        resultado = false;
    }
    return resultado;
}

export {verificarSerie10, verificarSerie20, verificarSerie50};