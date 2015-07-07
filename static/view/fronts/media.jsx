import React from 'react';

function image (trail) {
    if (trail.hasImage()) {
        return (
            <div className="fc-item__image-container u-responsive-ratio inlined-image">
                <img src={trail.getImage()} />
            </div>
        );
    }
}

export default class Media extends React.Component {
    render() {
        let trail = this.props.trail,
            content = image(trail);

        return (
            <div className="fc-item__media-wrapper">
                {content}
            </div>
        );
    }
}



/*

video or other 

@item.displayElement.filter(const(item.showDisplayElement)) match {
                        case Some(InlineVideo(videoElement, title, endSlatePath, fallback)) if item.cardTypes.showVideoPlayer => {
                                @defining(VideoPlayer(
                                    videoElement,
                                    Video640,
                                    title,
                                    autoPlay = false,
                                    showControlsAtStart = false,
                                    endSlatePath,
                                    Some(false),
                                    item.id
                                )) { player =>
                                    <div class="fc-item__media-wrapper u-faux-block-link__promote media__container--hidden js-video-player">
                                        <div class="fc-item__video-container">
                                            @video(player, false, item.cardTypes.showVideoEndSlate)
                                        </div>
                                    </div>
                                    @fallback.map { fallbackImage =>
                                        <div class="fc-item__video-fallback media__placeholder--active js-video-placeholder gu-media__fallback">
                                            <div class="@RenderClasses("fc-item__video-play", "media__placeholder--hidden", "vjs-big-play-button", "js-video-play-button")"><span></span></div>
                                            @image(
                                                fallbackImage.imageContainer,
                                                inlineImage = containerIndex == 0 && index < 4,
                                                widthsByBreakpoint = Some(item.mediaWidthsByBreakpoint)
                                            )
                                        </div>
                                    }
                                }
                        }

                        case Some(svg @ CrosswordSvg(_)) => {
                            <div class="fc-item__media-wrapper">
                                <div class="fc-item__image-container u-responsive-ratio inlined-image">
                                    <img src="@svg.imageUrl" class="responsive-img js-crossword-thumbnail" alt=""
                                    role="presentation" data-crossword-id="@svg.persistenceId" />
                                </div>
                            </div>
                        }

                        case Some(InlineVideo(_, _, _, Some(fallbackImage))) => {
                            @image(
                                fallbackImage.imageContainer,
                                inlineImage = containerIndex == 0 && index < 4,
                                widthsByBreakpoint = Some(item.mediaWidthsByBreakpoint)
                            )
                        }

                        case Some(InlineImage(imageContainer)) => {
                            @image(
                                imageContainer,
                                inlineImage = containerIndex == 0 && index < 4,
                                widthsByBreakpoint = Some(item.mediaWidthsByBreakpoint)
                            )
                        }

                        case Some(InlineSlideshow(imageElements)) => {
                            <div class="fc-item__media-wrapper">
                                <div class="fc-item__image-container u-responsive-ratio js-slideshow">
                                        @imageElements.headOption.map { imageElement =>

                                            @lazyImage(
                                                Seq("responsive-img"),
                                                ImgSrc.srcset(imageElement.url, item.mediaWidthsByBreakpoint),
                                                item.mediaWidthsByBreakpoint.sizes,
                                                None,
                                                containerIndex == 0 && index < 4,
                                                false
                                            )
                                            @imageElements.tail.map { imageElement =>

                                                @lazyImage(
                                                    Seq("responsive-img"),
                                                    ImgSrc.srcset(imageElement.url, item.mediaWidthsByBreakpoint),
                                                    item.mediaWidthsByBreakpoint.sizes,
                                                    None,
                                                    false,
                                                    true
                                                )
                                            }
                                        }
                                </div>
                            </div>
                        }

                        case _ => { }
                    }

 */
