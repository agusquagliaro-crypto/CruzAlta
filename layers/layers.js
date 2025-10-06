var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelite_1 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_PuntosFijos_2 = new ol.format.GeoJSON();
var features_PuntosFijos_2 = format_PuntosFijos_2.readFeatures(json_PuntosFijos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuntosFijos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuntosFijos_2.addFeatures(features_PuntosFijos_2);
cluster_PuntosFijos_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PuntosFijos_2
});
var lyr_PuntosFijos_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PuntosFijos_2, 
                style: style_PuntosFijos_2,
                popuplayertitle: 'Puntos Fijos',
                interactive: true,
    title: 'Puntos Fijos<br />\
    <img src="styles/legend/PuntosFijos_2_0.png" /> Densificacion<br />\
    <img src="styles/legend/PuntosFijos_2_1.png" /> Punto Base<br />' });
var format_Cursosdeagua_3 = new ol.format.GeoJSON();
var features_Cursosdeagua_3 = format_Cursosdeagua_3.readFeatures(json_Cursosdeagua_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cursosdeagua_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cursosdeagua_3.addFeatures(features_Cursosdeagua_3);
var lyr_Cursosdeagua_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cursosdeagua_3, 
                style: style_Cursosdeagua_3,
                popuplayertitle: 'Cursos de agua',
                interactive: true,
                title: '<img src="styles/legend/Cursosdeagua_3.png" /> Cursos de agua'
            });
var format_Radiourbano_4 = new ol.format.GeoJSON();
var features_Radiourbano_4 = format_Radiourbano_4.readFeatures(json_Radiourbano_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Radiourbano_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Radiourbano_4.addFeatures(features_Radiourbano_4);
var lyr_Radiourbano_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Radiourbano_4, 
                style: style_Radiourbano_4,
                popuplayertitle: 'Radio urbano',
                interactive: true,
                title: '<img src="styles/legend/Radiourbano_4.png" /> Radio urbano'
            });
var format_Radiourbanoampliado_5 = new ol.format.GeoJSON();
var features_Radiourbanoampliado_5 = format_Radiourbanoampliado_5.readFeatures(json_Radiourbanoampliado_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Radiourbanoampliado_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Radiourbanoampliado_5.addFeatures(features_Radiourbanoampliado_5);
var lyr_Radiourbanoampliado_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Radiourbanoampliado_5, 
                style: style_Radiourbanoampliado_5,
                popuplayertitle: 'Radio urbano (ampliado)',
                interactive: true,
                title: '<img src="styles/legend/Radiourbanoampliado_5.png" /> Radio urbano (ampliado)'
            });
var format_Manzanas_6 = new ol.format.GeoJSON();
var features_Manzanas_6 = format_Manzanas_6.readFeatures(json_Manzanas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzanas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzanas_6.addFeatures(features_Manzanas_6);
var lyr_Manzanas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Manzanas_6, 
                style: style_Manzanas_6,
                popuplayertitle: 'Manzanas',
                interactive: true,
                title: '<img src="styles/legend/Manzanas_6.png" /> Manzanas'
            });
var format_Barrios_7 = new ol.format.GeoJSON();
var features_Barrios_7 = format_Barrios_7.readFeatures(json_Barrios_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barrios_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barrios_7.addFeatures(features_Barrios_7);
var lyr_Barrios_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barrios_7, 
                style: style_Barrios_7,
                popuplayertitle: 'Barrios',
                interactive: true,
    title: 'Barrios<br />\
    <img src="styles/legend/Barrios_7_0.png" /> Arroyito<br />\
    <img src="styles/legend/Barrios_7_1.png" /> Belgrano<br />\
    <img src="styles/legend/Barrios_7_2.png" /> Libertad<br />\
    <img src="styles/legend/Barrios_7_3.png" /> Liniers<br />\
    <img src="styles/legend/Barrios_7_4.png" /> Rivadavia<br />\
    <img src="styles/legend/Barrios_7_5.png" /> San Martin<br />' });
var format_Reddegestiondecalles_8 = new ol.format.GeoJSON();
var features_Reddegestiondecalles_8 = format_Reddegestiondecalles_8.readFeatures(json_Reddegestiondecalles_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reddegestiondecalles_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reddegestiondecalles_8.addFeatures(features_Reddegestiondecalles_8);
var lyr_Reddegestiondecalles_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reddegestiondecalles_8, 
                style: style_Reddegestiondecalles_8,
                popuplayertitle: 'Red de gestion de calles',
                interactive: true,
    title: 'Red de gestion de calles<br />\
    <img src="styles/legend/Reddegestiondecalles_8_0.png" /> Cordon cuneta (Sin pav.)<br />\
    <img src="styles/legend/Reddegestiondecalles_8_1.png" /> Pavimento<br />' });
