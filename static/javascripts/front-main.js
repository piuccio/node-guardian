import React from 'react';
import Front from 'view/fronts/front.jsx!';
import data from 'lib/data';

data.initial().then(pressed => {
	React.render(
		React.createElement(Front, {
			pressed
		}),
		document.getElementById('react-container')
	);
});
