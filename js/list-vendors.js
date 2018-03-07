
var vendors;


$().ready(function(){
   list()
   .done(function(res){                                                                  // function to get results of list function
       vendors = res;
       buildUserTable(vendors);                                                              
       console.log(res)
   })
   .fail(function(err){
       console.error(err);
   });
});
function buildUserTable(vendors){
    var tbody = $("#vendorlist");
    for(var vendor of vendors){
     var row = "<tr>";
     row += "<td>" + vendor.ID + "</td>";
     row += "<td>" + vendor.Code + "</td>";
     row += "<td>" + vendor.Name + "</td>";
     row += "<td>" + vendor.Address + "</td>";
     row += "<td>" + vendor.City + "</td>";
     row += "<td>" + vendor.State + "</td>";
     row += "<td>" + vendor.Zip + "</td>";
     row += "<td>" + vendor.Phone + "</td>";
     row += "<td>" + vendor.Email + "</td>";
     row += "<td>" + (vendor.IsRecommended ? "Yes" : "No") + "</td>";
     row += "</tr>";                                                                     ///creates row for my table
     tbody.append(row);                                                                   // appends the data to the row that was just creaed
}
};