var format_Distibuciondeaguapotable_9 = new ol.format.GeoJSON();
var features_Distibuciondeaguapotable_9 = format_Distibuciondeaguapotable_9.readFeatures(json_Distibuciondeaguapotable_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distibuciondeaguapotable_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distibuciondeaguapotable_9.addFeatures(features_Distibuciondeaguapotable_9);
var lyr_Distibuciondeaguapotable_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Distibuciondeaguapotable_9, 
                style: style_Distibuciondeaguapotable_9,
                popuplayertitle: 'Distibucion de agua potable',
                interactive: true,
                title: '<img src="styles/legend/Distibuciondeaguapotable_9.png" /> Distibucion de agua potable'
            });
var format_ParcelasZonificacion_10 = new ol.format.GeoJSON();
var features_ParcelasZonificacion_10 = format_ParcelasZonificacion_10.readFeatures(json_ParcelasZonificacion_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelasZonificacion_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelasZonificacion_10.addFeatures(features_ParcelasZonificacion_10);
var lyr_ParcelasZonificacion_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelasZonificacion_10, 
                style: style_ParcelasZonificacion_10,
                popuplayertitle: 'Parcelas (Zonificacion)',
                interactive: true,
    title: 'Parcelas (Zonificacion)<br />\
    <img src="styles/legend/ParcelasZonificacion_10_0.png" /> AREA DE PROHIBICION<br />\
    <img src="styles/legend/ParcelasZonificacion_10_1.png" /> CENTRICA COMERCIAL<br />\
    <img src="styles/legend/ParcelasZonificacion_10_2.png" /> COMERCIAL<br />\
    <img src="styles/legend/ParcelasZonificacion_10_3.png" /> INDUSTRIAL A<br />\
    <img src="styles/legend/ParcelasZonificacion_10_4.png" /> INDUSTRIAL B<br />\
    <img src="styles/legend/ParcelasZonificacion_10_5.png" /> RESIDENCIAL 1<br />\
    <img src="styles/legend/ParcelasZonificacion_10_6.png" /> RESIDENCIAL 2<br />\
    <img src="styles/legend/ParcelasZonificacion_10_7.png" /> RESIDENCIAL 3<br />\
    <img src="styles/legend/ParcelasZonificacion_10_8.png" /> RESIDENCIAL-QUINTAS<br />\
    <img src="styles/legend/ParcelasZonificacion_10_9.png" /> RESTO URBANIZADA<br />' });
var format_ParcelasCatastro_11 = new ol.format.GeoJSON();
var features_ParcelasCatastro_11 = format_ParcelasCatastro_11.readFeatures(json_ParcelasCatastro_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelasCatastro_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelasCatastro_11.addFeatures(features_ParcelasCatastro_11);
var lyr_ParcelasCatastro_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelasCatastro_11, 
                style: style_ParcelasCatastro_11,
                popuplayertitle: 'Parcelas (Catastro)',
                interactive: true,
                title: '<img src="styles/legend/ParcelasCatastro_11.png" /> Parcelas (Catastro)'
            });
var group_IDECOR = new ol.layer.Group({
                                layers: [lyr_Reddegestiondecalles_8,lyr_Distibuciondeaguapotable_9,lyr_ParcelasZonificacion_10,lyr_ParcelasCatastro_11,],
                                fold: 'open',
                                title: 'IDECOR'});
var group_CATASTRO = new ol.layer.Group({
                                layers: [lyr_Cursosdeagua_3,lyr_Radiourbano_4,lyr_Radiourbanoampliado_5,lyr_Manzanas_6,lyr_Barrios_7,],
                                fold: 'open',
                                title: 'CATASTRO'});

