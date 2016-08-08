// using this global object instead of actual ajax endpoints
// also should probably refactor the code in these actions into
// some testable component
var myCustomers = {
    customers : [
        { name: "Matt", shoeSize: 13},
        { name: "Bob Johnson", shoeSize: 10}
]};

V.initial = function() {
    // normally an ajax call to fetch customer list
    V.for("masterArea", "masterView", myCustomers);
};

V.click("#addCustomer", function() {
    V.for("detailArea", "editView", {});
});

V.click("#saveCustomer", function() {
    var newCustomer = {};
    newCustomer.name = $("#name").val();
    newCustomer.shoeSize = $("#shoeSize").val();
    myCustomers.customers.push(newCustomer);
    // normally be at least one ajax call to save the new customer
    // maybe another to re-fetch the customer list

    V.clear("detailArea");
    V.for("masterArea", "masterView", myCustomers);
});

V.go();