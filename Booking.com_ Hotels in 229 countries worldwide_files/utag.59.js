//tealium universal tag - utag.59 ut4.0.201811121447, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'view':1};u.src='4228414';u.type='funne910';u.cat='search';u.multicat="";u.qty=0;u.countertype='session';u.qsp_delim=';';u.kvp_delim='=';u.map={"adults":"u1","book_window":"u2","channel_id":"u3","ai":"u4","currency":"u5","date_in":"u6","date_out":"u7","ui":"u8","dest_cc":"u9","dest_id":"u10","dest_type":"u11","dest_ufi":"u12","hotel_id_list":"u13","hr":"u14","language":"u15","nights":"u16","seed":"u17","ui_a":"u18","logged_in":"u19","action":"u20","sid":"ord","genis":"u23","gaclientid":"u26","stypeid":"u28","zz_mobile_advertiser_id":"dc_rdid"};u.extend=[function(a,b){try{if(1){try{b['hotel_id_list']=b.hotel_id_list.replace(/,/g,"|");}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if(b['gaclientid']==''){b['gaclientid']=b['cp._ga']}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||typeof u.ev.all!='undefined'){for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};var c,d,e,f,g;c=[];g=[];for(d in utag.loader.GV(u.map)){if(typeof b[d]!='undefined'&&b[d]!=''){e=u.map[d].split(',');for(f=0;f<e.length;f++){if(/^(cat|multicat|type|src|cost|qty|ord)$/.test(e[f])){u[e[f]]=b[d];}else{g.push(e[f]+u.kvp_delim+encodeURIComponent(b[d]))}}}}
u.base_url='//'+u.src+'.fls.doubleclick.net/activityi;src='+u.src+';type='+u.type+';';if(u.multicat==""){u.multicat_arr=[u.cat];}else{u.multicat_arr=u.multicat.split(';');}
if(u.countertype=='standard'){if(g.length>0)c.push(g.join(';'));c.push('ord='+(Math.random()*10000000000000));}else if(u.countertype=='unique'){if(g.length>0)c.push(g.join(';'));c.push('ord=1');c.push('num='+(Math.random()*10000000000000));}else{if(g.length>0)c.push(g.join(';'));c.push('ord='+u.ord);}
for(f=0;f<u.multicat_arr.length;f++){d=document.createElement('iframe');d.setAttribute('id','utag_59_iframe');d.setAttribute('height','1');d.setAttribute('width','1');d.setAttribute('style','display:none');d.setAttribute('src',u.base_url+'cat='+u.multicat_arr[f]+((c.length>0)?';'+c.join(u.qsp_delim):'')+'?');document.body.appendChild(d);}}}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('59','booking.com.main');}catch(e){}
