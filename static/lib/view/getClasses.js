export default {
	forContainerDefinition(collection) {
		return 'implement that';
	},

	forInnerContainer(collection) {
		var classes = ['fc-container__body', 'fc-container--rolled-up-hide'];

		// if ()
  //                   ("fc-show-more--hidden", containerDefinition.addShowMoreClasses),
  //                   ("js-container--fc-show-more", containerDefinition.addShowMoreClasses),
  //                   ("fc-show-more--mobile-only", containerDefinition.hasMobileOnlyShowMore)
  //               ))

		return classes.join(' ');
	},

	forItem(item, trailClassName) {
		var classes = ['fc-item', 'js-fc-item', 'js-snappable'];

		if (item.cutout) {
			// TODO not sure on the cutout
			classes.push('fc-item--has-cutout');
		}

		let tone = item.getTone().id;
		if (tone) {
			classes.push(tone.replace(/\//g, '-') + '--item');
		}

		if (item.hasImage()) {
			classes.push('fc-item--has-image');
		} else {
			classes.push('fc-item--has-no-image');
		}

		let sublinks = item.sublinks();
		if (sublinks) {
			classes.push('fc-item--has-sublinks-' + sublinks.length);
		}

		if (item.isLive()) {
			classes.push('fc-item--live');
		}

		if (item.hasMetadata()) {
			classes.push('fc-item--has-metadata');
		}

		classes.push(trailClassName);

		return classes.join(' ');
	}
};

/*

val abHeadlineClass = item.id.flatMap(ABTestHeadlines.abTestId).map(n => s"js-a-b-headline-$n")

    RenderClasses(Map(
    ) ++ item.snapStuff.map(_.cssClasses.map(_ -> true).toMap).getOrElse(Map.empty)
      ++ mediaTypeClass(item).map(_ -> true)
    )
 def mediaTypeClass(faciaCard: ContentCard) = faciaCard.mediaType map {
    case Gallery => "fc-item--gallery"
    case Video => "fc-item--video"
    case Audio => "fc-item--audio"
  }

 */
/*
    def forContainerDefinition(containerDefinition: FaciaContainer) =
    forContainer(
      containerDefinition.showLatestUpdate,
      containerDefinition.index == 0 && containerDefinition.customHeader.isEmpty,
      containerDefinition.displayName.isDefined,
      containerDefinition.commercialOptions,
      containerDefinition.hasDesktopShowMore,
      Some(containerDefinition.container),
      extraClasses = containerDefinition.customClasses.getOrElse(Seq.empty) ++
        slices.Container.customClasses(containerDefinition.container),
      disableHide = containerDefinition.hideToggle,
      lazyLoad = containerDefinition.shouldLazyLoad
    )


      def forContainer(
    showLatestUpdate: Boolean,
    isFirst: Boolean,
    hasTitle: Boolean,
    commercialOptions: ContainerCommercialOptions,
    hasDesktopShowMore: Boolean,
    container: Option[slices.Container] = None,
    extraClasses: Seq[String] = Nil,
    disableHide: Boolean = false,
    lazyLoad: Boolean
  ) = {
    RenderClasses((Seq(
      ("fc-container", true),
      ("fc-container--first", isFirst),
      ("fc-container--has-show-more", hasDesktopShowMore),
      ("js-container--first", isFirst),
      ("fc-container--sponsored", commercialOptions.isSponsored),
      ("fc-container--advertisement-feature", commercialOptions.isAdvertisementFeature),
      ("fc-container--foundation-supported", commercialOptions.isFoundationSupported),
      ("fc-container--lazy-load", lazyLoad),
      ("js-container--lazy-load", lazyLoad),
      ("js-sponsored-container", commercialOptions.isPaidFor),
      ("js-container--toggle",
        !disableHide && !container.exists(!slices.Container.showToggle(_)) && !isFirst && hasTitle && !commercialOptions.isPaidFor)
    ) collect {
      case (kls, true) => kls
    }) ++ extraClasses: _*)
  }
 */