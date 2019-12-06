module.exports= new (function(){
	const STORED_PROCEDURE_GET_BY_USER_ID='porn_site_profile_get_by_user_id';
	const STORED_PROCEDURE_SET_PHYSICAL='porn_site_physical_set';
	const STORED_PROCEDURE_SET_LOCATION='porn_site_location_set';
	const STORED_PROCEDURE_SET='porn_site_profile_set';
	const STORED_PROCEDURE_SEARCH_MEMBERS='porn_site_search_members';
	const TAG_CLASS_ID='tagClassId';
	const AMBITIOUS='ambitious';
	const BIRTH_ORDER='birthOrder';
	const CAR='car';
	const DRINK='drink';
	const HARD_DRUGS='hardDrugs';
	const INTENT='intent';
	const INTEREST_PEOPLE_WITH_CHILDREN='interestPeopleWithChildren';
	const I_AM_LOOKING_FOR='iAmLookingFor';
	const LONGEST_RELATIONSHIP='longestRelationship';
	const MARITAL_STATUS='maritalStatus';
	const PERSONALITY='personality';
	const PROFESSION='profession'; 
	const PROSTITUTES='prostitutes';
	const RELIGION='religion';
	const SMOKE_WEED='smokeWeed';
	const HAVE_CHILDREN='haveChildren';
	const WANT_CHILDREN='wantChildren';
	const QUADS='quads';
	const LEVEL='level';
	const VALUE='value';
	const INTERESTS='interests';
	const GENDERS='genders', AGE_FROM='ageFrom', AGE_TO='ageTo', AGE='age', ABOUT_FREE_TYPE_TRUNCATED='aboutFreeTypeTruncated',
	HAS_LOCATION='hasLocation';
	const
ADULT_PARTIES = 'adultParties',
ANAL = 'anal',
ANAL_PLAY = 'analPlay',
BAREBACK = 'bareback',
B_D_S_M = 'bDSM',
B_D_S_M_GIVING = 'bDSMGiving',
B_D_S_M_RECEIVING = 'bDSMReceiving',
BLINDFOLDS = 'blindfolds',
BUKKAKE = 'bukkake',
CAR_MEETS = 'carMeets',
C_I_M = 'cIM',
CROSS_DRESSING = 'crossDressing',
CUCKOLDING = 'cuckolding',
CYBERSEX = 'cybersex',
DEEP_THROAT = 'deepThroat',
DEPILATION = 'depilation',
DISABLED = 'disabled',
DOGGING = 'dogging',
DOMINATION = 'domination',
DOMINATION_GIVING = 'dominationGiving',
DOMINATION_RECEIVING = 'dominationReceiving',
DOUBLE_PENETRATION = 'doublePenetration',
ENEMA = 'enema',
EXHIBITIONISM = 'exhibitionism',
FACE_SITTING = 'faceSitting',
FACIALS = 'facials',
FEMALE_EJACULATION = 'femaleEjaculation',
FETISH = 'fetish',
F_F_M_3_SOMES = 'fFM3Somes',
FILMING = 'filming',
FINGERING = 'fingering',
FISTING = 'fisting',
FISTING_GIVING = 'fistingGiving',
FISTING_RECEIVING = 'fistingReceiving',
FOOD_SEX_SPLOSHING = 'foodSexSploshing',
FOOT_WORSHIP = 'footWorship',
FRENCH_KISSING = 'frenchKissing',
GANG_BANGS = 'gangBangs',
GROUP_SEX = 'groupSex',
HAND_RELIEF = 'handRelief',
HUMILIATION = 'humiliation',
HUMILIATION_GIVING = 'humiliationGiving',
HUMILIATION_RECEICING = 'humiliationReceicing',
SPANKING_GIVING = 'spankingGiving',
LAP_DANCING = 'lapDancing',
MAKING_VIDEOS = 'makingVideos',
MASOCHISM = 'masochism',
MASSAGE = 'massage',
MILKING_LACTATING = 'milkingLactating',
M_M_F_3SOMES = 'mMF3somes',
MODELING = 'modeling',
MORESOMES = 'moresomes',
NATURISM_NUDISM = 'naturismNudism',
ORAL = 'oral',
PENETRATION_PROTECTED = 'parties',
PERIOD_PLAY = 'penetrationProtected',
PHONE_SEX = 'phoneSex',
POLE_DANCING = 'poleDancing',
PREGNANT = 'pregnant',
PROSTATE_MASSAGE = 'prostateMassage',
PUSSY_PUMPING = 'pussyPumping',
RECEIVING_ORAL = 'receivingOral',
RIMMING = 'rimming',
RIMMING_GIVING = 'rimmingGiving',
RIMMING_RECEICING = 'rimmingReceicing',
ROLE_PLAY_AND_FANTASY = 'rolePlayAndFantasy',
SADISM = 'sadism',
SAME_ROOM_SWAPPING = 'sameRoomSwapping',
SAUNA_BATH_HOUSES = 'saunaBathHouses',
SMOKING_FETISH = 'smokingFetish',
SNOWBALLING = 'snowballing',
SOFT_SWING = 'softSwing',
SPANKING = 'spanking',
SPANKING_RECEIVING = 'spankingReceiving',
STRAP_ON = 'strapOn',
STRIPTEASE = 'striptease',
SUB_GAMES = 'subGames',
SWALLOW = 'swallow',
SWINGERS_CLUBS = 'swingersClubs',
SWINGING = 'swinging',
SYBIAN_AND_MACHINE_SEX = 'sybianAndMachineSex',
TAKING_PHOTOS = 'takingPhotos',
TANTRIC = 'tantric',
THREESOMES = 'threesomes',
TIE_AND_TEASE = 'tieAndTease',
TOYS = 'toys',
UNIFORMS = 'uniforms',
UNPROTECTED_SEX = 'unprotectedSex',
VOYEURISM = 'voyeurism',
WATERSPORTS_GIVING = 'watersportsGiving',
WATERSPORTS_RECEIVING = 'watersportsReceiving',
WEBCAMS = 'webcams';

					
	const GENDER='gender';
	const STREET_NUMBER='streetNumber';
	const POLITICAL='political';
	const POSTAL_TOWN='postalTown';
	const POSTAL_CODE='postalCode';
	const LOCALITY='locality';
	const ADMINISTRATIVE_AREA_LEVEL_1='administrativeAreaLevel1';
	const ADMINISTRATIVE_AREA_LEVEL_2='administrativeAreaLevel2';
	const ROUTE='route';
	const PREMISE='premise';
	const COUNTRY ='country';
	const LAT='lat';
	const LNG='lng';
	const Q0='q0';
	const Q1='q1';
	const Q2='q2';
	const Q3='q3';
	const Q4='q4';
	const Q5='q5';
	const Q6='q6';
	const Q7='q7';
	const Q8='q8';
	const Q9='q9';
	
	const Q10='q10';
	const Q11='q11';
	const Q12='q12';
	const Q13='q13';
	const Q14='q14';
	const Q15='q15';
	const Q16='q16';
	const Q17='q17';
	const Q18 = 'q18';

	const USERNAME='username';
	const USER_ID='userId';
	const NAME='name';
	const NICKNAME='nickname';
	const PHONE='phone';
	const DATE_JOINED='dateJoined';
	const EMAIL='email';
	const BIRTHDAY='birthday';
	const ABOUT_FREE_TYPE='aboutFreeType';
	const HEADLINE='headline';
	const DATE_LAST_ONLINE= 'dateLastOnline';
	const SET_PHYSICAL='setPhysical';
	const SET_PERSONALITY='setPersonality';
	const SET_INTERVIEW='setInterview';
	const SET_LOCATION='setLocation';
	const FORMATTED_ADDRESS='formattedAddress';
	const BRA_CUP_SIZE='braCupSize';
	const SHOE_SIZE='shoeSize';
	const CHEST_SIZE='chestSize';
	const DRESS_SIZE='dressSize';
	const EYE_COLOUR='eyeColour';
	const HEIGHT='height';
	const LEG_LENGTH='legLength';
	const HAIR_LENGTH='hairLength';
	const HAIR_COLOUR='hairColour';
	const PUBIC_HAIR='pubicHair';
	const SMOKER='smoker';
	const TATTOOS='tattoos';
	const PIERCINGS='piercings';
	const WAIST_SIZE='waistSize';
	const WEIGHT='weight';
	const BODY_TYPE='bodyType';
			const ETHNICITY = 'ethnicity';
	const HIPS_MEASUREMENT='hipsMeasurement';
			
    const Dal = require('dal');	
	const sql = Dal.sql ;const Strings = require('strings');
	const S = Strings.S;
	const Core = require('core');
	const each = Core.each;
	const Iterator = Core.Iterator;
	const Multimedia = require('multimedia');
	const DalMultimedia=Multimedia.DalMultimedia;
	var initialized=false;
	var dal;
	this.initialize = function(configuration){
		if(initialized)throw new Error('already initialized');
		initialized = true;
		dal = new Dal(configuration);
	};
	this.getByUserId = function(userId){
		return new Promise(function(resolve, reject){
			dal.query({storedProcedure:STORED_PROCEDURE_GET_BY_USER_ID, 
				parameters:[
					{name:USER_ID, value:parseInt(userId), type:sql.Int},
				],
			}).then(function(result){
					var rows = result.recordsets[0];
					if(rows.length>0){
						var row = rows[0];
						var profile={[S.USER_ID]:userId,[S.LOCATION]:readLocation(row),[S.INTERVIEW]:readInterview(row), [S.MULTIMEDIA_CATEGORIES]:JSON.parse(row.multimediaCategories)};
						resolve(profile);
						return;
					}
					resolve();
			}).catch(reject);
		});
	};
	this.setPhysical = function(userId, obj){
		return dal.query({storedProcedure:STORED_PROCEDURE_SET_PHYSICAL, 
			parameters:[
				{name:USER_ID, value:parseInt(userId), type:sql.Int}
			].concat(getPhysicalParams(obj))
		});
	};
	this.setPersonality = function(userId, obj){
		return dal.query({storedProcedure:STORED_PROCEDURE_SET_PERSONALITY, 
			parameters:[
				{name:USER_ID, value:parseInt(userId), type:sql.Int}
			].concat(getPersonalityParams(obj))
		});
	};
	this.setInterview = function(userId, obj){
		return dal.query({storedProcedure:STORED_PROCEDURE_SET_LOCATION, 
			parameters:[
				{name:USER_ID, value:parseInt(userId), type:sql.Int}
				].concat(getInterviewParams(obj))
		});
	};
	this.setLocation = function(userId, obj){
		return dal.query({storedProcedure:STORED_PROCEDURE_SET_LOCATION, 
			parameters:[
				{name:USER_ID, value:parseInt(userId), type:sql.Int},
				].concat(getLocationParams(obj)).concat(getLocationQuadsParams(obj[S.QUADS]))
		});
	};
	this.set=function(userId, profile){
		return new Promise(function(resolve, reject){
			var params=[{name:USER_ID, value:userId, type:sql.Int}];
			var location = profile.location;
			if(location&&location[S.CHANGED])
			{
				location[S.CHANGED]=false;
				params = params.concat(getLocationParams(location));
				params.push({name:SET_LOCATION, value:true, type:sql.Bit});
			}
			params = params.concat(getLocationQuadsParams(location&&location[S.QUADS]));
			var interview = profile.interview;
			if(interview){
				if(interview[S.CHANGED]){
					interview[S.CHANGED]=false;
					params = params.concat(getInterviewParams(interview));
					params.push({name:SET_INTERVIEW, value:true, type:sql.Bit});

				}
				var physical = interview.physical;
				if(physical&&physical[S.CHANGED]){
					physical[S.CHANGED]=false;
					params=params.concat(getPhysicalParams(physical));
					params.push({name:SET_PHYSICAL, value:true, type:sql.Bit});
				}
				var personality = interview.personality;
				if(personality&&personality[S.CHANGED]){
					personality[S.CHANGED]=false; 
					params=params.concat(getPersonalityParams(personality));
					params.push({name:SET_PERSONALITY, value:true, type:sql.Bit});
				}
			}
			var multimediaCategories = profile[S.MULTIMEDIA_CATEGORIES]?profile[S.MULTIMEDIA_CATEGORIES].where(multimediaCategory=>multimediaCategory[S.CHANGED]).toList():undefined;
			updateMultimediaCategories(multimediaCategories).then(function(){
				dal.query({storedProcedure:STORED_PROCEDURE_SET, 
					parameters:params
				}).then(resolve).catch(reject);
			}).catch(reject);
		});
	};
	this.searchMembers = function(criteria){
		return new Promise(function(resolve, reject){
			dal.query({storedProcedure:STORED_PROCEDURE_SEARCH_MEMBERS,
				parameters:getSearchMembersParams(criteria)
			}).then(function(result){
				var list=[];
				var rows = result.recordsets[0];
				each(rows, function(row){
					list.push(readMember(row));
				});
				resolve(list);
			}).catch(reject);
		});
	};
	
	function updateMultimediaCategories(multimediaCategories){
		return new Promise(function(resolve, reject){
			if(!multimediaCategories||multimediaCategories.length<=0){
				resolve();
				return;
			}
			var iteratorMultimediaCategory =new Iterator(multimediaCategories);
			function next(){
				if(!iteratorMultimediaCategory.hasNext()){
					resolve();
					return;
				}
				var multimediaCategory = iteratorMultimediaCategory.next();
				multimediaCategory[S.CHANGED]=false;
				DalMultimedia.editMultimediaCategory(multimediaCategory).then(next).catch(reject);
			}
			next();
		});
	}
	function getSearchMembersParams(obj){
			var gendersTable = new sql.Table();
			gendersTable.columns.add(VALUE,sql.SmallInt);
			var genders = obj[S.GENDERS];
			if(genders)
				each(genders, function(gender){
					gendersTable.rows.add(gender);
				});
			return [
			{name:AGE_FROM, value:obj[S.AGE_FROM], type:sql.Int},
			{name:AGE_TO, value:obj[S.AGE_TO], type:sql.Int},
			{name:GENDERS, value:gendersTable},
			{name:HAS_LOCATION, value:obj[S.HAS_LOCATION], type:sql.Bit},
			].concat(getLocationQuadsParams(obj[S.QUADS]));
	}
	function getInterviewParams(obj){
		return [
			{name:ABOUT_FREE_TYPE, value:obj[S.ABOUT_FREE_TYPE], type:sql.VarChar},
			{name:HEADLINE, value:obj[S.HEADLINE], type:sql.VarChar},
			{name:NICKNAME, value:obj[S.NICKNAME], type:sql.VarChar},
			
		];
	}
	function getPhysicalParams(obj){
		return [
			{name:BODY_TYPE, value:obj[S.BODY_TYPE], type:sql.TinyInt},
			{name:ETHNICITY, value:obj[S.ETHNICITY], type:sql.TinyInt},
			{name:HIPS_MEASUREMENT, value:obj[S.HIPS_MEASUREMENT], type:sql.TinyInt},
			{name:BRA_CUP_SIZE, value:obj[S.BRA_CUP_SIZE], type:sql.TinyInt},
			{name:CHEST_SIZE, value:obj[S.CHEST_SIZE], type:sql.TinyInt},
			{name:DRESS_SIZE, value:obj[S.DRESS_SIZE], type:sql.TinyInt},
			{name:EYE_COLOUR, value:obj[S.EYE_COLOUR], type:sql.TinyInt},
			{name:HEIGHT, value:obj[S.HEIGHT], type:sql.TinyInt},
			{name:LEG_LENGTH, value:obj[S.LEG_LENGTH], type:sql.TinyInt},
			{name:HAIR_LENGTH, value:obj[S.HAIR_LENGTH], type:sql.TinyInt},
			{name:HAIR_COLOUR, value:obj[S.HAIR_COLOUR], type:sql.TinyInt},
			{name:PUBIC_HAIR, value:obj[S.PUBIC_HAIR], type:sql.TinyInt},
			{name:SMOKER, value:obj[S.SMOKER], type:sql.TinyInt},
			{name:TATTOOS, value:obj[S.TATTOOS]	, type:sql.TinyInt},
			{name:PIERCINGS, value:obj[S.PIERCINGS], type:sql.TinyInt},
			{name:WAIST_SIZE, value:obj[S.WAIST_SIZE], type:sql.TinyInt},
			{name:SHOE_SIZE, value:obj[S.SHOE_SIZE], type:sql.TinyInt},
			{name:WEIGHT, value:obj[S.WEIGHT], type:sql.TinyInt}
		];
	}
	function getPersonalityParams(obj){
		return [
			{name:AMBITIOUS,value:obj[S.AMBITIOUS],type:sql.TinyInt},
			{name:BIRTH_ORDER,value:obj[S.BIRTH_ORDER],type:sql.TinyInt},
			{name:CAR,value:obj[S.CAR],type:sql.TinyInt},
			{name:DRINK,value:obj[S.DRINK],type:sql.TinyInt},
			{name:HARD_DRUGS,value:obj[S.HARD_DRUGS],type:sql.TinyInt},
			{name:INTENT,value:obj[S.INTENT],type:sql.TinyInt},
			{name:INTEREST_PEOPLE_WITH_CHILDREN,value:obj[S.INTEREST_PEOPLE_WITH_CHILDREN],type:sql.TinyInt},
			{name:I_AM_LOOKING_FOR,value:obj[S.I_AM_LOOKING_FOR],type:sql.TinyInt},
			{name:LONGEST_RELATIONSHIP,value:obj[S.LONGEST_RELATIONSHIP],type:sql.TinyInt},
			{name:MARITAL_STATUS,value:obj[S.MARITAL_STATUS],type:sql.TinyInt},
			{name:PERSONALITY,value:obj[S.PERSONALITY],type:sql.TinyInt},
			{name:PROFESSION,value:obj[S.PROFESSION],type:sql.TinyInt},
			{name:PROSTITUTES,value:obj[S.PROSTITUTES],type:sql.TinyInt},
			{name:RELIGION,value:obj[S.RELIGION],type:sql.TinyInt},
			{name:SMOKE_WEED,value:obj[S.SMOKE_WEED],type:sql.TinyInt},
			{name:HAVE_CHILDREN,value:obj[S.HAVE_CHILDREN],type:sql.TinyInt},
			{name:WANT_CHILDREN,value:obj[S.WANT_CHILDREN],type:sql.TinyInt},
			{name:INTERESTS, value:getPersonalityParams_interests(obj[S.INTERESTS])},
			{name:ADULT_PARTIES,value:obj[S.ADULT_PARTIES], type:sql.TinyInt},
			{name:ANAL,value:obj[S.ANAL], type:sql.TinyInt},
			{name:ANAL_PLAY,value:obj[S.ANAL_PLAY], type:sql.TinyInt},
			{name:BAREBACK,value:obj[S.BAREBACK], type:sql.TinyInt},
			{name:B_D_S_M,value:obj[S.B_D_S_M], type:sql.TinyInt},
			{name:B_D_S_M_GIVING,value:obj[S.B_D_S_M_GIVING], type:sql.TinyInt},
			{name:B_D_S_M_RECEIVING,value:obj[S.B_D_S_M_RECEIVING], type:sql.TinyInt},
			{name:BLINDFOLDS,value:obj[S.BLINDFOLDS], type:sql.TinyInt},
			{name:BUKKAKE,value:obj[S.BUKKAKE], type:sql.TinyInt},
			{name:CAR_MEETS,value:obj[S.CAR_MEETS], type:sql.TinyInt},
			{name:C_I_M,value:obj[S.C_I_M], type:sql.TinyInt},
			{name:CROSS_DRESSING,value:obj[S.CROSS_DRESSING], type:sql.TinyInt},
			{name:CUCKOLDING,value:obj[S.CUCKOLDING], type:sql.TinyInt},
			{name:CYBERSEX,value:obj[S.CYBERSEX], type:sql.TinyInt},
			{name:DEEP_THROAT,value:obj[S.DEEP_THROAT], type:sql.TinyInt},
			{name:DEPILATION,value:obj[S.DEPILATION], type:sql.TinyInt},
			{name:DISABLED,value:obj[S.DISABLED], type:sql.TinyInt},
			{name:DOGGING,value:obj[S.DOGGING], type:sql.TinyInt},
			{name:DOMINATION,value:obj[S.DOMINATION], type:sql.TinyInt},
			{name:DOMINATION_GIVING,value:obj[S.DOMINATION_GIVING], type:sql.TinyInt},
			{name:DOMINATION_RECEIVING,value:obj[S.DOMINATION_RECEIVING], type:sql.TinyInt},
			{name:DOUBLE_PENETRATION,value:obj[S.DOUBLE_PENETRATION], type:sql.TinyInt},
			{name:ENEMA,value:obj[S.ENEMA], type:sql.TinyInt},
			{name:EXHIBITIONISM,value:obj[S.EXHIBITIONISM], type:sql.TinyInt},
			{name:FACE_SITTING,value:obj[S.FACE_SITTING], type:sql.TinyInt},
			{name:FACIALS,value:obj[S.FACIALS], type:sql.TinyInt},
			{name:FEMALE_EJACULATION,value:obj[S.FEMALE_EJACULATION], type:sql.TinyInt},
			{name:FETISH,value:obj[S.FETISH], type:sql.TinyInt},
			{name:F_F_M_3_SOMES,value:obj[S.F_F_M_3_SOMES], type:sql.TinyInt},
			{name:FILMING,value:obj[S.FILMING], type:sql.TinyInt},
			{name:FINGERING,value:obj[S.FINGERING], type:sql.TinyInt},
			{name:FISTING,value:obj[S.FISTING], type:sql.TinyInt},
			{name:FISTING_GIVING,value:obj[S.FISTING_GIVING], type:sql.TinyInt},
			{name:FISTING_RECEIVING,value:obj[S.FISTING_RECEIVING], type:sql.TinyInt},
			{name:FOOD_SEX_SPLOSHING,value:obj[S.FOOD_SEX_SPLOSHING], type:sql.TinyInt},
			{name:FOOT_WORSHIP,value:obj[S.FOOT_WORSHIP], type:sql.TinyInt},
			{name:FRENCH_KISSING,value:obj[S.FRENCH_KISSING], type:sql.TinyInt},
			{name:GANG_BANGS,value:obj[S.GANG_BANGS], type:sql.TinyInt},
			{name:GROUP_SEX,value:obj[S.GROUP_SEX], type:sql.TinyInt},
			{name:HAND_RELIEF,value:obj[S.HAND_RELIEF], type:sql.TinyInt},
			{name:HUMILIATION,value:obj[S.HUMILIATION], type:sql.TinyInt},
			{name:HUMILIATION_GIVING,value:obj[S.HUMILIATION_GIVING], type:sql.TinyInt},
			{name:HUMILIATION_RECEICING,value:obj[S.HUMILIATION_RECEICING], type:sql.TinyInt},
			{name:SPANKING_GIVING,value:obj[S.SPANKING_GIVING], type:sql.TinyInt},
			{name:LAP_DANCING,value:obj[S.LAP_DANCING], type:sql.TinyInt},
			{name:MAKING_VIDEOS,value:obj[S.MAKING_VIDEOS], type:sql.TinyInt},
			{name:MASOCHISM,value:obj[S.MASOCHISM], type:sql.TinyInt},
			{name:MASSAGE,value:obj[S.MASSAGE], type:sql.TinyInt},
			{name:MILKING_LACTATING,value:obj[S.MILKING_LACTATING], type:sql.TinyInt},
			{name:M_M_F_3SOMES,value:obj[S.M_M_F_3SOMES], type:sql.TinyInt},
			{name:MODELING,value:obj[S.MODELING], type:sql.TinyInt},
			{name:MORESOMES,value:obj[S.MORESOMES], type:sql.TinyInt},
			{name:NATURISM_NUDISM,value:obj[S.NATURISM_NUDISM], type:sql.TinyInt},
			{name:ORAL,value:obj[S.ORAL], type:sql.TinyInt},
			{name:PENETRATION_PROTECTED,value:obj[S.PENETRATION_PROTECTED], type:sql.TinyInt},
			{name:PERIOD_PLAY,value:obj[S.PERIOD_PLAY], type:sql.TinyInt},
			{name:PHONE_SEX,value:obj[S.PHONE_SEX], type:sql.TinyInt},
			{name:POLE_DANCING,value:obj[S.POLE_DANCING], type:sql.TinyInt},
			{name:PREGNANT,value:obj[S.PREGNANT], type:sql.TinyInt},
			{name:PROSTATE_MASSAGE,value:obj[S.PROSTATE_MASSAGE], type:sql.TinyInt},
			{name:PUSSY_PUMPING,value:obj[S.PUSSY_PUMPING], type:sql.TinyInt},
			{name:RECEIVING_ORAL,value:obj[S.RECEIVING_ORAL], type:sql.TinyInt},
			{name:RIMMING,value:obj[S.RIMMING], type:sql.TinyInt},
			{name:RIMMING_GIVING,value:obj[S.RIMMING_GIVING], type:sql.TinyInt},
			{name:RIMMING_RECEICING,value:obj[S.RIMMING_RECEICING], type:sql.TinyInt},
			{name:ROLE_PLAY_AND_FANTASY,value:obj[S.ROLE_PLAY_AND_FANTASY], type:sql.TinyInt},
			{name:SADISM,value:obj[S.SADISM], type:sql.TinyInt},
			{name:SAME_ROOM_SWAPPING,value:obj[S.SAME_ROOM_SWAPPING], type:sql.TinyInt},
			{name:SAUNA_BATH_HOUSES,value:obj[S.SAUNA_BATH_HOUSES], type:sql.TinyInt},
			{name:SMOKING_FETISH,value:obj[S.SMOKING_FETISH], type:sql.TinyInt},
			{name:SNOWBALLING,value:obj[S.SNOWBALLING], type:sql.TinyInt},
			{name:SOFT_SWING,value:obj[S.SOFT_SWING], type:sql.TinyInt},
			{name:SPANKING,value:obj[S.SPANKING], type:sql.TinyInt},
			{name:SPANKING_RECEIVING,value:obj[S.SPANKING_RECEIVING], type:sql.TinyInt},
			{name:STRAP_ON,value:obj[S.STRAP_ON], type:sql.TinyInt},
			{name:STRIPTEASE,value:obj[S.STRIPTEASE], type:sql.TinyInt},
			{name:SUB_GAMES,value:obj[S.SUB_GAMES], type:sql.TinyInt},
			{name:SWALLOW,value:obj[S.SWALLOW], type:sql.TinyInt},
			{name:SWINGERS_CLUBS,value:obj[S.SWINGERS_CLUBS], type:sql.TinyInt},
			{name:SWINGING,value:obj[S.SWINGING], type:sql.TinyInt},
			{name:SYBIAN_AND_MACHINE_SEX,value:obj[S.SYBIAN_AND_MACHINE_SEX], type:sql.TinyInt},
			{name:TAKING_PHOTOS,value:obj[S.TAKING_PHOTOS], type:sql.TinyInt},
			{name:TANTRIC,value:obj[S.TANTRIC], type:sql.TinyInt},
			{name:THREESOMES,value:obj[S.THREESOMES], type:sql.TinyInt},
			{name:TIE_AND_TEASE,value:obj[S.TIE_AND_TEASE], type:sql.TinyInt},
			{name:TOYS,value:obj[S.TOYS], type:sql.TinyInt},
			{name:UNIFORMS,value:obj[S.UNIFORMS], type:sql.TinyInt},
			{name:UNPROTECTED_SEX,value:obj[S.UNPROTECTED_SEX], type:sql.TinyInt},
			{name:VOYEURISM,value:obj[S.VOYEURISM], type:sql.TinyInt},
			{name:WATERSPORTS_GIVING,value:obj[S.WATERSPORTS_GIVING], type:sql.TinyInt},
			{name:WATERSPORTS_RECEIVING,value:obj[S.WATERSPORTS_RECEIVING], type:sql.TinyInt},
			{name:WEBCAMS,value:obj[S.WEBCAMS], type:sql.TinyInt}
		];
	}
	function getPersonalityParams_interests(interests){
		var interestsTable = new sql.Table();
		interestsTable.columns.add(TAG_CLASS_ID ,sql.Int, {nullable: true});
		interestsTable.columns.add(NAME,sql.VarChar(50), {nullable: true});
		each(interests, function(interest){
			interestsTable.rows.add(interest[S.VALUE], interest[S.TEXT]);
		});
		return interestsTable;
	}
	function getLocationParams(obj){
		return [{name:STREET_NUMBER, value:obj[S.STREET_NUMBER], type:sql.VarChar},
				{name:ROUTE, value:obj[S.ROUTE], type:sql.VarChar},
				{name:LOCALITY, value:obj[S.LOCALITY], type:sql.VarChar},
				{name:FORMATTED_ADDRESS, value:obj[S.FORMATTED_ADDRESS], type:sql.VarChar},
				{name:POLITICAL, value:obj[S.POLITICAL], type:sql.VarChar},
				{name:POSTAL_TOWN, value:obj[S.POSTAL_TOWN], type:sql.VarChar},
				{name:ADMINISTRATIVE_AREA_LEVEL_1, value:obj[S.ADMINISTRATIVE_AREA_LEVEL_1], type:sql.VarChar},
				{name:ADMINISTRATIVE_AREA_LEVEL_2, value:obj[S.ADMINISTRATIVE_AREA_LEVEL_2], type:sql.VarChar},
				{name:COUNTRY, value:obj[S.COUNTRY], type:sql.VarChar},
				{name:POSTAL_CODE, value:obj[S.POSTAL_CODE], type:sql.VarChar},
				{name:PREMISE, value:obj[S.PREMISE], type:sql.VarChar},
				{name:LAT, value:obj[S.LAT], type:sql.Decimal(10,8)},
				{name:LNG, value:obj[S.LNG], type:sql.Decimal(11,8)}];
	}
	function getLocationQuadsParams(quads){
		if(!quads)quads =[];
		var table = new sql.Table();
		table.columns.add(LEVEL,sql.SmallInt);
		table.columns.add(VALUE,sql.BigInt);
		each(quads, function(s){
			table.rows.add(s[S.LEVEL], s[S.VALUE]);
		});
		return [{name:QUADS, value:table}];
	}
	function readInterview(row){var interview={};
		interview[S.NICKNAME]=row[NICKNAME];
		//interview[S.PHONE]=row[PHONE];
		interview[S.AGE]=100;
		//interview[S.EMAIL]=row[EMAIL];	
		interview[S.DATE_JOINED]=row[DATE_JOINED];
		interview[S.DATE_LAST_ONLINE]=row[DATE_LAST_ONLINE];
		interview[S.ABOUT_FREE_TYPE]=row[ABOUT_FREE_TYPE];
		interview[S.HEADLINE]=row[HEADLINE];
		interview[S.PHYSICAL]=readPhysical(row);
		interview[S.PERSONALITY]=readPersonality(row);
		return interview;
	}
	function readPersonality(row){
		var personality ={};
		personality[S.AMBITIOUS]=row[AMBITIOUS];
		personality[S.BIRTH_ORDER]=row[BIRTH_ORDER];
		personality[S.CAR]=row[CAR];
		personality[S.DRINK]=row[DRINK];
		personality[S.HARD_DRUGS]=row[HARD_DRUGS];
		personality[S.INTENT]=row[INTENT];
		personality[S.INTEREST_PEOPLE_WITH_CHILDREN]=row[INTEREST_PEOPLE_WITH_CHILDREN];
		personality[S.I_AM_LOOKING_FOR]=row[I_AM_LOOKING_FOR];
		personality[S.LONGEST_RELATIONSHIP]=row[LONGEST_RELATIONSHIP];
		personality[S.MARITAL_STATUS]=row[MARITAL_STATUS];
		personality[S.PERSONALITY]=row[PERSONALITY];
		personality[S.PROFESSION]=row[PROFESSION];
		personality[S.PROSTITUTES]=row[PROSTITUTES];
		personality[S.RELIGION]=row[RELIGION];
		personality[S.SMOKE_WEED]=row[SMOKE_WEED];
		personality[S.HAVE_CHILDREN]=row[HAVE_CHILDREN];
		personality[S.WANT_CHILDREN]=row[WANT_CHILDREN];
		personality[S.INTERESTS]=JSON.parse(row[INTERESTS]);
	
		personality[S.ADULT_PARTIES]=row[ADULT_PARTIES];
		personality[S.ANAL]=row[ANAL];
		personality[S.ANAL_PLAY]=row[ANAL_PLAY];
		personality[S.BAREBACK]=row[BAREBACK];
		personality[S.B_D_S_M]=row[B_D_S_M];
		personality[S.B_D_S_M_GIVING]=row[B_D_S_M_GIVING];
		personality[S.B_D_S_M_RECEIVING]=row[B_D_S_M_RECEIVING];
		personality[S.BLINDFOLDS]=row[BLINDFOLDS];
		personality[S.BUKKAKE]=row[BUKKAKE];
		personality[S.CAR_MEETS]=row[CAR_MEETS];
		personality[S.C_I_M]=row[C_I_M];
		personality[S.CROSS_DRESSING]=row[CROSS_DRESSING];
		personality[S.CUCKOLDING]=row[CUCKOLDING];
		personality[S.CYBERSEX]=row[CYBERSEX];
		personality[S.DEEP_THROAT]=row[DEEP_THROAT];
		personality[S.DEPILATION]=row[DEPILATION];
		personality[S.DISABLED]=row[DISABLED];
		personality[S.DOGGING]=row[DOGGING];
		personality[S.DOMINATION]=row[DOMINATION];
		personality[S.DOMINATION_GIVING]=row[DOMINATION_GIVING];
		personality[S.DOMINATION_RECEIVING]=row[DOMINATION_RECEIVING];
		personality[S.DOUBLE_PENETRATION]=row[DOUBLE_PENETRATION];
		personality[S.ENEMA]=row[ENEMA];
		personality[S.EXHIBITIONISM]=row[EXHIBITIONISM];
		personality[S.FACE_SITTING]=row[FACE_SITTING];
		personality[S.FACIALS]=row[FACIALS];
		personality[S.FEMALE_EJACULATION]=row[FEMALE_EJACULATION];
		personality[S.FETISH]=row[FETISH];
		personality[S.F_F_M_3_SOMES]=row[F_F_M_3_SOMES];
		personality[S.FILMING]=row[FILMING];
		personality[S.FINGERING]=row[FINGERING];
		personality[S.FISTING]=row[FISTING];
		personality[S.FISTING_GIVING]=row[FISTING_GIVING];
		personality[S.FISTING_RECEIVING]=row[FISTING_RECEIVING];
		personality[S.FOOD_SEX_SPLOSHING]=row[FOOD_SEX_SPLOSHING];
		personality[S.FOOT_WORSHIP]=row[FOOT_WORSHIP];
		personality[S.FRENCH_KISSING]=row[FRENCH_KISSING];
		personality[S.GANG_BANGS]=row[GANG_BANGS];
		personality[S.GROUP_SEX]=row[GROUP_SEX];
		personality[S.HAND_RELIEF]=row[HAND_RELIEF];
		personality[S.HUMILIATION]=row[HUMILIATION];
		personality[S.HUMILIATION_GIVING]=row[HUMILIATION_GIVING];
		personality[S.HUMILIATION_RECEICING]=row[HUMILIATION_RECEICING];
		personality[S.SPANKING_GIVING]=row[SPANKING_GIVING];
		personality[S.LAP_DANCING]=row[LAP_DANCING];
		personality[S.MAKING_VIDEOS]=row[MAKING_VIDEOS];
		personality[S.MASOCHISM]=row[MASOCHISM];
		personality[S.MASSAGE]=row[MASSAGE];
		personality[S.MILKING_LACTATING]=row[MILKING_LACTATING];
		personality[S.M_M_F_3SOMES]=row[M_M_F_3SOMES];
		personality[S.MODELING]=row[MODELING];
		personality[S.MORESOMES]=row[MORESOMES];
		personality[S.NATURISM_NUDISM]=row[NATURISM_NUDISM];
		personality[S.ORAL]=row[ORAL];
		personality[S.PENETRATION_PROTECTED]=row[PENETRATION_PROTECTED];
		personality[S.PERIOD_PLAY]=row[PERIOD_PLAY];
		personality[S.PHONE_SEX]=row[PHONE_SEX];
		personality[S.POLE_DANCING]=row[POLE_DANCING];
		personality[S.PREGNANT]=row[PREGNANT];
		personality[S.PROSTATE_MASSAGE]=row[PROSTATE_MASSAGE];
		personality[S.PUSSY_PUMPING]=row[PUSSY_PUMPING];
		personality[S.RECEIVING_ORAL]=row[RECEIVING_ORAL];
		personality[S.RIMMING]=row[RIMMING];
		personality[S.RIMMING_GIVING]=row[RIMMING_GIVING];
		personality[S.RIMMING_RECEICING]=row[RIMMING_RECEICING];
		personality[S.ROLE_PLAY_AND_FANTASY]=row[ROLE_PLAY_AND_FANTASY];
		personality[S.SADISM]=row[SADISM];
		personality[S.SAME_ROOM_SWAPPING]=row[SAME_ROOM_SWAPPING];
		personality[S.SAUNA_BATH_HOUSES]=row[SAUNA_BATH_HOUSES];
		personality[S.SMOKING_FETISH]=row[SMOKING_FETISH];
		personality[S.SNOWBALLING]=row[SNOWBALLING];
		personality[S.SOFT_SWING]=row[SOFT_SWING];
		personality[S.SPANKING]=row[SPANKING];
		personality[S.SPANKING_RECEIVING]=row[SPANKING_RECEIVING];
		personality[S.STRAP_ON]=row[STRAP_ON];
		personality[S.STRIPTEASE]=row[STRIPTEASE];
		personality[S.SUB_GAMES]=row[SUB_GAMES];
		personality[S.SWALLOW]=row[SWALLOW];
		personality[S.SWINGERS_CLUBS]=row[SWINGERS_CLUBS];
		personality[S.SWINGING]=row[SWINGING];
		personality[S.SYBIAN_AND_MACHINE_SEX]=row[SYBIAN_AND_MACHINE_SEX];
		personality[S.TAKING_PHOTOS]=row[TAKING_PHOTOS];
		personality[S.TANTRIC]=row[TANTRIC];
		personality[S.THREESOMES]=row[THREESOMES];
		personality[S.TIE_AND_TEASE]=row[TIE_AND_TEASE];
		personality[S.TOYS]=row[TOYS];
		personality[S.UNIFORMS]=row[UNIFORMS];
		personality[S.UNPROTECTED_SEX]=row[UNPROTECTED_SEX];
		personality[S.VOYEURISM]=row[VOYEURISM];
		personality[S.WATERSPORTS_GIVING]=row[WATERSPORTS_GIVING];
		personality[S.WATERSPORTS_RECEIVING]=row[WATERSPORTS_RECEIVING];
		personality[S.WEBCAMS]=row[WEBCAMS];
		return personality;
	}
	function readPhysical(row){
		var physical = {};
			physical[S.BODY_TYPE]=row[BODY_TYPE];
			physical[S.ETHNICITY]=row[ETHNICITY];
			physical[S.BRA_CUP_SIZE]=row[BRA_CUP_SIZE];
			physical[S.SHOE_SIZE]=row[SHOE_SIZE];
			physical[S.CHEST_SIZE]=row[CHEST_SIZE];
			physical[S.DRESS_SIZE]=row[DRESS_SIZE];
			physical[S.EYE_COLOUR]=row[EYE_COLOUR];
			physical[S.HEIGHT]=row[HEIGHT];
			physical[S.LEG_LENGTH]=row[LEG_LENGTH];
			physical[S.HAIR_LENGTH]=row[HAIR_LENGTH];
			physical[S.HIPS_MEASUREMENT]=row[HIPS_MEASUREMENT];
			physical[S.HAIR_COLOUR]=row[HAIR_COLOUR];
			physical[S.PUBIC_HAIR]=row[PUBIC_HAIR];
			physical[S.SMOKER]=row[SMOKER];
			physical[S.TATTOOS]=row[TATTOOS];
			physical[S.PIERCINGS]=row[PIERCINGS];
			physical[S.WAIST_SIZE]=row[WAIST_SIZE];
			physical[S.SHOE_SIZE]=row[SHOE_SIZE];
			physical[S.WEIGHT]=row[WEIGHT];
			return physical;
	}
	function readLocation(row){
		var location = {};
			location[S.FORMATTED_ADDRESS]=row[FORMATTED_ADDRESS];
			location[S.LAT]=row[LAT];
			location[S.LNG]=row[LNG];
			return location;
	}
	function readMember(row){
		var member ={};//todo can be refactored to use the special sql string literal syntax i created but not just yet. 
		member[S.FORMATTED_ADDRESS]=row[FORMATTED_ADDRESS];
		member[S.NICKNAME]=row[NICKNAME];
		member[S.USERNAME]=row[USERNAME];
		member[S.AGE]=row[AGE];
		member[S.GENDER]=row[GENDER];
		member[S.DATE_LAST_ONLINE]=row[DATE_LAST_ONLINE];
		member[S.HEADLINE]=row[HEADLINE];
		member[S.USER_ID]=row[USER_ID];
		member[S.ABOUT_FREE_TYPE_TRUNCATED]=row[ABOUT_FREE_TYPE_TRUNCATED];
		return member;
	}
})();
