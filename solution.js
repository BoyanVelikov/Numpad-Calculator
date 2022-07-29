function solve() {

    function calc(e) {
        obj = {
            add: function () {
                return (Number(result1[0]) + Number(result1[2]));
            },
            subt: function () {
                return (Number(result1[0]) - Number(result1[2]));
            },
            multpl: function () {
                return (Number(result1[0]) * Number(result1[2]));
            },
            divis: function () {
                return (Number(result1[0]) / Number(result1[2]));
            }
        };

        let value = e.target.value;
        let resultOutput;
        exprOutput = document.getElementById("expressionOutput");

        if (value === "+" || value === "-" || value === "*" || value === "/") {
            exprOutput.innerHTML += ` ${value} `;

        } else if (value === "=") {
            resultOutput = document.getElementById("resultOutput");
            result1 = exprOutput.innerText.split(" ");
            if (result1.length == 3) {
                operator = result1[1];
                if (operator === "+") {
                    resultOutput.innerHTML += obj.add();
                } else if (operator === "-") {
                    resultOutput.innerHTML += obj.subt();
                } else if (operator === "*") {
                    resultOutput.innerHTML += obj.multpl();
                } else if (operator === "/") {
                    resultOutput.innerHTML += obj.divis();
                }
            } else {
                resultOutput.innerHTML += "NaN";

            }
        } else {
            exprOutput.innerHTML += value;
        }

    }

    function clean() {
        exprOutput = document.getElementById("expressionOutput");
        exprOutput.innerHTML = '';
        resOutput = document.getElementById("resultOutput");
        resOutput.innerHTML = '';
    }


    const pad = document.getElementsByClassName("keys")[0];
    const clear7 = document.getElementsByClassName("clear")[0];
    pad.addEventListener("click", calc);
    clear7.addEventListener("click", clean);

}