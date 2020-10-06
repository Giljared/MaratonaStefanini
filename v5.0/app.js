(function () {
    /**
     *  O use strict define que toda as variaveis tenham que ser declaradas,
     *  para que nenhuma assuma contexto global acidentalmente;
     *  ou seja
     * 
     * NON strict-mode
     * variavel = "string";     // virou global
     * 
     * USE strict-mode
     * var variavel = "string";  // local ou global
     * 
     */
    "use strict"

    var app = angular.module('app', []);

    app.controller('controlador', function($scope) {
        $scope.nome = 'Joao';
    });
    app.controller('contador', function($scope) {
        $scope.count = '0';
        $scope.adicionar =  function(){$scope.count = fazer('add')};
        $scope.subtrair =  function(){$scope.count = fazer('sub')};
    });

    // Necessario hoisting claro - "move UP!"
    var fazer = (function (action) {
        var counter = 0;
        return function(action) {
            if(action == 'add'){
                counter += 1; return counter;
            } else if (action == 'sub'){
                counter -= 1; return counter;
            }
        }
    })();
})();

