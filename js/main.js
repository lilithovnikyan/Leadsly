$( document ).ready(function() {
    if($(".toggleInput").length !== 0) {
        $( ".toggleInput" ).click(function() {
            $( this ).toggleClass( "toggle-input" );
        });
    };
    if($(".open-list").length !== 0) {
        $( ".open-list" ).click(function() {
            $(this).find('.dropdown-menu').toggleClass("dropdown-menu-open");
        });
    };
    if($(".add-additional-step").length !== 0) {
        var $number = 1;
        $( ".add-additional-step" ).click(function() {
            $( ".add-step-block" ).append( "" +
                "<div class='add-step-div'> " +
                     "<p class=\"step-text-1\">Step 2 .</p>" +
                     "<a class=\"campaigns-btn-3\"><span class=\"add-step-span\"></span>Invite to connect</a> " +
                "</div>");
        });
    };
    if($(".editCampaign").length !== 0) {
        $( ".editCampaign" ).click(function() {
            $('.editCampaignShow').toggleClass("editCampaignHide");
            $('.editCampaignBlock').toggleClass("editCampaignBlockShow");
        });
    };
    if($(".editBack").length !== 0) {
        $( ".editBack" ).click(function() {
            $('.editCampaignShow').toggleClass("editCampaignHide");
            $('.editCampaignBlock').toggleClass("editCampaignBlockShow");
        });
    };
    if($(".checkLeads").length !== 0) {
        $( ".checkLeads" ).click(function() {
            $('.editCampaignShow').toggleClass("editCampaignHide");
            $('.checkLeadsHide').toggleClass("checkLeadsShow");
        });
    };
    if($(".createNewCampaign").length !== 0) {
        $( ".createNewCampaign" ).click(function() {
            $('.editCampaignShow').toggleClass("editCampaignHide");
            $('.createNewCampaignHide').toggleClass("createNewCampaignShow");
        });
    };
    if($(".createNewCampaignBack").length !== 0) {
        $( ".createNewCampaignBack" ).click(function() {
            $('.editCampaignShow').toggleClass("editCampaignHide");
            $('.createNewCampaignHide').toggleClass("createNewCampaignShow");
        });
    };
    if($(".addNewCampaignBack").length !== 0) {
        $( ".addNewCampaignBack" ).click(function() {
            $('.createNewCampaignShow').toggleClass("editCampaignHide");
            $('.addStepBlockHide').toggleClass("addStepBlockShow");
        });
    };
    if($(".stepBlockBack").length !== 0) {
        $( ".stepBlockBack" ).click(function() {
            $('.createNewCampaignShow').toggleClass("editCampaignHide");
            $('.addStepBlockHide').toggleClass("addStepBlockShow");
        });
    };
});
