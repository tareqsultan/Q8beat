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
        .addChannel('tbol-dm.wav')
        .addChannel('tbol-dm2.wav')
        .addChannel('tar-dm.wav')
        .addChannel('tar-tk.wav')
        .addChannel('tar-tk3.wav');
  });

}(window.STEPSEQUENCER, window.jQuery));
