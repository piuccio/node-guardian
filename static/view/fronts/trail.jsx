import React from 'react';
import classes from 'lib/view/getClasses';
import Media from 'view/fronts/media.jsx!';

export default class Trail extends React.Component {
    render() {
        console.log('trail', this.props.item)
        let trail = this.props.item,
            titleClassName = 'fc-item__title' + (trail.properties.isQuoted ? ' fc-item__title--quoted' : ''),
            byline = trail.bylineText ? <div className="fc-item__byline">{trail.bylineText}</div> : '',
            trailText = trail.trailText ? <div className="fc-item__standfirst">{trail.trailText}</div> : '',
            live = trail.isLive ? <div className="js-liveblog-blocks" data-article-id={trail.isLive}></div> : '',

            snapKicker,
            dreamsnapHeader = '',
            sublinks = ''

        return (
            <div className={classes.forItem(trail, this.props.trailClassName)}
                data-id={trail.id}
                data-item-visibility="all"
                data-test-id="facia-card">

                <div className="fc-item__container">
                    {snapKicker}

                    <Media trail={trail} />

                    <div className="fc-item__content">
                        {dreamsnapHeader}
                        <div className="fc-item__header">
                            <h2 className={titleClassName}>{trail.headline}</h2>
                            {byline}
                        </div>

                        {trailText}
                        {live}
                        {sublinks}
                    </div>

                    <a href={trail.content.webUrl} className="u-faux-block-link__overlay js-headline-text" data-link-name="article" tabindex="-1">{trail.headline}</a>

                </div>
            </div>
        );
    }
}


/*



return (
            <div className={classes.forItem(item, false)}
                data-id={trail.id}
                data-item-visibility="all"
                data-test-id="facia-card">

                <div class="fc-item__container">

                    <div class="fc-item__content">

                        @if(item.sublinks.nonEmpty) {
                            <div class="fc-item__footer--vertical" aria-hidden="true">@sublinks(item.sublinks)</div>
                        }

                        @meta(item)
                    </div>

                    @if(item.cardTypes.showCutOut) {
                        @item.cutOut.map { case cutOut @ CutOut(imageUrl, _) =>
                        <div class="fc-item__avatar">
                            @lazyImage(
                                Seq("fc-item__avatar__media", cutOut.cssClass),
                                ImgSrc.srcset(imageUrl, FaciaWidths.cutOutFromItemClasses(item.cardTypes)),
                                FaciaWidths.cutOutFromItemClasses(item.cardTypes).sizes,
                                None,
                                false
                            )
                        </div>
                        }
                    }

                    @if(item.sublinks.nonEmpty) {
                        <footer class="fc-item__footer--horizontal">@sublinks(item.sublinks)</footer>
                    }

                </div>
            </div>
        );




 */

