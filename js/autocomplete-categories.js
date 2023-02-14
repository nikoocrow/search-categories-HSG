let Suggestions = [
	
	"allergy",
	"appliance repair",
	"attorney",
	"auto glass",
	"auto parts",
	"auto repair",
	"bail bonds",
	"business insurance",
	"cable tv",
	"contact lenses",
	"chiropractor",
	"cleaning service",
	"criminal attorney",
	"damage restoration",
	"dentures",
	"dermatology",
	"dentist",
	"divorce attorney",
	"document destruction",
	"electrician",
	"family law attorney",
	"fence service",
	"fuels",
	"flooring",
	"funeral",
	"garage door",
	"general contractors",
	"gutters",
	"gynecologist",
	"home warranty",
	"hvac",
	"insurance",
	"internet",
	"lawn care",
	"locksmiths",
	"movers",
	"optometrists",
	"orthodontist",
	"orthopedics",
	"painter",
	"paving",
	"personal injury attorney",
	"pest control",
	"physician",
	"plastic surgeon",
	"plumber",
	"podiatrists",
	"roofer",
	"real estate",
	"septic tank",
	"storage",
	"telephone",
	"Tree service",
	"tire dealer",
	"towing",
	"veterinarian",
	"windows",
	"wrongful death attorney",

 ];

   //Auto complete here

  const searchWrapperSB = document.querySelector('.search-boxSB');
  const inputBoxSB = searchWrapperSB.querySelector('input');
  const suggBoxSB = searchWrapperSB.querySelector('.autocom-boxSB');


   inputBoxSB.onkeyup = (e)=>{
      let userData = e.target.value; //user enetered data
      let emptyArray = [];
  
      var regex = /[^a-z ]*$/gi;
      inputBoxSB.value = inputBoxSB.value.replace(regex,'');
  
      if(userData){
          emptyArray = Suggestions.filter((data)=>{
              //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
              return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
          });
          emptyArray = emptyArray.map((data)=>{
              // passing return data inside li tag
              return data = `<li>${data}</li>`;
          });
          searchWrapperSB.classList.add('active'); //show autocomplete box
          showSuggestionsSB(emptyArray);
          let allList = suggBoxSB.querySelectorAll('li');
          for (let i = 0; i < allList.length; i++) {
              //adding onclick attribute in all li tag
              allList[i].setAttribute('onclick', 'selectSB(this)');
          }
      }else{
          searchWrapperSB.classList.remove('active'); //hide autocomplete box
      }
  }
  
  function selectSB(element){
      let selectData = element.textContent;
      inputBoxSB.value = selectData;
      searchWrapperSB.classList.remove('active');
  }
  
  function showSuggestionsSB(list){
      let listData;
      if(!list.length){
          userValue = inputBoxSB.value;
          listData = `<li>${userValue}</li>`;
      }else{
        listData = list.join('');
      }
      suggBoxSB.innerHTML = listData;
  }