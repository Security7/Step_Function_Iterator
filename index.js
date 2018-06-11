//
//	This step function is responsabile for incrementing our count so we know
//	how many time the Step Function looped on itself
//
exports.handler = async (event) => {

	//
	//	1.	Update the loop count so we can detect if we are exciding the 
	//		ammount of loops that one Step Function can handle
	//
	event.loop_count++;
	
	//
	//	2.	Check if the loop count excide the limit and if so we set the
	//		variable to true, so Step Function can decide if it should 
	//		call the Restart function or not.
	//
	event.count_limit = event.loop_count < event.loop_limit;
  
	//
	//	->	Retunr all the unchanged and changed data to the next step
	//
	return event;
	
};