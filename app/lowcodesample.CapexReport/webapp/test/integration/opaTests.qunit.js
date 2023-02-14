sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'lowcodesample/CapexReport/test/integration/FirstJourney',
		'lowcodesample/CapexReport/test/integration/pages/CapexList',
		'lowcodesample/CapexReport/test/integration/pages/CapexObjectPage'
    ],
    function(JourneyRunner, opaJourney, CapexList, CapexObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('lowcodesample/CapexReport') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCapexList: CapexList,
					onTheCapexObjectPage: CapexObjectPage
                }
            },
            opaJourney.run
        );
    }
);