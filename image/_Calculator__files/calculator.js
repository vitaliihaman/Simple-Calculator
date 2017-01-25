(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var input = document.getElementById('enterArea');
        setListener();


        function printResult(result){
            var currValue = input.value;
            input.value = currValue + '=' + result;

        }


        function addSymbol(str) {
            var currValue = input.value;
            input.value = currValue + str;
            //console.log(typeof input.value);
            //console.log(typeof currValue);
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
                currTarget2 = this.getAttribute('value'),
                symbol = '',
                plus = '',
                a ='',
                b = '',
                minus = '',

                result = '';

            if(currTarget == 'calculate'){

                if(currTarget2 === '+'){

                    plus = input.value;
                        plus = plus.split();

                    for (var j = 0; j < plus.length; j++) {

                        if(plus[j] !== "+"){
                            result += plus[j];
                        }
                    }
                    printResult(result);


                }else {
                    //result = eval(input.value);
                    printResult(result);
                    console.log(result);

                }

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
            var remove =  document.getElementById('backspace');
                remove.addEventListener('click', buttonAction);
            var clean = document.getElementById('clean');
                clean.addEventListener('click', buttonAction);

            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                element.addEventListener('click', buttonAction);
            }
        }
    });
})();