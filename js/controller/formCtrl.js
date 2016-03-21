app.controller("FormCtrl", FormCtrl);

function FormCtrl($scope) {
	$scope.contato = new Object();

	$scope.contatos=[{
		name: "Julio Schutz",
		email: "juliocschutz@hotmail.com",
		fone: "(46)99148082"
	}];

	$scope.EditarContato = function (indexContato) {
		$scope.indexContato = indexContato;
		$scope.contato = new contato($scope.contatos[indexContato]);

		$scope.editar = true;
	}
    
    function contato (object) {
	   this.name = object.name;
	   this.email = object.email;
	   this.fone = object.fone;
    }

	$scope.salvarContato = function(contato){

		if(!!$scope.contato.name){
			if(!!$scope.editar){
				$scope.contatos[$scope.indexContato] = contato;
			}else{
				$scope.contatos.push(contato);
			}
			$scope.cancelarContato()
		}
	}

	$scope.cancelarContato = function () {
		$scope.contato = new Object();
		$scope.editar = false;
		$scope.indexContato = undefined;
	}

	$scope.excluirContato = function (indexContato){
		$scope.contatos.splice(indexContato, 1);
		$scope.cancelarContato();
	}
}
