// from data.js
var tableData = data;

// YOUR CODE HERE!
// Level 1: Automatic Table and Date Search
// Using the UFO dataset provided in the form of an array of JavaScript objects,
// write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

// Select the button
var button = d3.select("#filter-btn");
//console.log(button);

button.on("click", function () {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    //console.log(inputValue);
    //console.log(tableData);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);
 

    // First, create arrays with just the values you want
    var dateTime = filteredData.map(sighting => sighting.datetime);
    var city = filteredData.map(sighting => sighting.city);
    var state = filteredData.map(sighting => sighting.state);
    var country = filteredData.map(sighting => sighting.country);
    var shape = filteredData.map(sighting => sighting.shape);
    var duration = filteredData.map(sighting => sighting.durationMinutes);
    var comment = filteredData.map(sighting => sighting.comments);

    // Then, select the table by class id
    //var ufoTable = d3.select("ufo-table");
    // delete any rows that exist in the table
    var tb = document.getElementById("ufo-table");
    console.log(tb);
    while (tb.rows.length > 1) {
        tb.deleteRow(1);
        console.log("test");
    }

    for (var i = 1; i < filteredData.length; i++) {
        
         // add rows to a table
        var row = tb.insertRow(i);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);



        // Add some text to the new cells:
        cell1.innerHTML = dateTime[i-1];
        cell2.innerHTML = city[i-1];
        cell3.innerHTML = state[i-1];
        cell4.innerHTML = country[i-1];
        cell5.innerHTML = shape[i-1];
        cell6.innerHTML = duration[i-1];
        cell7.innerHTML = comment[i-1];
    }

})
