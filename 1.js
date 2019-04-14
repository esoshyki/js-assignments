function getIdentityMatrix(n) {
    var ar = new Array(n)
    ar.fill(0)
    var newarr = ar.map(function (el, index) { var line = new Array(n);
        line.fill(0);
        line[index] = 1;
        return line    
    })
 }

getIdentityMatrix(5)