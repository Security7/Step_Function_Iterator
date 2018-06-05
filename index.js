//
//	This step function is responsabile for incrementing our count so we know
//	how many time the Step Function looped on itself
//
exports.handler = async (event) => {
	
	//
	//	1.	Get all the information that is passed between the Lambda functions
	//		and save them in clear variables
	//
	let loop_limit = event.loop_limit;
	let loop_count = event.loop_count;
	
	//
	//	2. Increment our counter
	//
	loop_count++;
  
	//
	//	->	Retunr all the unchanged and changed data to the next step
	//
	 return {
		loop_limit: loop_limit,
		loop_count: loop_count,
		count_limit: loop_count < loop_limit
	};
	
};