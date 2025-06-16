$(document).ready(function () {
    
    $('.text').textillate({
        loop:true,
        sync:true,
        in:{
            effect: "bounceIn",
        },
        out:{
            effect:"bounceOut",
        },
    });

    // Siri configuration
    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 800,
        height: 200,
        style: "ios9",
        amplitude: "1",
        speed: "0.30",
        autostart: true
      });

      // Siri message animation
    $('.siri-message').textillate({
        loop: true,
        sync: true,
        in: {
            effect: "fadeInUp",
            sync: true,
        },
        out: {
            effect: "fadeOutUp",
            sync: true,
        },

    });

    // mic button click event
    $("#MicBtn").click(function () { 
        console.log("Mic button clicked!"); // Debug line
        
        // Hide oval section and show SiriWave section
        $("#oval").hide();
        $("#SiriWave").removeAttr("hidden").show();
        
        // Call eel function
        eel.playAssistantSound()();
        
        eel.allCommands()()
    });

    function doc_keyUp(e) {

        if (e.key === 'j' && e.metaKey) {
            eel.playAssistantSound()
            $("#oval").attr("hidden", true);
            $("#SiriWave").attr("hidden", false);
            eel.allCommands()()

            // Restore oval after a delay (adjust timing as needed)
            setTimeout(function() {
                $("#SiriWave").attr("hidden", true);
                $("#oval").removeAttr("hidden").show();
            }, 5000);
        }
    }
    document.addEventListener('keyup', doc_keyUp, false);
});