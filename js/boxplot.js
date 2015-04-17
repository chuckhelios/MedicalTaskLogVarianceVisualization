
// dep_id  key value   date
// 6   Assess & Diagnose   3   6/1/12
// 6   Assess & Diagnose   0   6/2/12
// 6   Assess & Diagnose   0   6/3/12
// 6   Assess & Diagnose   8   6/4/12
//   console.log(data);



setTimeout(function(){
  boxplot();
}, 1000);

box_path = "./anthena_boxplot_date_over.csv";

function boxplot(){

var format = d3.time.format("%m/%d/%y"); //set reader for date.format

var lowerRowWidth = $('.lower-right').width()-40;
var lowerRowHeight = $('.lower-right').innerHeight()-30;

var dep_id = inter_key;

var myrows;
var graph = d3.csv(box_path, function(rows) {
        rows.forEach(function(d){
            d.value = parseInt(d.value);
        });

          // get process of data if dep_id is given
  if (rows[0].hasOwnProperty('dep_id')){
    rows = rows.filter(function(row) {
      return row['dep_id'] == dep_id;
    });
  }

        // d.date = parseInt(d.date);
        // d.date = format.parse(d.date)
    // console.log(rows);
    var myrows = rows;
    var visualization = d3plus.viz()
        .container("#box-viz")
        .data(myrows)
        // .dev(true)
        .type("box")
        .id("second_id")
        .x({"value": "key", "label":false,"ticks":{"rendering":"geometricPrecision"}})
        .y({"value": "value","scale": "log"})
        .size(5)
        .title(subtitleTxt)
        .height(lowerRowHeight)
        .width(lowerRowWidth)
        .legend(false)
        .tooltip({"anchor":"top","font":{"size":8}, "small":180, "children":false})
        .font({
                "size":6,
        })
        .ui([{ 
                "method": "type",
                "value": ["scatter","box"]
            },
        ]);
    visualization.draw();

});
}

    // d3.selectAll('#d3plus_drawer').style('position','relative')
    // .attr("class", function(){console.log("test")});