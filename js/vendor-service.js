var url = "http://prs.doudsystems.com";
var seg1 = "/Vendors";


$().ready(function(){
    
});
function list(){
   return $.getJSON(url + seg1 + "/List");  
}
function get(vendor){
    return $.getJSON(url + seg1 + "/Get/" + vendor);
}