lyr_OpenStreetMap_0.setVisible(false);lyr_GoogleSatelite_1.setVisible(true);lyr_PuntosFijos_2.setVisible(false);lyr_Cursosdeagua_3.setVisible(false);lyr_Radiourbano_4.setVisible(false);lyr_Radiourbanoampliado_5.setVisible(false);lyr_Manzanas_6.setVisible(false);lyr_Barrios_7.setVisible(false);lyr_Reddegestiondecalles_8.setVisible(false);lyr_Distibuciondeaguapotable_9.setVisible(false);lyr_ParcelasZonificacion_10.setVisible(false);lyr_ParcelasCatastro_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelite_1,lyr_PuntosFijos_2,group_CATASTRO,group_IDECOR];
lyr_PuntosFijos_2.set('fieldAliases', {'ID': 'ID', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'Tipo': 'Tipo', });
lyr_Cursosdeagua_3.set('fieldAliases', {'nombre': 'nombre', 'tipo': 'tipo', 'orden': 'orden', 'cuenca': 'cuenca', 'subcuenca': 'subcuenca', });
lyr_Radiourbano_4.set('fieldAliases', {'nombre': 'nombre', 'area [m2]': 'area [m2]', 'tipo_gobie': 'tipo_gobie', });
lyr_Radiourbanoampliado_5.set('fieldAliases', {'nombre': 'nombre', 'area [m2]': 'area [m2]', 'tipo_gobie': 'tipo_gobie', });
lyr_Manzanas_6.set('fieldAliases', {'nomenclatu': 'nomenclatu', });
lyr_Barrios_7.set('fieldAliases', {'Barrio': 'Barrio', });
lyr_Reddegestiondecalles_8.set('fieldAliases', {'Estado': 'Estado', });
lyr_Distibuciondeaguapotable_9.set('fieldAliases', {});
lyr_ParcelasZonificacion_10.set('fieldAliases', {'Nomencl': 'Nomencl', 'Estado': 'Estado', 'Desig_Of': 'Desig_Of', 'Rentas': 'Rentas', 'Cuenta': 'Cuenta', 'Muni_CUIM': 'Muni_CUIM', 'Muni_Mz': 'Muni_Mz', 'Muni_Lote': 'Muni_Lote', 'Muni_Calle': 'Muni_Calle', 'Muni_Nro': 'Muni_Nro', 'CIR': 'CIR', 'SEC': 'SEC', 'MAN': 'MAN', 'PAR': 'PAR', 'Zona': 'Zona', 'SupMin [m]': 'SupMin [m]', 'Retiro': 'Retiro', 'AltMax': 'AltMax', 'FreMin [m]': 'FreMin [m]', 'FOT': 'FOT', 'FOS': 'FOS', });
lyr_ParcelasCatastro_11.set('fieldAliases', {'Nomencl': 'Nomencl', 'Estado': 'Estado', 'Desig_Of': 'Desig_Of', 'ValTotal': 'ValTotal', 'SupUrbana': 'SupUrbana', 'ValTerreno': 'ValTerreno', 'SupRural': 'SupRural', 'SupEdif': 'SupEdif', 'ValEdif': 'ValEdif', 'Rentas': 'Rentas', 'Cuenta': 'Cuenta', 'Muni_CUIM': 'Muni_CUIM', 'Muni_Mz': 'Muni_Mz', 'Muni_Lote': 'Muni_Lote', 'Muni_Calle': 'Muni_Calle', 'Muni_Nro': 'Muni_Nro', 'Muni_Estad': 'Muni_Estad', 'CIR': 'CIR', 'SEC': 'SEC', 'MAN': 'MAN', 'PAR': 'PAR', });
lyr_PuntosFijos_2.set('fieldImages', {'ID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Cursosdeagua_3.set('fieldImages', {'nombre': 'TextEdit', 'tipo': 'TextEdit', 'orden': 'TextEdit', 'cuenca': 'TextEdit', 'subcuenca': 'TextEdit', });
lyr_Radiourbano_4.set('fieldImages', {'nombre': 'TextEdit', 'area [m2]': '', 'tipo_gobie': 'TextEdit', });
lyr_Radiourbanoampliado_5.set('fieldImages', {'nombre': 'TextEdit', 'area [m2]': '', 'tipo_gobie': 'TextEdit', });
lyr_Manzanas_6.set('fieldImages', {'nomenclatu': 'TextEdit', });
lyr_Barrios_7.set('fieldImages', {'Barrio': 'TextEdit', });
lyr_Reddegestiondecalles_8.set('fieldImages', {'Estado': 'TextEdit', });
lyr_Distibuciondeaguapotable_9.set('fieldImages', {});
lyr_ParcelasZonificacion_10.set('fieldImages', {'Nomencl': 'TextEdit', 'Estado': 'TextEdit', 'Desig_Of': 'TextEdit', 'Rentas': 'TextEdit', 'Cuenta': 'TextEdit', 'Muni_CUIM': 'TextEdit', 'Muni_Mz': 'TextEdit', 'Muni_Lote': 'TextEdit', 'Muni_Calle': 'TextEdit', 'Muni_Nro': 'TextEdit', 'CIR': 'TextEdit', 'SEC': 'TextEdit', 'MAN': 'TextEdit', 'PAR': 'TextEdit', 'Zona': 'TextEdit', 'SupMin [m]': 'TextEdit', 'Retiro': 'TextEdit', 'AltMax': 'TextEdit', 'FreMin [m]': 'TextEdit', 'FOT': 'TextEdit', 'FOS': 'TextEdit', });
lyr_ParcelasCatastro_11.set('fieldImages', {'Nomencl': 'TextEdit', 'Estado': 'TextEdit', 'Desig_Of': 'TextEdit', 'ValTotal': 'TextEdit', 'SupUrbana': 'TextEdit', 'ValTerreno': 'TextEdit', 'SupRural': 'TextEdit', 'SupEdif': 'TextEdit', 'ValEdif': 'TextEdit', 'Rentas': 'TextEdit', 'Cuenta': 'TextEdit', 'Muni_CUIM': 'TextEdit', 'Muni_Mz': 'TextEdit', 'Muni_Lote': 'TextEdit', 'Muni_Calle': 'TextEdit', 'Muni_Nro': 'TextEdit', 'Muni_Estad': 'TextEdit', 'CIR': 'TextEdit', 'SEC': 'TextEdit', 'MAN': 'TextEdit', 'PAR': 'TextEdit', });
lyr_PuntosFijos_2.set('fieldLabels', {'ID': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Z': 'inline label - always visible', 'Tipo': 'inline label - always visible', });
lyr_Cursosdeagua_3.set('fieldLabels', {'nombre': 'inline label - always visible', 'tipo': 'inline label - always visible', 'orden': 'inline label - always visible', 'cuenca': 'inline label - always visible', 'subcuenca': 'inline label - always visible', });
lyr_Radiourbano_4.set('fieldLabels', {'nombre': 'inline label - always visible', 'area [m2]': 'inline label - always visible', 'tipo_gobie': 'inline label - always visible', });
lyr_Radiourbanoampliado_5.set('fieldLabels', {'nombre': 'inline label - always visible', 'area [m2]': 'inline label - always visible', 'tipo_gobie': 'inline label - always visible', });
lyr_Manzanas_6.set('fieldLabels', {'nomenclatu': 'inline label - always visible', });
lyr_Barrios_7.set('fieldLabels', {'Barrio': 'inline label - always visible', });
lyr_Reddegestiondecalles_8.set('fieldLabels', {'Estado': 'inline label - always visible', });
lyr_Distibuciondeaguapotable_9.set('fieldLabels', {});
lyr_ParcelasZonificacion_10.set('fieldLabels', {'Nomencl': 'inline label - always visible', 'Estado': 'inline label - always visible', 'Desig_Of': 'inline label - always visible', 'Rentas': 'inline label - always visible', 'Cuenta': 'inline label - always visible', 'Muni_CUIM': 'inline label - always visible', 'Muni_Mz': 'inline label - always visible', 'Muni_Lote': 'inline label - always visible', 'Muni_Calle': 'inline label - always visible', 'Muni_Nro': 'inline label - always visible', 'CIR': 'inline label - always visible', 'SEC': 'inline label - always visible', 'MAN': 'inline label - always visible', 'PAR': 'inline label - always visible', 'Zona': 'inline label - always visible', 'SupMin [m]': 'inline label - always visible', 'Retiro': 'inline label - always visible', 'AltMax': 'inline label - always visible', 'FreMin [m]': 'inline label - always visible', 'FOT': 'inline label - always visible', 'FOS': 'inline label - always visible', });
lyr_ParcelasCatastro_11.set('fieldLabels', {'Nomencl': 'inline label - always visible', 'Estado': 'inline label - always visible', 'Desig_Of': 'inline label - always visible', 'ValTotal': 'inline label - always visible', 'SupUrbana': 'inline label - always visible', 'ValTerreno': 'inline label - always visible', 'SupRural': 'inline label - always visible', 'SupEdif': 'inline label - always visible', 'ValEdif': 'inline label - always visible', 'Rentas': 'inline label - always visible', 'Cuenta': 'inline label - always visible', 'Muni_CUIM': 'inline label - always visible', 'Muni_Mz': 'inline label - always visible', 'Muni_Lote': 'inline label - always visible', 'Muni_Calle': 'inline label - always visible', 'Muni_Nro': 'inline label - always visible', 'Muni_Estad': 'inline label - always visible', 'CIR': 'inline label - always visible', 'SEC': 'inline label - always visible', 'MAN': 'inline label - always visible', 'PAR': 'inline label - always visible', });
lyr_ParcelasCatastro_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});