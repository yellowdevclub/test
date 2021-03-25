import _ from 'lodash';

function component(){
	const element = document.creatElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	return element
}

document.body.appendChild(component());