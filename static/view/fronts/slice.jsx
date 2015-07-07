import React from 'react';
import Trail from 'view/fronts/trail.jsx!';

function generateTrail (item) {
	console.log('generating a trail with ', item.trailClassName)
	return <li className={item.className}>
		<Trail item={item.item} tailClassName={item.trailClassName} />
	</li>;
}
export default class Slice extends React.Component {
	render() {
		console.log('rendering a slice', this.props)
		var cols = this.props.slice.items.map(column => {
			console.log('ii', column);
			if (column.item) {
				return generateTrail(column);
			} else if (column.container) {
				let nested = column.items.map(generateTrail);

				return (
					<li className={column.container}>
						<ul className={column.className}>
							{nested}
						</ul>
					</li>
				);
			}
		});

		return (
			<div className="fc-slice-wrapper">
				<ul className={this.props.slice.container}>
					{cols}
				</ul>
			</div>
		);
	}
}
