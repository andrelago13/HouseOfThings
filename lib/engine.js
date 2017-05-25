module.exports = {
  getLights: function() {
    // TODO
    return [
      {
        id: 'kitchen1',
        description: 'Kitchen'
      },
      {
        id: 'garage1',
        description: 'Garage'
      }
    ]
  },

  getStatus: function (id) {
      return id;
  },

  getStatus: function () {
      return '';
  },

  powerThing: function (id, status) {
      return true;
  }
}