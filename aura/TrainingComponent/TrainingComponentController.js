({
	init : function(component, event, helper) {
		console.log("here");
	},
    myButtonClick : function(component, event, helper){
        console.log("clicked");
        var attr1 = component.get("v.myval");
        console.log(attr1);
        component.set("v.myval", "Changed by Arun");
        
        console.log("entered val is"+component.get("v.inpVal"));
    }
})