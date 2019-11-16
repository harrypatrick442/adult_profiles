module.exports= new (function(){
	const STORED_PROCEDURE_SET='porn_site_search_members_criteria_set';
	const STORED_PROCEDURE_GET='porn_site_search_members_criteria_get';
	const ID='id';
	const USER_ID='userId';
	const GENDER='gender';
	const LAT='lat';
	const LNG='lng';
	const AGE_fROM='ageFrom';
	const AGE_TO='ageTo';
			
    const Dal= require('dal');
	const sql = Dal.sql;
	const S = require('./../strings/S');
	const each=require('./../../../core/backend/each');
	this.get = function(userId, callback){
		dalPornSite.query({storedProcedure:STORED_PROCEDURE_GET, 
			parameters:[
				{name:USER_ID, value:parseInt(userId), type:sql.Int},
			],
			callback:function(result){
				var rows = result.recordsets[0];
				var searchMembersCriterias=[];
				each(rows, function(row){
					searchMembersCriterias.push(readSearchMembersCriteria(row));
				});
				callback(searchMembersCriteria);
		}});
	};
	
	this.set=function(userId, searchMembersCriterias, callback){
		var params=[{name:USER_ID, value:userId, type:sql.Int}];
		var table = new sql.Table();
		table.columns.add(ID,sql.Int);
		table.columns.add(GENDER,sql.TinyInt);
		table.columns.add(LAT,sql.Decimal);
		table.columns.add(LNG,sql.TinyInt);
		table.columns.add(AGE_FROM,sql.TinyInt);
		table.columns.add(AGE_TO, sql.TinyInt);
		each(searchMembersCriterias, function(s){
			table.rows.add(s[S.ID], s[S.GENDER], s[S.LAT], s[S.LNG], s[S.AGE_FROM], s[S.AGE_TO]);
		});
		params.push({name:CRITERIAS, value:table});
		dalPornSite.query({storedProcedure:STORED_PROCEDURE_SET, 
			parameters:params,
			callback:function(){
				callback&&callback();
		}});
	};
	
	
	function getSearh(obj){
		return [
			{name:AMBITIOUS,value:obj[S.AMBITIOUS],type:sql.TinyInt}
		];
	}
	function readSearchMembersCriteria(row){
		var searchMembersCriteria={};
		searchMembersCriteria[S.GENDER]=row[GENDER];
		searchMembersCriteria[S.LAT]=row[LAT];
		searchMembersCriteria[S.LNG]=row[LNG];
		searchMembersCriteria[S.AGE_FROM]=row[AGE_FROM];
		searchMembersCriteria[S.AGE_TO]=row[AGE_TO];
		return searchMembersCriteria;
	}
})();
