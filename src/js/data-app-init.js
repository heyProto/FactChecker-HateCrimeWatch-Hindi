ProtoGraph.initDataApp = function () {
    var x = new ProtoGraph.Card.toMaps(),
        streams = ProtoGraph.streams,
        page = ProtoGraph.page;

    x.init({
        selector: document.querySelector('#card-list-div'),
        dataURL: streams.Grid.url,
        topoURL: 'https://p.factchecker.in/data/india-topo.json',
        chartOptions: {
            height: 700,
            defaultCircleColor: ProtoGraph.site['house_colour']
        },
        filterConfigurationJSON: {
            colors: {
                house_color: ProtoGraph.site['house_colour'],
                text_color: '#343434',
                active_text_color: ProtoGraph.site['house_colour'],
                filter_summary_text_color: ProtoGraph.site['reverse_font_colour']
            },
            selected_heading: 'फिल्टर',
            reset_filter_text: 'रीसेट'
        },
        filters: [
            {
                "alias": "वर्ष",
                "propName": "year"
            },
            {
                "alias": "राज्य",
                "propName": "state"
            },
            {
                "alias": "संदर्भ / पूर्वाग्रह संकेतक",
                "propName": "pretext_to_incident"
            },
            {
                "alias": "संगठन से संबद्ध था",
                "propName": "party_in_power"
            },
            {
                "alias": "हमले का प्रकार",
                "propName": "type_of_assault"
            },
            {
                "alias": "स्रोत का प्रकार",
                "propName": "type_of_source"
            },
            {
                "alias": "कथित आरोपी के खिलाफ एफआईआर दर्ज की गई?",
                "propName": "is_fir_registered"
            },
            {
                "alias": 'पीड़ित के खिलाफ एफआईआर दर्ज की गई?',
                "propName": "is_cross_fir_registered"
            }
        ]
    });
    x.renderLaptop();
}