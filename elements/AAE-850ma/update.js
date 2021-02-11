function(instance, properties, context) {
  
  	var showClose = properties.showCloseButton;
  	var showPrevious = properties.showPrevButton;
  	var showNext = properties.showNextButton;
  	var showCTA = properties.showCTAButton;
  	var ctaLabel = properties.ctaLabel;
  	var bubbleWidth = properties.defaultBubbleWidth;
  	var bubblePadding = properties.defaultBubblePadding;
  	var scrollDuration = properties.scrollDuration;
  	var translateTour = properties.translateTour;
  	var nextLabel = properties.nextButtonLabel;
  	var previousLabel = properties.prevButtonLabel;
  	var doneLabel = properties.doneButtonLabel;
  	var stepLabels = properties.stepNumberLabels;
  	
  	if (stepLabels) {
      stepLabels = stepLabels.split(",");
    }
  
	var tour = {
      id: "my-tour",
      steps: [],
      onStart: function() {
        var step = hopscotch.getCurrStepNum() + 1;
        instance.publishState("stepNumber", step);
        instance.triggerEvent("onStart");
      },
      onEnd: function() {
        var step = 0;
        instance.publishState("stepNumber", step);
        instance.triggerEvent("onFinish");
      },
      onClose: function() {
        var step = 0;
        instance.publishState("stepNumber", step);
        instance.triggerEvent("onClose");
      },
      onNext: function() {
        instance.triggerEvent("onNext");
        var step = hopscotch.getCurrStepNum() + 1;
        instance.publishState("stepNumber", step);
      },
      onPrev: function() {
        instance.triggerEvent("onPrev");
      },
      showCloseButton: showClose,
      showPrevButton: showPrevious,
      showNextButton: showNext,
      bubbleWidth: bubbleWidth,
      bubblePadding: bubblePadding,
      scrollDuration: scrollDuration,
    };
  
  	if (translateTour === true) {
      tour.i18n = {
        nextBtn: nextLabel,
        prevBtn: previousLabel,
        doneBtn: doneLabel,
      }
      if (stepLabels) {
        tour.i18n.stepNums = stepLabels
      }
    };
  
  	instance.data.myTour = tour;
    instance.data.showCTA = showCTA;
 	instance.data.ctaLabel = ctaLabel;
  	instance.data.showPrevTour = showPrevious;
  	instance.data.showNextTour = showNext;

}

