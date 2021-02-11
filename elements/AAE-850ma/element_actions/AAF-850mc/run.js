function(instance, properties, context) {
	
  	var tour = instance.data.myTour;
  	var showCTA = instance.data.showCTA;
  	var ctaLabel = instance.data.ctaLabel;
  	var showPrevTour = instance.data.showPrevTour;
  	var showNextTour = instance.data.showNextTour;
  
  	var hideNext = properties.hideNext;
  	var showNext;
  	if (hideNext == true || showNextTour == false) {
      showNext = false;
    } else {
      showNext = true;
    };
  
  	var hidePrev = properties.hidePrevious;
  	var showPrev;
  	if (hidePrev == true || showPrevTour == false) {
      showPrev = false;
    } else {
      showPrev = true;
    };
  
  	var target = properties.elementId;
  	var placement = properties.placement.toLowerCase();
  	var title = properties.title;
  	var content = properties.content;
  	var fixed = properties.fixedPosition;
  	var xOff = properties.xOffset;
  	var yOff = properties.yOffset;
  	var delay = properties.delay;
  	var nextOnClick = properties.nextOnClick;
  
  	var arrowOffset = properties.arrowOffset;
  	var centerArrow = properties.centerArrow;
  
  	var arrowOff;
  	if (centerArrow == true) {
      arrowOff = "center";
    } else {
      arrowOff = arrowOffset;
    };
  
  	var newStep = {
      target: target,
      placement: placement,
      title: title,
      content: content,
      fixedElement: fixed,
      showNextButton: showNext,
      showPrevButton: showPrev,
      showCTAButton: showCTA,
      ctaLabel: ctaLabel,
      onCTA: function() {
        instance.triggerEvent("onCTA");
      },
      xOffset: xOff,
      yOffset: yOff,
      arrowOffset: arrowOff,
      delay: delay,
      nextOnTargetClick: nextOnClick,
    }
  
    tour.steps.push(newStep);

}