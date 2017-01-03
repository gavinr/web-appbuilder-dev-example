define(['dojo/_base/declare', 'jimu/BaseWidget'],
function(declare, BaseWidget) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {

    // Custom widget code goes here

    baseClass: 'test11',
    // this property is set by the framework when widget is loaded.
    // name: 'test11',
    // add additional properties here

    //methods to communication with app container:
    postCreate: function() {
      this.inherited(arguments);
      console.log('test11::postCreate!!');
    }

    // startup: function() {
    //   this.inherited(arguments);
    //   console.log('test11::startup');
    // },

    // onOpen: function(){
    //   console.log('test11::onOpen');
    // },

    // onClose: function(){
    //   console.log('test11::onClose');
    // },

    // onMinimize: function(){
    //   console.log('test11::onMinimize');
    // },

    // onMaximize: function(){
    //   console.log('test11::onMaximize');
    // },

    // onSignIn: function(credential){
    //   console.log('test11::onSignIn', credential);
    // },

    // onSignOut: function(){
    //   console.log('test11::onSignOut');
    // }

    // onPositionChange: function(){
    //   console.log('test11::onPositionChange');
    // },

    // resize: function(){
    //   console.log('test11::resize');
    // }

    //methods to communication between widgets:

  });

});
