import wrap from 'lib/item';

export default {
	forCollection(collection) {
		if (collection.collectionType === 'dynamic/fast') {
			console.log('a', collection)
			var bigs = [], std = [];
			collection.curated.forEach(function (story) {
				if (parseInt(story.group, 10) >= 1) {
					bigs.push(wrap(story));
				} else {
					std.push(wrap(story));
				}
			});

			if (bigs.length === 0) {
				console.error('do it');
				return [];
			} else if (bigs[0].properties.isBoosted) {
				if (bigs.length === 1) {
					console.error('do it');
					return [];
				} else {
					console.log('returning this');
					return [{
						container: 'u-unstyled l-row  l-row--cols-4 fc-slice fc-slice--qqq-q',
						items: bigs.slice(0, 2).map((item, index) => { return {
							item,
							className: index === 0 ?
								'fc-slice__item l-row__item l-row__item--span-3 u-faux-block-link'
								:
								'fc-slice__item l-row__item l-row__item--span-1 u-faux-block-link'
							,
							trailClassName: index === 0 ?
								'fc-item--standard-mobile fc-item--three-quarters-tablet'
								:
								'fc-item--list-media-mobile fc-item--standard-tablet'
						}; })
					}, {
						container: 'u-unstyled l-row  l-row--cols-4 fc-slice fc-slice--q-q-ql-ql',
						items: bigs.slice(2, 6).map(item => { return {
							item,
							className: 'fc-slice__item l-row__item l-row__item--span-1 u-faux-block-link',
							trailClassName: 'fc-item--list-media-mobile fc-item--standard-tablet'
						}; }).concat([
							{
								container: 'fc-slice__item l-row__item l-row__item--span-2',
								className: 'u-unstyled l-list l-list--columns-1 l-list--rows-5',
								items: std.map(item => { return {
									item,
									className: 'fc-slice__item l-list__item l-row__item l-row__item--span-1 u-faux-block-link',
									trailClassName: 'fc-item--list-mobile fc-item--list-tablet'
								}; })
							}
						])
					}];
				}
			} else if (bigs.length === 1) {
				console.log('a');
			} else if (bigs.length === 2) {
				console.log('b');
			} else if (bigs.length === 3) {
				console.log('c');
			} else {
				console.log('d');
			}
		} else {
			console.log('You should implement', collection.type);
		}

		return [];
	}
}

/*

package slices

import cards.Standard
import layout.SingleItem

object DynamicFast extends DynamicContainer {
  protected def standardSlices(stories: Seq[Story], firstSlice: Option[Slice]): Seq[Slice] = {
	val isFirstBoosted = stories.headOption.exists(_.isBoosted)

	val BigsAndStandards(bigs, _) = bigsAndStandards(stories)

	if (stories.isEmpty) {
	  Nil
	} else {
	  Seq(
		if (stories.forall(_.group == 0)) {
		  Ql3Ql3Ql3Ql3
		} else if (isFirstBoosted) {
		  bigs.length match {
			case 1 => HalfQl4Ql4
			case _ =>
			  if (firstSlice.exists(_.layout.columns.exists({
				case SingleItem(_, itemClasses) => itemClasses.mobile != Standard
				case _ => false
			  }))) {
				HalfQuarterQl2Ql4B
			  } else {
				HalfQuarterQl2Ql4
			  }
		  }
		} else {
		  bigs.length match {
			case 1 => QuarterQlQlQl
			case 2 => QuarterQuarterQlQl
			case 3 => QuarterQuarterQuarterQl
			case _ => QuarterQuarterQuarterQuarter
		  }
		}
	  )
	}
  }
}


*/
