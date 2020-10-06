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
    .controller('controlador', // O primeiro parametro da funcao controller('controlador', **) tem que ser o mesmo que eh referenciado no ng-controller no index.html
    function($scope){  //Recebe a variavel do scope que referencia a pagina index.html. Entao tudo q foi criado la via diretivas(ng-click,bind e outros) vem como um objeto atraves dessa variavel.
        //console.log($scope); Para visualizar tudo que esesa variavel retorna para o controller
        $scope.nome = 'Joao'; 
    })
    .controller('contador',
    function() {
        expect(element(by.binding('count')).getText()).toMatch('0');
        element(by.css('button')).click();
        // expect(element(by.binding('count')).getText()).toMatch('1');
    })

})();