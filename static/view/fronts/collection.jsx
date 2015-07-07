import React from 'react';
import classes from 'lib/view/getClasses';
import slices from 'lib/view/slices';
import Slice from 'view/fronts/slice.jsx!';

export default class Collection extends React.Component {
    render() {
        let collection = this.props.collection;
        // console.log('cs', this.props)
        let renderedSlices = slices.forCollection(collection).map(function (slice) {
            return <Slice slice={slice} />;
        });
        let treats = <ul class="treats__container"></ul>;

        return (
            <section id={collection.displayName}
                 className={classes.forContainerDefinition(collection)}
                 data-link-name="container-{this.props.index} | {collection.displayName}"
                 data-id={collection.id}
                 data-component={collection.displayName}
                 aria-expanded="true">

            <div className="fc-container__inner">
                <div className="fc-container__header js-container__header">
                    <div className="fc-container__header__title">
                        <span tabIndex="0">{collection.displayName}</span>
                    </div>
                    <button className="fc-container__toggle" data-link-name="Show">
                        <span className="inline-arrow inline-icon"><svg width="24" height="10" viewBox="0 0 24 10"><path d="M0 .7l10.5 8.4 1.1.9 1.1-.9L23.2.7l-.5-.7-11.1 6.3L.6 0 0 .7z"></path></svg></span>
                        <span className="fc-container__toggle__text">Hide</span>
                    </button>
                </div>

                {treats}

                <div className={classes.forInnerContainer(collection)}
                     data-title={collection.displayName}
                     data-id={collection.id}>

                    {renderedSlices}
                </div>
            </div>
            </section>
        );
    }
}
