/*
Funcionalidad agregando listas
*/

var btnAdd = document.getElementsByClassName('addList')[0];

	btnAdd.addEventListener('click', add);

/*
Funcionalidad botón guardar
*/
	function add(){
		var addBtn = document.getElementById('addBtn');
		document.getElementsByClassName('addList')[0].style.display = 'none';
		document.getElementById('formList').style.display = 'inline-block';

		var boton = document.getElementById('btnSave');
		boton.onclick = newList;
		addBtn.onclick = redo;
	};

/*
Ahora si, creo nuevas listas
*/
	function newList(){
		var textList = document.getElementById('textList').value;
		document.getElementById('textList').value = '';
		if(textList.length == 0 || textList == null){
			return;
		}

/*
Configuro y agrego nodos
*/
			var putList = document.getElementById('putList');
			var containerList = document.createElement('div');
			containerList.setAttribute('class','containerList');
			var nameList = document.createElement('div');
			nameList.setAttribute('class','readyList');
			var addNameList = document.createElement('input');		
			addNameList.setAttribute('value',textList);

/*
Se crean nodos del btn, para agregar a tarjeta
*/
			var btnList = document.createElement('button');
			btnList.setAttribute('class','btnAddCardOne');
			btnList.textContent = 'Agregar una tarjeta...'
			

/*
Se agregan nodos hijos a nodos padres
*/
			nameList.appendChild(addNameList);
			containerList.appendChild(nameList);
			containerList.appendChild(btnList);
			putList.appendChild(containerList);

/*
Esconder formulario, al agregar tarjeta
*/
			var containerAll = document.querySelector('.containerList');
			var formCard = document.createElement('div');
			formCard.setAttribute('class','formCard');
			formCard.style.display = 'none';
			var inputCard = document.createElement('textarea');
			inputCard.setAttribute('class','inputCard');
			var btnSaveCard = document.createElement('button');
			btnSaveCard.setAttribute('class','btnSave');
			btnSaveCard.textContent = 'Agregar';
			var iconCard = document.createElement('icon');		
			iconCard.setAttribute('class', 'fa fa-times');

			formCard.appendChild(inputCard);
			formCard.appendChild(btnSaveCard);
			formCard.appendChild(iconCard);
			containerAll.appendChild(formCard);

			btnList.onclick = addCard;
	};

/*
Crear más tarjetas en el tablero....
*/
	function redo(){
		document.getElementById('formList').style.display = 'none';
		document.getElementsByClassName('addList')[0].style.display = 'inline-block';
	};

	function addCard(){
		document.getElementsByClassName('btnAddCardOne')[0].style.display = 'none';
		document.getElementsByClassName('formCard')[0].style.display = 'inline-block';
	};

	function btnAddCard(){
		document.getElementsByClassName('btnAddCardOne')[0].style.display = 'none';
		document.getElementsByClassName('formCard')[0].style.display = 'inline-block';
	};