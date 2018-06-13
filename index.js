//
//	This step function is responsabile for incrementing our count so we know
//	how many time the Step Function looped on itself
//
exports.handler = async (event, context) => {

	//
    //  1.  First we check if the loop count is present. If not this means 
    //      that the SF Loop just started and we should set initial count to 0.
    //
	if(!event.loop_count)
	{
		event.loop_count = 0;
	}

	//
	//	2.	Update the loop count so we can detect if we are exciding the 
	//		ammount of loops that one Step Function can handle
	//
	event.loop_count++;
	
	//
	//	3.	Check if the loop count excide the limit and if so we set the
	//		variable to true, so Step Function can decide if it should 
	//		call the Restart function or not.
	//
	event.count_limit = event.loop_count < process.env.LOOP_LIMIT;
  
	//
	//	->	Retunr all the unchanged and changed data to the next step
	//
	return event;
	
};