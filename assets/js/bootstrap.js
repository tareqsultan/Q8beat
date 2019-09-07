/*global window: true, document: true*/
(function (App, $) {
  "use strict";

  var al = '/content/audio/2002DANC/';

  $(document).ready(function () {

    // INIT ALL THE THINGS

    // Initialize main UI components
    App.ui.TrackManager('#sequence', '#trackmanager');

    App.ui.Transport('#transport');


    // Time keeper
    App.Tempo();

    // Keeps all the ons and offs
    App.Pattern();

    // Allow playing some sounds
    App.ChannelManager()
        .addChannel(al + 'tbol-dm.wav')
        .addChannel(al + 'tbol-dm2.wav')
        .addChannel(al + 'tar-dm.wav')
        .addChannel(al + 'tar-tk.wav')
        .addChannel(al + 'tar-tk3.wav');
  });

}(window.STEPSEQUENCER, window.jQuery));
