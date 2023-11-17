var wms_layers = [];


        var lyr_VietnamOSMBecaMaps_0 = new ol.layer.Tile({
            'title': 'Vietnam OSM BecaMaps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://thuduc-maps.hcmgis.vn/thuducserver/gwc/service/wmts?layer=thuduc:thuduc_maps&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}'
            })
        });
var format_tttm_hcm_1 = new ol.format.GeoJSON();
var features_tttm_hcm_1 = format_tttm_hcm_1.readFeatures(json_tttm_hcm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tttm_hcm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tttm_hcm_1.addFeatures(features_tttm_hcm_1);
var lyr_tttm_hcm_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tttm_hcm_1, 
                style: style_tttm_hcm_1,
                interactive: true,
                title: '<img src="styles/legend/tttm_hcm_1.png" /> tttm_hcm'
            });
var format_nha_hcm_2 = new ol.format.GeoJSON();
var features_nha_hcm_2 = format_nha_hcm_2.readFeatures(json_nha_hcm_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nha_hcm_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nha_hcm_2.addFeatures(features_nha_hcm_2);
var lyr_nha_hcm_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nha_hcm_2, 
                style: style_nha_hcm_2,
                interactive: true,
                title: '<img src="styles/legend/nha_hcm_2.png" /> nha_hcm'
            });

lyr_VietnamOSMBecaMaps_0.setVisible(true);lyr_tttm_hcm_1.setVisible(true);lyr_nha_hcm_2.setVisible(true);
var layersList = [lyr_VietnamOSMBecaMaps_0,lyr_tttm_hcm_1,lyr_nha_hcm_2];
lyr_tttm_hcm_1.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'id': 'id', 'dm_loai_dt': 'dm_loai_dt', 'ten': 'ten', 'dia_chi': 'dia_chi', 'dm_hang_id': 'dm_hang_id', 'dc_dl': 'dc_dl', 'sl_sap': 'sl_sap', 'dm_nganh_k': 'dm_nganh_k', 'dm_phuong_': 'dm_phuong_', 'dm_quan_id': 'dm_quan_id', 'bql_dt': 'bql_dt', 'bql_tb_hot': 'bql_tb_hot', 'bql_tb_dt': 'bql_tb_dt', 'updated_at': 'updated_at', 'mo_ta': 'mo_ta', 'dm_dinh_hu': 'dm_dinh_hu', 'tg_hd': 'tg_hd', 'dm_quan_te': 'dm_quan_te', 'chu_dau_tu': 'chu_dau_tu', 'chu_quan': 'chu_quan', 'he_thong': 'he_thong', 'dc_chinh': 'dc_chinh', 'dm_phuong1': 'dm_phuong1', 'bql_tb_cv': 'bql_tb_cv', 'dien_tich': 'dien_tich', 'von_dau_tu': 'von_dau_tu', 'danh_hieu': 'danh_hieu', 'sl_hang': 'sl_hang', 'metro': 'metro', 'nuoc_ngoai': 'nuoc_ngoai', 'vanh_dai': 'vanh_dai', 'cao_toc': 'cao_toc', 'dm_hang_te': 'dm_hang_te', 'dm_loai__1': 'dm_loai__1', 'dm_nganh_1': 'dm_nganh_1', 'dm_dinh__1': 'dm_dinh__1', });
lyr_nha_hcm_2.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'loai': 'Loại nhà', 'ten': 'Tên công trình', 'tinhchat': 'Tính Chất', 'so_tang': 'Số tầng', 'chieu_cao': 'chieu_cao', 'ma_hc': 'Mã hành chính', 'doi_tuong': 'Đối tượng nhà', 'st_area_sh': 'Diện tích', 'st_length_': 'st_length_', 'maphuong': 'maphuong', 'maquan': 'maquan', });
lyr_tttm_hcm_1.set('fieldImages', {'gid': '', 'objectid': '', 'id': '', 'dm_loai_dt': '', 'ten': '', 'dia_chi': '', 'dm_hang_id': '', 'dc_dl': '', 'sl_sap': '', 'dm_nganh_k': '', 'dm_phuong_': '', 'dm_quan_id': '', 'bql_dt': '', 'bql_tb_hot': '', 'bql_tb_dt': '', 'updated_at': '', 'mo_ta': '', 'dm_dinh_hu': '', 'tg_hd': '', 'dm_quan_te': '', 'chu_dau_tu': '', 'chu_quan': '', 'he_thong': '', 'dc_chinh': '', 'dm_phuong1': '', 'bql_tb_cv': '', 'dien_tich': '', 'von_dau_tu': '', 'danh_hieu': '', 'sl_hang': '', 'metro': '', 'nuoc_ngoai': '', 'vanh_dai': '', 'cao_toc': '', 'dm_hang_te': '', 'dm_loai__1': '', 'dm_nganh_1': '', 'dm_dinh__1': '', });
lyr_nha_hcm_2.set('fieldImages', {'gid': 'Range', 'objectid': 'TextEdit', 'loai': 'TextEdit', 'ten': 'TextEdit', 'tinhchat': 'TextEdit', 'so_tang': 'TextEdit', 'chieu_cao': 'TextEdit', 'ma_hc': 'TextEdit', 'doi_tuong': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'maphuong': 'TextEdit', 'maquan': 'TextEdit', });
lyr_tttm_hcm_1.set('fieldLabels', {'gid': 'inline label', 'objectid': 'inline label', 'id': 'inline label', 'dm_loai_dt': 'inline label', 'ten': 'inline label', 'dia_chi': 'inline label', 'dm_hang_id': 'inline label', 'dc_dl': 'inline label', 'sl_sap': 'inline label', 'dm_nganh_k': 'inline label', 'dm_phuong_': 'inline label', 'dm_quan_id': 'inline label', 'bql_dt': 'inline label', 'bql_tb_hot': 'inline label', 'bql_tb_dt': 'inline label', 'updated_at': 'inline label', 'mo_ta': 'inline label', 'dm_dinh_hu': 'inline label', 'tg_hd': 'inline label', 'dm_quan_te': 'inline label', 'chu_dau_tu': 'header label', 'chu_quan': 'inline label', 'he_thong': 'inline label', 'dc_chinh': 'inline label', 'dm_phuong1': 'inline label', 'bql_tb_cv': 'inline label', 'dien_tich': 'inline label', 'von_dau_tu': 'inline label', 'danh_hieu': 'inline label', 'sl_hang': 'inline label', 'metro': 'inline label', 'nuoc_ngoai': 'inline label', 'vanh_dai': 'inline label', 'cao_toc': 'inline label', 'dm_hang_te': 'inline label', 'dm_loai__1': 'inline label', 'dm_nganh_1': 'inline label', 'dm_dinh__1': 'inline label', });
lyr_nha_hcm_2.set('fieldLabels', {'gid': 'inline label', 'objectid': 'inline label', 'loai': 'inline label', 'ten': 'inline label', 'tinhchat': 'inline label', 'so_tang': 'inline label', 'chieu_cao': 'inline label', 'ma_hc': 'inline label', 'doi_tuong': 'inline label', 'st_area_sh': 'inline label', 'st_length_': 'inline label', 'maphuong': 'inline label', 'maquan': 'inline label', });
lyr_nha_hcm_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});