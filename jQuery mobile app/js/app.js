function add(){
    var name = $('[name="itemName"]').val();
    
    var objects = getObjects();
    
    objects.push({
        name:name
    });
    
    saveObject(objects);
}

function getObjects(){
    if(localStorage.getItem("objects")){
        objects = JSON.parse(localStorage.getItem("objects"));
    }else{
        objects = new Array();
    }
    return objects;
}

function saveObject(objects){
    console.log(JSON.stringify(objects));
	localStorage.setItem("objects", JSON.stringify(objects));
}

function homepage(){
    objects = getObjects();
    
    $('#items').find('li').remove();
    
    // Add every object to the objects list
	$.each(objects, function(index, item){
		element = '<li>'+item.name+'</li>';
		
		$('#items').append(element);
	});
  
   $('#items').listview();
   $('#items').listview("refresh");
}

$(document).on('pagebeforeshow', '#home', function(event) {
	       homepage();
});