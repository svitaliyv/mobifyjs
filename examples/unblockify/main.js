var capturing = window.Mobify && window.Mobify.capturing || false;
if (capturing) {
    // Initiate capture
    Mobify.Capture.init(function(capture){
        // Grab reference to a newly created document
        var capturedDoc = capture.capturedDoc;

        Mobify.Unblockify.unblock(capturedDoc.querySelectorAll("script"));

        // Render source DOM to document
        capture.renderCapturedDoc();
    });

}
