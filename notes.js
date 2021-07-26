

/* ajax

promises return 2 functions on success or failure
getCustomers()
.done(function(){succes}) .fail(function(){ error});
.them(function(){ success},function(){error});

If we have multiple ajax calls in different files, it is advisable to keep all the 
functions in a dataservice to be able to reuse them and avoid data duplication.

If we have multiple ajax calls and we want to know if they all resolve or if they cause errors, we can use
when () so that a single promise works for all

$.ajax({
    url: "/api/authentication",
    type: "POST",
    beforeSend: function(request){
        request.setRequestHeader("AuthToken", authToken);
    }
}); <-- close ajax

header values ​​can be retrieved once an ajax response is returned
authenticate(authToken)
.success(funtion(data,statusText, jqXHR){
    $(#authToken).html(jqXHR.getResponseHeader("AuthToken"));
})
.fail(function(jqXHR,statusText, err){
    alert("error authenticating: "+ err);
});

Creating an Ajax converter
$ajaxSetup({ <---normally go in a separate script and is avaible in the entire app
    converters:{
        "json jsond": function(data){
            return data && data.hasOwnProperty("d") ?
            data.d : data; 
            anything to text     text to html           evaluate text to json expression    text as xml
            "* text": String --->"text html" : true ---> "text json" : jQuery.parseJSON ---> "text xml" : jQuery.parseXML
        }
    }
})
                              string, number, object 
$("selector").data("YourKey", "Data to store");
var value = $("selector").data("YourKey");

data() can be called and assigned to a variable
var custData = $("#custInfo").data();
custData.orders = orders;
custData.shippingInfo = shippingInfo;

<div id="pet">
data-type="dog"
data-name="baron"
data-age="2"
data-trained="true"
data-objetct='{"type":"dog", "name":"baron", "age": 2, "trained": true}'>

access data
var $pet =$("#pet");
var attrName = $pet.attr("data-name");
var attrName =$pet.attr("data-name","Fido");

var $pet =$("#pet");
var dataName = $pet.data("data-name");
var dataName =$pet.data("data-name","Fido");

dont mix whit data-*Attrbutes
attr()
you want to get or set HTML5 data-* attribute values
need to be accessed as strings
data()
you need to cache a simple or complex value
You want dat-* values automatically converted to a JavaScript value(bool, number, object, etc.)

do not "sync" data-* attribute values
</div>
*/

/*
people = $.map(people, function(person)
{
    return{
        firstName: person:fn,
        lastName: person.ln,
        age: moment().diff(moment(person.bday), "years")
    };
});

var output = $("input").map(function(){
    return $(this).val();
}).get().join(" ");

people = $.grep(people, function(person){
    return person.age > 18;
})
using $.type we can see the type of the elements better than with the typeof method

function doAwesomeStuff(){
    if($.browser.msie && $.browser.version === "6.0"){
        return;
    }
}

if(modernizr input.placeholder){
    jQuery.getScript("jQuery.placeholder.min.js",
    function(){ $("input,textarea").placeholder()})
}

var calculator = {
    add: function(operand1, operand2){
        console.log(operand1 + operand2)
    },
    multiply: function(operand1, operand2){
        console.log(operand1 * operand2)
    }
};

var callbacks = $.callbacks();
callbacks.add(calculator.add);
callbacks.add(calculator.multiply);
callbacks.fire(3, 3);

<script src="prototype.js"></script>
<script src="jquery.js"></script>
<script>
$.noConflict();
$ is now back to prototype
jQuery(document).ready(fuction($){
    "$" is jQuery in this scope
});
(function($){
    "$" is jQuery in this scope
}(jQuery));
</script>
*/

/*
jQuery.fn.valentines = function(option){
    var settings = $.extend(
    {},
    { color: "red", fontSize: "16px"},
    options
    );
    return this.css(settings);
};

$("a").valentines({ color: "#A00000"});
*/
