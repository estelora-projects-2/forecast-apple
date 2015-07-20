var DetailsPage = {

  load: function(appt) {
    var description = '';
    var html = $('#spane-detail').html();
    $('.spane-content').html(html);

    //back button must be after html loads
    $('.back-spane1').click(function() {
      ListPage.load();
      ListPage.render();
    });

    $('.edit').click(function() {
      EditPage.load(appt);
    });

    /*
     * SYNTAX: $.get("url", function)
     * create a local server  in terminal: python -m SimpleHTTPServer
     * type "localhost:8000" in browser to use the website
     */

    $.get("template/details.html", function(template) {
      var detailTemplate = _.template(template);
      var html = detailTemplate({
        // variable: edit, value: appt
        appt: appt
      });
      $('.detail').html(html);


      //weather API here
      $.get("http://api.openweathermap.org/data/2.5/weather?q="+appt.city+","+ appt.state, function(weather) {
          $(".weather-description").html(weather.weather[0].description);          
      });

    });
   },
 };
