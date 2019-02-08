//initialize function called when the script loads
function initialize(){
	cityPop();
};

//function to create a table with cities and their populations
function cityPop(){
	//define two arrays for cities and population
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");
	
	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");
	
	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
	
	//indicates that there will be activities outside the user's control
	//such as calcuating the size of the city population to add a city size category
	//and events when users interact with the site
    addColumns(cityPop);
    addEvents();
};

//depending on the size of the city population, a category will appear automatically by the city
function addColumns(cityPop){
    
    $('tr').each(function(i){

    	if (i == 0){
			
			//add a title called City Size
    		$(this).append('<th>City Size</th>');
    	} else {
			
			//defines citysize
    		var citySize;
				
			//depending on the size of the city, one of those 3 categories will be shown
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
			
			//citysize will be included in the table
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

//events that will happen when users interact with the site
function addEvents(){
	
	//when the mouse hover above the text
    $('table').mouseover(function(){
        
		//colors will appear
        var color = "rgb(";

        for (var i=0; i<3; i++){

            var random = Math.round(Math.random() * 255);
			
			//the colors will be selected randomly
            color += random;

            if (i<2){
                color += ",";
            
            } else {
                color += ")";
            
        };

        $(this).css('color', color);
        
        };
    
    });
    
	//when the mouse click on the text
    $('table').on('click', clickme);
};

//when the text is being clicked, an alert box will appear with this text
function clickme(){
        alert('Hey, you clicked me!');
};
        

//call the initialize function when the document has loaded
$(document).ready(initialize);