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
        $scope.nome = 'Joao'; //Devem ser acessada com $scope.Nomevariavel pq $scope eh um objeto.
        $scope.count = '0'; 
        $scope.adicionar =  function(){$scope.count++}; //Funcao referenciada no button a partir do ng-click
        $scope.subtrair =  function(){$scope.count--};
    });
})();

