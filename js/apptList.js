// Copied from the trello:
// AppointmentList needs to be able to:
// - Add an appointment
// - Delete an appointment
// - Give us access to the array (the `list` var)
// - When an appointment is added, save it with AppointmentStorage
// - When an appointment is removed, save it with AppointmentStorage
// - Load appointments from storage at start

function AppointmentList() {
  var storage = AppointmentStorage();
  var list = storage.load();

  //   self is an object that has various
  //   functions on it that we can use
  //   creating an object that has functions
  //   self is like a mannequin object
  //   return self at the end of
  //   AppointmentList so they get it back
  var self = {};


  self.save = function() {
    storage.save(list);
  }

  self.add = function(appt) {
    list.push(appt);
    // use save function from apptStorage.js
    storage.save(list);
  };

  self.delete = function(appt) {
    var index = list.indexOf(appt);
    if (index !== -1) {
      list.splice(index, 1);
      // use save function from apptStorage.js
      storage.save(list);
    }
  };

  self.getList = function() {
    return list;
  };

  return self;
}

