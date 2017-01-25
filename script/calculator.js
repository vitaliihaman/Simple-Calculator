(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var input = document.getElementById('enterArea');

        var mathOperations = {
            '+': function (num1, num2) {
                return num1 + num2
            },
            '/': function (num1, num2) {
                return num1 / num2
            },
            '-': function (num1, num2) {
                return num1 - num2
            },
            '*': function (num1, num2) {
                return num1 * num2
            }
        };

        setListener();                                     //запускаем функцию прослушки на клик

        function printResult(result){
            var currValue = input.value;                  //выводим результат в input
            input.value = currValue + '=' + result;
        }

        function searchIndex(expression, operations){

            for (var i = 0; i < operations.length; i++) {
               var index = expression.indexOf(operations[i]);

                if(index !== -1){
                    var num1 = +expression.substring(0, index),
                        num2 = +expression.substring(index+1),
                        operator = expression.substr(index, 1);

                    printResult(mathOperations[operator](num1, num2));

                }
            }

        }

        function searchExpression(){

                var  expression = input.value,
                     operations = ['+', '-', '/', '*'],
                     index = null;

            searchIndex(expression, operations);

        }

        function addSymbol(str) {
            var currValue = input.value;
            input.value = currValue + str;
        }

        function removeSymbol(){
            var currValue = input.value;
                input.value = currValue.substring(0, currValue.length - 1);

        }

        function clean(){
            input.value = "";

        }

        function buttonAction() {
            var currTarget = this.getAttribute('data-target'),
                symbol = '',
                result = '';

            if(currTarget == 'calculate'){

                searchExpression();

                    //result = eval(input.value);
                   // printResult(result);

            }else if(currTarget == 'number' || currTarget == 'operation'){
                symbol = this.value;
                addSymbol(symbol);
            }else if(currTarget == 'remove'){
                removeSymbol();
            }else if(currTarget == 'clean'){
                clean();
            }
        }


        function setListener() {
            var elements = document.getElementsByClassName('functionButton');

                for (var i = 0; i < elements.length; i++) {
                    var element = elements[i];
                    element.addEventListener('click', buttonAction);
                }

            var remove =  document.getElementById('backspace');
                remove.addEventListener('click', buttonAction);

            var clean = document.getElementById('clean');
                clean.addEventListener('click', buttonAction);
        }
    });
})();



