import React from 'react';
import Collection from 'view/fronts/collection.jsx!';

export default class Front extends React.Component {
	render () {
		console.log(this.props.pressed)
		let collections = this.props.pressed.collections.map(function (collection, index) {
			return <Collection
				collection={collection}
				key={collection.id}
				index={index + 1} />;
		});

		return (
			<div class="l-side-margins">
				<div class="facia-page" data-link-name="Front | {this.props.pressed.id}" role="main">
					{collections}
				</div>

				<div class="js-front-bottom"></div>
			</div>
		);
	}
}
