(function () {
    'use strict';

    angular
        .module('pruebaRestauranteJhApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
