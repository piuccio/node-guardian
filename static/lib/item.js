export default function wrap (item) {
    let imageHref = getImage(item);

    return Object.assign({}, item, {
        getImage() {
            return imageHref;
        },
        hasImage() {
            return !!imageHref;
        },
        getTone,
        sublinks,
        isLive,
        hasMetadata
    });
}

function getImage(trail) {
    let images = trail.images;

    if (images) {
        console.log('THIS ONE HAS', images)
        return;
    } else {
        let assets = filterAssets(trail, 'image', 'main');

        if (assets.length) {
            return assets.filter(img => Number(img.typeData.width) <= 1000)
                .sort((a, b) => { return Number(a.typeData.width) - Number(b.typeData.width); })
                .pop()
                .file;
        } else {
            return;
        }
    }
}

function filterAssets(trail, type, relation) {
    return trail.content.elements
            .filter(img => img.type === type && img.relation === relation)
            .reduce((list, img) => { list = list.concat(img.assets); return list; }, []);
}

function getTone() {
    return this.content.tags.filter(tag => tag.type === 'tone')[0] || {};
}

function sublinks() {
    return [];
}

function isLive() {
    return this.content.fields.liveBloggingNow === 'true';
}

function hasMetadata() {
    return true;
}
