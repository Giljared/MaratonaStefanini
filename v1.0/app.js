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
    .controller('controlador',
    function($scope){
        $scope.nome = 'Joao';
    })
    .controller('contador',
    function() {
        expect(element(by.binding('count')).getText()).toMatch('0');
        element(by.css('button')).click();
        // expect(element(by.binding('count')).getText()).toMatch('1');
    })

})();