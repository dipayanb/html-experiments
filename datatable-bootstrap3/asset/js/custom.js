$(document).ready(function() {
	$('#datatable').dataTable( {
		"bPaginate": false,
		"bFilter": false,
		//"sScrollY": 300,
		"sScrollX": "100%",
		"sScrollXInner": "150%",
		"bScrollCollapse": true,
        "aaData": [
            /* Reduced data set */
            [ "Trident", "Internet Explorer 4.0", "Win 95+", 4, "X", "Trident", "Internet Explorer 4.0", "Win 95+", 4, "X" ],
            [ "Trident", "Internet Explorer 5.0", "Win 95+", 5, "C", "Trident", "Internet Explorer 4.0", "Win 95+", 4, "X" ],
            [ "Trident", "Internet Explorer 5.5", "Win 95+", 5.5, "A", "Trident", "Internet Explorer 4.0", "Win 95+", 4, "X" ],
            [ "Trident", "Internet Explorer 6.0", "Win 98+", 6, "A", "Trident", "Internet Explorer 4.0", "Win 95+", 4, "X" ],
            [ "Trident", "Internet Explorer 7.0", "Win XP SP2+", 7, "A", "Trident", "Internet Explorer 4.0", "Win 95+", 4, "X" ],
            [ "Gecko", "Firefox 1.5", "Win 98+ / OSX.2+", 1.8, "A", "Trident", "Internet Explorer 4.0", "Win 95+", 4, "X" ],
            [ "Gecko", "Firefox 2", "Win 98+ / OSX.2+", 1.8, "A", "Trident", "Internet Explorer 4.0", "Win 95+", 4, "X" ],
            [ "Gecko", "Firefox 3", "Win 2k+ / OSX.3+", 1.9, "A", "Trident", "Internet Explorer 4.0", "Win 95+", 4, "X" ],
            [ "Webkit", "Safari 1.2", "OSX.3", 125.5, "A" , "Trident", "Internet Explorer 4.0", "Win 95+", 4, "X"],
            [ "Webkit", "Safari 1.3", "OSX.3", 312.8, "A", "Trident", "Internet Explorer 4.0", "Win 95+", 4, "X" ],
            [ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A", "Trident", "Internet Explorer 4.0", "Win 95+", 4, "X" ],
            [ "Webkit", "Safari 3.0", "OSX.4+", 522.1, "A", "Trident", "Internet Explorer 4.0", "Win 95+", 4, "X" ]
        ],
        "aoColumns": [
            { "sTitle": "Engine" },
            { "sTitle": "Browser" },
            { "sTitle": "Platform" },
            { "sTitle": "Version", "sClass": "center" },
            { "sTitle": "Grade" , "sClass": "center" },
            { "sTitle": "Engine" },
            { "sTitle": "Browser" },
            { "sTitle": "Platform" },
            { "sTitle": "Version", "sClass": "center" },
            { "sTitle": "Grade", "sClass": "center" }
        ]
    } );
});