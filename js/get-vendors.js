$().ready (function(){
get(2)
.done(function(res){
 CreateUserTable(res);
 console.log(res);
})
.fail(function(err){
    console.error(err);
});
});
function CreateUserTable(user){
$("#idx").text(vendor.ID);
$("#name").text(vendor.FirstName + " " +user.LastName);
$("#email").text(vendor.Email);
$("#phone").text(vendor.Phone);
$("#username").text(vendor.UserName);
$("#reviewer").text((vendor.IsReviewer? "Yes" :"No"));
$("#admin").text((vendor.IsAdmin ? "Yes" : "No"));

}