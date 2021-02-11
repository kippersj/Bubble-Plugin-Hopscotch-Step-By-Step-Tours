function(instance, properties, context) {
	
  	var tour = instance.data.myTour;
  	
  	if (tour.steps.length > 0) {
      hopscotch.startTour(tour, 0);
    }
}