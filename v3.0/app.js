(function () {
    /**
     *  O use strict define que toda as variaveis tenham que ser declaradas,
     *  para que nenhuma assuma contexto global acidentalmente;
     *  ou seja
     * 
     * NON strict-mode
     * variavel = "string";
     * 
     * USE strict-mode
     * var variavel = "string";
     * 
     */
    "use strict"

    angular
    .module('app', [])
    .controller('controlador', function($scope) {
        $scope.nome = 'Joao';
        $scope.count = '0';
        $scope.adicionar =  function(){$scope.count = fazer('add')}; //exemplo das possibilidades que o angularJs te propoem.
        $scope.subtrair =  function(){$scope.count = fazer('sub')}; //No caso, ele criou uma variavel que possui uma arrow function que realizar a logica de adicionar ou subtrair
    });
    
    var fazer = (function (action) { //recebeer um valor como parametro "add" or "sub"
        var counter = 0; //define o valor inicial
        return function(action) { 
            if(action == 'add'){ //verificar os parametros
                counter += 1; return counter; //retorna o valor de counter somando
            } else if (action == 'sub'){
                counter -= 1; return counter; //retorna o valor de counter subtraindo
            }
        }
    })();
})();