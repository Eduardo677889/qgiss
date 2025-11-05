var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_MG_Mesorregioes_2020_1 = new ol.format.GeoJSON();
var features_MG_Mesorregioes_2020_1 = format_MG_Mesorregioes_2020_1.readFeatures(json_MG_Mesorregioes_2020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MG_Mesorregioes_2020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MG_Mesorregioes_2020_1.addFeatures(features_MG_Mesorregioes_2020_1);
var lyr_MG_Mesorregioes_2020_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MG_Mesorregioes_2020_1, 
                style: style_MG_Mesorregioes_2020_1,
                popuplayertitle: 'MG_Mesorregioes_2020',
                interactive: true,
    title: 'MG_Mesorregioes_2020<br />\
    <img src="styles/legend/MG_Mesorregioes_2020_1_0.png" /> Campo das Vertentes<br />\
    <img src="styles/legend/MG_Mesorregioes_2020_1_1.png" /> Central Mineira<br />\
    <img src="styles/legend/MG_Mesorregioes_2020_1_2.png" /> Jequitinhonha<br />\
    <img src="styles/legend/MG_Mesorregioes_2020_1_3.png" /> Metropolitana de Belo Horizonte<br />\
    <img src="styles/legend/MG_Mesorregioes_2020_1_4.png" /> Noroeste de Minas<br />\
    <img src="styles/legend/MG_Mesorregioes_2020_1_5.png" /> Norte de Minas<br />\
    <img src="styles/legend/MG_Mesorregioes_2020_1_6.png" /> Oeste de Minas<br />\
    <img src="styles/legend/MG_Mesorregioes_2020_1_7.png" /> Sul/Sudoeste de Minas<br />\
    <img src="styles/legend/MG_Mesorregioes_2020_1_8.png" /> Triângulo Mineiro/Alto Paranaíba<br />\
    <img src="styles/legend/MG_Mesorregioes_2020_1_9.png" /> Vale do Mucuri<br />\
    <img src="styles/legend/MG_Mesorregioes_2020_1_10.png" /> Vale do Rio Doce<br />\
    <img src="styles/legend/MG_Mesorregioes_2020_1_11.png" /> Zona da Mata<br />\
    <img src="styles/legend/MG_Mesorregioes_2020_1_12.png" /> <br />' });
var format_SHAPELT_2 = new ol.format.GeoJSON();
var features_SHAPELT_2 = format_SHAPELT_2.readFeatures(json_SHAPELT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHAPELT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHAPELT_2.addFeatures(features_SHAPELT_2);
var lyr_SHAPELT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHAPELT_2, 
                style: style_SHAPELT_2,
                popuplayertitle: 'SHAPELT',
                interactive: true,
    title: 'SHAPELT<br />\
    <img src="styles/legend/SHAPELT_2_0.png" /> 230.0<br />\
    <img src="styles/legend/SHAPELT_2_1.png" /> 345.0<br />\
    <img src="styles/legend/SHAPELT_2_2.png" /> 440.0<br />\
    <img src="styles/legend/SHAPELT_2_3.png" /> 500.0<br />\
    <img src="styles/legend/SHAPELT_2_4.png" /> 600.0<br />\
    <img src="styles/legend/SHAPELT_2_5.png" /> 800.0<br />\
    <img src="styles/legend/SHAPELT_2_6.png" /> <br />' });
var format_UFVCORRECT_3 = new ol.format.GeoJSON();
var features_UFVCORRECT_3 = format_UFVCORRECT_3.readFeatures(json_UFVCORRECT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UFVCORRECT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UFVCORRECT_3.addFeatures(features_UFVCORRECT_3);
var lyr_UFVCORRECT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UFVCORRECT_3, 
                style: style_UFVCORRECT_3,
                popuplayertitle: 'UFVCORRECT',
                interactive: true,
                title: '<img src="styles/legend/UFVCORRECT_3.png" /> UFVCORRECT'
            });
var group_USINASFOTOVOLTAICAS = new ol.layer.Group({
                                layers: [lyr_UFVCORRECT_3,],
                                fold: 'open',
                                title: 'USINAS FOTOVOLTAICAS'});
var group_LINHASDETRANSMISSO = new ol.layer.Group({
                                layers: [lyr_SHAPELT_2,],
                                fold: 'close',
                                title: 'LINHAS DE TRANSMISSÃO'});
var group_MESOREGIESMG = new ol.layer.Group({
                                layers: [lyr_MG_Mesorregioes_2020_1,],
                                fold: 'close',
                                title: 'MESOREGIÕES MG'});

lyr_ESRIGraylight_0.setVisible(true);lyr_MG_Mesorregioes_2020_1.setVisible(true);lyr_SHAPELT_2.setVisible(true);lyr_UFVCORRECT_3.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,group_MESOREGIESMG,group_LINHASDETRANSMISSO,group_USINASFOTOVOLTAICAS];
lyr_MG_Mesorregioes_2020_1.set('fieldAliases', {'CD_MESO': 'CD_MESO', 'NM_MESO': 'NM_MESO', 'SIGLA_UF': 'SIGLA_UF', });
lyr_SHAPELT_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descri____': 'descri____', 'concession': 'concession', 'tensao': 'tensao', 'extensao': 'extensao', 'ano_opera': 'ano_opera', 'shape_stle': 'shape_stle', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'created_us': 'created_us', 'created_da': 'created_da', });
lyr_UFVCORRECT_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_MG_Mesorregioes_2020_1.set('fieldImages', {'CD_MESO': 'TextEdit', 'NM_MESO': 'TextEdit', 'SIGLA_UF': 'TextEdit', });
lyr_SHAPELT_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'descri____': 'TextEdit', 'concession': 'TextEdit', 'tensao': 'TextEdit', 'extensao': 'TextEdit', 'ano_opera': 'TextEdit', 'shape_stle': 'TextEdit', 'last_edite': 'TextEdit', 'last_edi_1': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'TextEdit', });
lyr_UFVCORRECT_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_MG_Mesorregioes_2020_1.set('fieldLabels', {'CD_MESO': 'no label', 'NM_MESO': 'no label', 'SIGLA_UF': 'no label', });
lyr_SHAPELT_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descri____': 'no label', 'concession': 'no label', 'tensao': 'no label', 'extensao': 'no label', 'ano_opera': 'no label', 'shape_stle': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'created_us': 'no label', 'created_da': 'no label', });
lyr_UFVCORRECT_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', });
lyr_UFVCORRECT_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});