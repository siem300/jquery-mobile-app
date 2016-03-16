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

function showObject(object){
    element = '<h1>' + object + '</h1><br><input type="text" name="itemName" placeholder="Change item name.."><a data-role="button" class="ui-btn" onClick="add();" href="index.html">Confirm</a><br>;';
    $('#nameObject').append(element);
}


function updateObject(object){
}

function saveObject(objects){
	localStorage.setItem("objects", JSON.stringify(objects));
}


function clearObjects(){
    localStorage.clear();
    homepage();
}


function homepage(){
    objects = getObjects();
    
    $('#items').find('li').remove();
    
    // Add every object to the objects list
	$.each(objects, function(index, item){
		element = '<li><a href="details.html?name=' + item.name + '">'+item.name+'</a></li>';
		
		$('#items').append(element);
	});
  
   $('#items').listview();
   $('#items').listview("refresh");
}


$(document).on('pagebeforeshow', '#home', function(event) {
	       homepage();
});

$(document).on('pagebeforeshow', '#details', function (event, data) {
var parameters = $(this).data("url").split("?")[1];;
parameter = parameters.replace("name=","");  
showObject(parameter);
});