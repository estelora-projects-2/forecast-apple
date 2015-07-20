//create ListView variable for organization

var ListPage = {

  load: function() {
    var html = $('#spane-list').html();
    $('.spane-content').html(html);
    $('.add-box').click(function() {
      ListPage.onClickNewAppt();
    });
    $('.appt-item').click(function(appt) {
      ListPage.onClickAppt();
    });
  },

  // make the list in html
  render: function() {
    var list = App.appts.getList();


    /*
     * SYNTAX: $.get("url", function)
     * create a local server  in terminal: python -m SimpleHTTPServer
     * type "localhost:8000" in browser to use the website
     */
    $.get("template/appt-list.html", function(template) {
      var listTemplate = _.template(template);
      var html = listTemplate({
        list: list
      });
      $('.appt-list').html(html);

      $('.appt-item').click(function() {
        var clickIndex = parseInt(this.getAttribute('appt-index'));
        var appt = list[clickIndex];
        //load details page with the appt we find
        DetailsPage.load(appt);
      });
    });
    console.log(list.length);
    if(list.length < 1 ) {
      alert('check');
      var $directionsDiv = $('#directions');
      $directionsDiv.show().html('to make appointments,</br>click<span class="icon-plus"></span>on the right'); // show and set the message
      setTimeout(function(){ $directionsDiv.hide().html('');}, 2000); 
                                                             
    }
  },

  onClickNewAppt: function() {
    CreatePage.load();
  },
};
