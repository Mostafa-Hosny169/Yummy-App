/// <reference types="../@types/jquery" />
"use strict"

// ⁡⁣⁢⁣<<<<<<<<<<<<<<<<<<<<<​‌‍‌𝘖𝘗𝘌𝘕&𝘊𝘓𝘖𝘚𝘌 𝘚𝘐𝘋𝘌 𝘉𝘈𝘙​​‌‍‌‍‍‍‍​>>>>>>>>>>>>>>>>>>>>>>⁡
$('#opeButton').on('click' , function(){
    $('.nav-all').css({'cssText':` left: 0px; `});
    $('#opeButton').addClass('d-none')
    $('#closeButton').removeClass('d-none');
    $('.nav-all .nav ul li').animate({marginTop:'0px' , opacity:1} , 1100)

})

$('#closeButton').on('click' , function(){
    $('.nav-all').css({'cssText':` left: -260px; `});
    $('#opeButton').removeClass('d-none')
    $('#closeButton').addClass('d-none')
    $('.nav-all .nav ul li').animate({marginTop:'30px' , opacity:0} , 400)
   
})

$('.nav-all .nav li').on('click' , function(){
  $('.nav-all').css({'cssText':` left: -260px; `});
  $('#opeButton').removeClass('d-none')
  $('#closeButton').addClass('d-none')
 
})
// ⁡⁣⁢⁣<<<<<<<<<<<<<<<<<<<<<​‌‍‌​‌‍‌𝘖𝘗𝘌𝘕&𝘊𝘓𝘖𝘚𝘌 𝘚𝘐𝘋𝘌 𝘉𝘈𝘙‍‍‍‍‍​>>>>>>>>>>>>>>>>>>>>>>


//* =============VARIABLES=============
let details = document.getElementById('details');
let data ;
let idDetailsData;
//* =============VARIABLES=============

// ⁡⁣⁣⁢<=====================​‌‍​‌‍‌‍𝘨𝘦𝘵 𝘮𝘢𝘪𝘭𝘴 𝘧𝘳𝘰𝘮 𝘢𝘱𝘪​​======================>
//////////////////////////////////////////////////////////⁡
async function getData(){

  $('#home').ready(function(){
    $('.loading').fadeIn(300);  
    $('body').css('overflow' , 'hidden');
  }) 

  let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  data = await response.json();
  

  $('#home').ready(function(){
    $('.loading').fadeOut(300);  
    $('body').css('overflow' , 'visible'); 
    $('.nav-all').css({'cssText':` left: -260px; `});
  }) 

}
/////////////////////////////////////////////////////////
// ⁡⁣⁣⁢<=====================​‌‍​‌‍‌‍​‌‍‌𝘨𝘦𝘵 𝘮𝘢𝘪𝘭𝘴 𝘧𝘳𝘰𝘮 𝘢𝘱𝘪​​======================>⁡

// ⁡⁢⁣⁣<===========================​‌‍‌‍𝘋𝘪𝘴𝘱𝘭𝘺 𝘮𝘢𝘪𝘭𝘴​​===========================>
////////////////////////////////////////////////////////////⁡
 async function displayMails(){
  let container=" " ;

  for(let i=0 ; i< 25 ; i++){
    container+=
    `
    <div class="col-md-3 cursor" >
      <div  onclick="getMealDetails('${data.meals[i].idMeal}')"  class="img-data imgg position-relative">
        <img src=${data.meals[i].strMealThumb} alt="image not found" class="w-100"><div class=" img-info position-absolute   w-100 h-100 "><p class="text-black" >${data.meals[i].strMeal}</p></div></div>
    </div>
    `
  }
     $('#contactUs').addClass('d-none');
  document.getElementById('homeDisplayData').innerHTML = container;

 }
 //////////////////////////////////////////////////////////
// ⁡⁢⁣⁣<===========================​‌‍‌‍𝘋𝘪𝘴𝘱𝘭𝘺 𝘮𝘢𝘪𝘭𝘴​​===========================>⁡⁡



//* =============VARIABLES=============
 let check; 
let container;
 let MaelDetails;
//* =============VARIABLES=============


// ‍‍⁡⁣⁣⁢<=====================‍‍‍‍​‌‍‌​‌‍‌⁡⁣⁣⁢𝘨𝘦𝘵 𝘮𝘢𝘪𝘭𝘴 𝘥𝘦𝘵𝘢𝘪𝘭𝘴 𝘧𝘳𝘰𝘮 𝘢𝘱𝘪⁡​⁡⁣⁣⁢​======================>⁡
//////////////////////////////////////////////////////////⁡
 async function getMealDetails(idmeal) {

  $('#home-info').ready(function(){
    $('.loading').fadeIn(300);  
    $('body').css('overflow' , 'hidden'); 
  }) 

     let MealDetailsApi =  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`)
     let  MealDetailsresponse =await MealDetailsApi.json()
     MaelDetails = MealDetailsresponse.meals;
     
     $('#home-info').ready(function(){
      $('.loading').fadeOut(300);  
      $('body').css('overflow' , 'visible'); 
    }) 

     getDisplyDetailsData(MaelDetails[0])
 }
 /////////////////////////////////////////////////////////
// ‍‍⁡⁣⁣⁢<=====================‍‍‍‍​‌‍‌𝘨𝘦𝘵 𝘮𝘢𝘪𝘭𝘴 𝘥𝘦𝘵𝘢𝘪𝘭𝘴 𝘧𝘳𝘰𝘮 𝘢𝘱𝘪​======================>


// ⁡⁢⁣⁣<===========================​‌‍‌‍𝘋𝘪𝘴𝘱𝘭𝘺 𝘮𝘢𝘪𝘭𝘴 𝘥𝘦𝘵𝘢𝘪𝘭𝘴​​===========================>
//////////////////////////////////////////////////////////⁡
 function getDisplyDetailsData(MaelDetails) {
     data=``;
     let Recipes  = ``
 
     for (let i = 1; i <= 20; i++) {
         if (MaelDetails[`strIngredient${i}`]) {
             Recipes  += `<li class="alert alert-info m-2 p-1">${MaelDetails[`strMeasure${i}`]} ${MaelDetails[`strIngredient${i}`]}</li>`
         }
     }
 
     let tags = MaelDetails.strTags?.split(",")
     if (!tags) tags = []
 
     let tagsStr = ''
     for (let i = 0; i < tags.length; i++) {
         tagsStr += `
         <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
     }
 
     container = `
                 <div class="  col-md-4 ">
                 <div class="img ">
                     <img src="${MaelDetails.strMealThumb}" alt="not found" class="w-100">
                 </div>
                 <h3 class="text-white">${MaelDetails.strMeal}</h3>
             </div>
             <div class="  col-md-8 text-white ">
                 <h2 >Instructions</h2>
                 <p> ${MaelDetails.strInstructions}</p>
                 <h3>Area : ${MaelDetails.strArea}</h3>
                 <h3>Category : ${MaelDetails.strCategory}</h3>
                 <h3>Recipes :</h3>
                 <ul class="list-unstyled d-flex g-3 flex-wrap">
                 ${Recipes}
                 </ul>
 
                 <h3>Tags :</h3>
                 <ul class="list-unstyled d-flex g-3 flex-wrap">
                 ${tagsStr}              
                 </ul>
                 <a target="_blank" href=" ${MaelDetails.strSource}" class="btn btn-success">Source</a>
                 <a target="_blank" href="${MaelDetails.strYoutube}" class="btn btn-danger">Youtube</a>
             </div>
                 `
      $('#home').addClass('d-none')            
     $('#detailsData').html(container);          
    } 
//////////////////////////////////////////////////////////
// ⁡⁢⁣⁣<===========================​‌‍‌‍𝘋𝘪𝘴𝘱𝘭𝘺 𝘮𝘢𝘪𝘭𝘴 𝘥𝘦𝘵𝘢𝘪𝘭𝘴​​===========================>⁡


//? <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<​‌‍‌ 𝘕𝘖𝘕𝘌𝘚 𝘚𝘐𝘋𝘌 𝘉𝘈𝘙 𝘓𝘐𝘕𝘒𝘚​ >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
$('.sideBarList li').on('click' ,async function(e){
  check = e.target.innerHTML;
 if(check == "Categories"){
  await getCategoriesData();
  await displayCategoriesData();
  clickCategory();
  $('#home').addClass('d-none')
  $('#home-info').addClass('d-none')
  $('#spcialCategory').addClass('d-none');
  $('#categories').removeClass('d-none');
  $('#area').addClass('d-none');
  $('#area-info').addClass('d-none');
  $('#ingredients').addClass('d-none');
  $('#ingredients-info').addClass('d-none');
  $('#search').addClass('d-none');
  $('#contactUs').addClass('d-none');
 }  

 if(check == "Area"){
   await getAreaData();
   await dispalyAreaData();
   clickArea();
   clickCategory();
  $('#home').addClass('d-none')
  $('#home-info').addClass('d-none')
  $('#spcialCategory').addClass('d-none');
  $('#categories').addClass('d-none');
  $('#area-info').addClass('d-none');
  $('#area').removeClass('d-none');
  $('#ingredients').addClass('d-none');
  $('#ingredients-info').addClass('d-none');
  $('#search').addClass('d-none');
  $('#contactUs').addClass('d-none');
 }

 if(check == "Ingredients"){
   await getIngredientsData();
   await dispalyIngredientsData();
   clickIngredients();
   clickArea();
   clickCategory();
  $('#home').addClass('d-none')
  $('#home-info').addClass('d-none')
  $('#spcialCategory').addClass('d-none');
  $('#categories').addClass('d-none');
  $('#area-info').addClass('d-none');
  $('#area').addClass('d-none');
  $('#ingredients').removeClass('d-none');
  $('#ingredients-info').addClass('d-none');
  $('#search').addClass('d-none');
  $('#contactUs').addClass('d-none');
 }

 if(check == "Search"){ 
   clickIngredients();
   clickArea();
   clickCategory();
  $('#search .dnone').removeClass('d-none');
  $('#home').addClass('d-none')
  $('#home-info').addClass('d-none')
  $('#spcialCategory').addClass('d-none');
  $('#categories').addClass('d-none');
  $('#area-info').addClass('d-none');
  $('#area').addClass('d-none');
  $('#ingredients').addClass('d-none');
  $('#ingredients-info').addClass('d-none');
  $('#search').removeClass('d-none');
  $('#contactUs').addClass('d-none');
 }

 if(check == "Contact Us"){ 
   clickIngredients();
   clickArea();
   clickCategory();
  $('#search .dnone').removeClass('d-none');
  $('#home').addClass('d-none')
  $('#home-info').addClass('d-none')
  $('#spcialCategory').addClass('d-none');
  $('#categories').addClass('d-none');
  $('#area-info').addClass('d-none');
  $('#area').addClass('d-none');
  $('#ingredients').addClass('d-none');
  $('#ingredients-info').addClass('d-none');
  $('#search').addClass('d-none');
  $('#contactUs').removeClass('d-none');
 }
})  
//? <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<​‌‍‌ ​‌‍‌𝘕𝘖𝘕𝘌𝘚 𝘚𝘐𝘋𝘌 𝘉𝘈𝘙 𝘓𝘐𝘕𝘒𝘚​​ >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//⁡⁣⁣⁢<=====================​‌‍​‌‍‌‍𝘨𝘦𝘵 𝘊𝘢𝘵𝘦𝘨𝘰𝘳𝘪𝘦𝘴 𝘋𝘢𝘵𝘢 𝘧𝘳𝘰𝘮 𝘢𝘱𝘪​​======================>
//////////////////////////////////////////////////////////////////⁡
async function getCategoriesData(){
  $('#categories').ready(function(){
    $('.loading').fadeIn(300);  
    $('body').css('overflow' , 'hidden'); 
  }) 
 
  let response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  data = await response.json();
  console.log(data);

  $('#categories').ready(function(){
    $('.loading').fadeOut(300);  
    $('body').css('overflow' , 'visible'); 
  }) 

}
//////////////////////////////////////////////////////////////////
//⁡⁣⁣⁢<=====================​‌‍​‌‍‌‍𝘨𝘦𝘵 𝘊𝘢𝘵𝘦𝘨𝘰𝘳𝘪𝘦𝘴 𝘋𝘢𝘵𝘢 𝘧𝘳𝘰𝘮 𝘢𝘱𝘪​​======================>

// ⁡⁢⁣⁡⁢⁣⁣<===========================​‌‍‌‍​‌‍‌𝘋𝘪𝘴𝘱𝘭𝘺 𝘊𝘢𝘵𝘦𝘨𝘰𝘳𝘪𝘦𝘴 𝘋𝘢𝘵𝘢​===========================>
//////////////////////////////////////////////////////////////////////⁡
 async function displayCategoriesData(){
    let container = " ";

    for(let i=0 ; i<data.categories.length ; i++){
      container+=
      `
    <div class="col-md-3 cursor" >
      <div  onclick="getSpcialCategoryData('${data.categories[i].strCategory}')"  class="Categories-data position-relative">
          <img src="${data.categories[i].strCategoryThumb}" alt="image not found" class="w-100">
          <div class="text position-absolute text-center p-3">
              <h3>${data.categories[i].strCategory}</h3>
              <p>${data.categories[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
          </div>
      </div>

  </div>
      `
    } 
    document.getElementById('categoriesDisplayData').innerHTML = container ;
}
//////////////////////////////////////////////////////////////////////
// ⁡⁢⁣⁣<===========================​‌‍‌‍​‌‍‌𝘋𝘪𝘴𝘱𝘭𝘺 𝘊𝘢𝘵𝘦𝘨𝘰𝘳𝘪𝘦𝘴 𝘋𝘢𝘵𝘢​===========================>⁡



// <=========================== Disply spcial Category data ===========================>
//? <<<<<<<<<<<<<<<<<<<​‌‍‌ category li link ​>>>>>>>>>>>>>>>>>>>
function clickCategory(){
  $('#categories #categoriesDisplayData .Categories-data').on('click' , async function(){
     $('#spcialCategory').removeClass('d-none');
       $('#categories').addClass('d-none');    
  }) 
 }
//? <<<<<<<<<<<<<<<<<<<​‌‍‌ ​‌‍‌category li link​ ​>>>>>>>>>>>>>>>>>>>

//⁡⁣⁣⁡⁣⁣⁢<=====================​‌‍​‌‍‌‍𝘨𝘦𝘵 𝘴𝘱𝘤𝘪𝘢𝘭 𝘊𝘢𝘵𝘦𝘨𝘰𝘳𝘪𝘦𝘴 𝘋𝘢𝘵𝘢 𝘧𝘳𝘰𝘮 𝘢𝘱𝘪​​======================>
/////////////////////////////////////////////////////////////////////⁡
async function getSpcialCategoryData(category){
  $('#spcialCategory').ready(function(){
    $('.loading').fadeIn(300);  
    $('body').css('overflow' , 'hidden'); 
  }) 

  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  data = await response.json();

  $('#spcialCategory').ready(function(){
    $('.loading').fadeOut(300);  
    $('body').css('overflow' , 'visible'); 
  }) 
  displaySpcialCategoryData();
}
/////////////////////////////////////////////////////////////////////
//⁡⁣⁣⁢<=====================​‌‍​‌‍‌‍𝘨𝘦𝘵 𝘴𝘱𝘤𝘪𝘢𝘭 𝘊𝘢𝘵𝘦𝘨𝘰𝘳𝘪𝘦𝘴 𝘋𝘢𝘵𝘢 𝘧𝘳𝘰𝘮 𝘢𝘱𝘪​​======================>⁡

// ⁡⁢⁣⁣<===========================​‌‍‌‍​‌‍‌𝘋𝘪𝘴𝘱𝘭𝘺 𝘴𝘱𝘤𝘪𝘢𝘭 𝘊𝘢𝘵𝘦𝘨𝘰𝘳𝘪𝘦𝘴 𝘋𝘢𝘵𝘢​===========================>
////////////////////////////////////////////////////////////////////////⁡
async function displaySpcialCategoryData(){ 
  let container = " ";
  for(let i=0 ; i<data.meals.length ; i++){
    container+=
    `
  <div class="col-md-3  " >
    <div class="spcial-category-data position-relative">
       <img src="${data.meals[i].strMealThumb}" alt="image not found" class="w-100">
        <div class="special-text position-absolute">
             <h3>${data.meals[i].strMeal}</h3>
        </div> 
     </div>
     
  </div>
    `
  }
    document.getElementById('displaySpcialCategory').innerHTML = container ;
 }
 /////////////////////////////////////////////////////////////////////
// ⁡⁢⁣⁣<=========================== ​‌‍‌𝘋𝘪𝘴𝘱𝘭𝘺 𝘴𝘱𝘤𝘪𝘢𝘭 𝘊𝘢𝘵𝘦𝘨𝘰𝘳𝘺 𝘥𝘢𝘵𝘢​ ===========================>⁡

//⁡⁣⁣⁢<=====================​‌‍​‌‍‌‍𝘨𝘦𝘵 𝘢𝘳𝘦𝘢 𝘥𝘢𝘵𝘢​​======================>
////////////////////////////////////////////////⁡
async function getAreaData(){
  $('#area').ready(function(){
    $('.loading').fadeIn(300);  
    $('body').css('overflow' , 'hidden'); 
  }) 

  let response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  data = await response.json();

  $('#area').ready(function(){
    $('.loading').fadeOut(300);  
    $('body').css('overflow' , 'visible'); 
  }) 
}
////////////////////////////////////////////////
//⁡⁣⁣⁡⁣⁣⁡⁣⁣⁢<=====================​‌‍​‌‍‌‍𝘨𝘦𝘵 ​‌‍‌𝘢𝘳𝘦𝘢 𝘥𝘢𝘵𝘢​​​======================>

//⁡⁢⁣⁣<===========================​‌‍‌‍​‌‍‌𝘋𝘪𝘴𝘱𝘭𝘺 𝘢𝘳𝘦𝘢 𝘋𝘢𝘵𝘢​===========================>
/////////////////////////////////////////////////////////⁡
async function dispalyAreaData(){
  let container=" " ;

  for(let i=0 ; i< data.meals.length ; i++){
    container+=
    `
        <div class="col-md-3">
          <div class="area-data text-center cursor">
              <i class="fa-solid fa-house-laptop fa-4x w-100"></i>
              <h3>${data.meals[i].strArea}</h3>
              <h3 class="d-none">${data.meals[i].strArea}</h3>
          </div>
        </div> 
    `
    
  }
  document.getElementById('displayArea').innerHTML = container;
 }
 ////////////////////////////////////////////////////////
//⁡⁢⁣⁣<===========================​‌‍‌⁡⁢⁣⁣𝘋𝘪𝘴𝘱𝘭𝘢𝘺 𝘈𝘳𝘦𝘢 𝘋𝘢𝘵𝘢⁡⁡⁢⁣⁣​===========================>⁡

//? <<<<<<<<<<<<<<<<<<<​‌‍‌ ​‌‍‌Area​ ​‌‍‌li link​​ ​>>>>>>>>>>>>>>>>>>>
 function clickArea(){
    $('#area #displayArea .area-data').on('click' ,async function(e){
        check = $(e.target).next().text();
        $('#area-info').removeClass('d-none');
        $('#area').addClass('d-none');
      await getAreaInfoData(check);
      await displayAreaInfoData(); 
    })
}
//? <<<<<<<<<<<<<<<<<<<​‌‍‌ Area li link​​ ​>>>>>>>>>>>>>>>>>>>

//⁡⁣⁣⁡⁣⁣⁡⁣⁣⁢⁡⁣⁣⁢<=====================​‌‍​‌‍‌‍𝘨𝘦𝘵 ​‌‍‌𝘢𝘳𝘦𝘢 𝘪𝘯𝘧𝘰 𝘥𝘢𝘵𝘢​​​======================>
///////////////////////////////////////////////////⁡
async function getAreaInfoData(city){
  $('#area-info').ready(function(){
    $('.loading').fadeIn(300);  
    $('body').css('overflow' , 'hidden'); 
  }) 
  
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${city}`);
  data = await response.json();

  $('#area-info').ready(function(){
    $('.loading').fadeOut(300);  
    $('body').css('overflow' , 'visible'); 
  }) 
}
//////////////////////////////////////////////////
//⁡⁣⁣⁢<=====================​‌‍​‌‍‌‍𝘨𝘦𝘵 ​‌‍‌𝘢𝘳𝘦𝘢 𝘪𝘯𝘧𝘰 𝘥𝘢𝘵𝘢​​​======================>⁡

//⁡⁢⁣⁣<===========================​‌‍‌𝘋𝘪𝘴𝘱𝘭𝘢𝘺 𝘈𝘳𝘦𝘢 𝘪𝘯𝘧𝘰 𝘋𝘢𝘵𝘢​===========================>
//////////////////////////////////////////////////////////////⁡
async function displayAreaInfoData(){
  let container=" " ;

  for(let i=0 ; i< data.meals.length ; i++){
    container+=
    `
     <div class="col-md-3 cursor" >
        <div class="img-data imgg position-relative">
            <img src="${data.meals[i].strMealThumb}" class="w-100">
                <div class=" img-info position-absolute   w-100 h-100 ">
                    <p class="text-black" >${data.meals[i].strMeal}</p>
                </div>
        </div>
      </div>  
    `
  }
  document.getElementById('displayAreaInfo').innerHTML = container;
 }
 //////////////////////////////////////////////////////////////
//⁡⁢⁣⁡⁢⁣⁣<===========================​‌‍‌𝘋𝘪𝘴𝘱𝘭𝘢𝘺 𝘈𝘳𝘦𝘢 𝘪𝘯𝘧𝘰 𝘋𝘢𝘵𝘢​===========================>⁡


//⁡⁣⁣⁢<=====================​‌‍​‌‍‌‍𝘨𝘦𝘵 𝘐𝘯𝘨𝘳𝘦𝘥𝘪𝘦𝘯𝘵𝘴 𝘥𝘢𝘵𝘢​​​======================>
///////////////////////////////////////////////////⁡
async function getIngredientsData(){
  $('#ingredients').ready(function(){
    $('.loading').fadeIn(300);  
    $('body').css('overflow' , 'hidden'); 
  }) 
 
  let response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=20');
  data = await response.json();

  $('#ingredients').ready(function(){
    $('.loading').fadeOut(300);  
    $('body').css('overflow' , 'visible'); 
  })
}
//////////////////////////////////////////////////
//⁡⁣⁣⁢<=====================​‌‍​‌‍‌‍𝘨𝘦𝘵 𝘐𝘯𝘨𝘳𝘦𝘥𝘪𝘦𝘯𝘵𝘴 𝘥𝘢𝘵𝘢​​​======================>⁡

//⁡⁢⁣⁣<=====================​‌‍‌𝘥𝘪𝘴𝘱𝘭𝘢𝘺​ ​‌‍‌𝘐𝘯𝘨𝘳𝘦𝘥𝘪𝘦𝘯𝘵𝘴 𝘥𝘢𝘵𝘢​​​​======================>
///////////////////////////////////////////////////////⁡
async function dispalyIngredientsData(){
  data = data.meals.slice(0, 20)
  
  let container=" " ;

  for(let i=0 ; i< data.length ; i++){
    if(data[i].strDescription !== null){
      container+=
      `
    <div class="col-md-3">
      <div  onclick="getIngredientsInfoData('${data[i].strIngredient}')" class="ingredients-data text-center cursor">
          <i class="fa-solid fa-drumstick-bite fa-4x"></i>
          <h3>${data[i].strIngredient}</h3>
          <p>${data[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
      </div>
    </div>
      `
    }
    document.getElementById('displayIngredients').innerHTML = container;
  }
}
///////////////////////////////////////////////////////
//⁡⁢⁣⁣<=====================​‌‍‌𝘥𝘪𝘴𝘱𝘭𝘢𝘺​ ​‌‍‌𝘐𝘯𝘨𝘳𝘦𝘥𝘪𝘦𝘯𝘵𝘴 𝘥𝘢𝘵𝘢​​​​======================>⁡

//? <<<<<<<<<<<<<<<<<<<​‌‍‌ ​‌‍‌Ingredients ‍li link​ ​>>>>>>>>>>>>>>>>>>>
function clickIngredients(){
    $('#ingredients .ingredients-data ').on('click' , async function(e){
        $('#ingredients').addClass('d-none');
        $('#ingredients-info').removeClass('d-none');
    } )
}
//? <<<<<<<<<<<<<<<<<<<​‌‍‌ ​‌‍‌‍Ingredients ‍li link ​​>>>>>>>>>>>>>>>>>>>

//⁡⁣⁣⁢<=====================​‌‍​‌‍‌‍𝘨𝘦𝘵 𝘐𝘯𝘨𝘳𝘦𝘥𝘪𝘦𝘯𝘵𝘴 𝘪𝘯𝘧𝘰 𝘥𝘢𝘵𝘢​​​======================>
/////////////////////////////////////////////////////////////⁡
async function getIngredientsInfoData(meals){
  $('#ingredients-info').ready(function(){
    $('.loading').fadeIn(300);  
    $('body').css('overflow' , 'hidden'); 
  }) 

  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${meals}`);
  data = await response.json(); 
  
  $('#ingredients-info').ready(function(){
    $('.loading').fadeOut(300); 
    $('body').css('overflow' , 'visible'); 
  }) 

  displayIngredientsInfoData();
}
/////////////////////////////////////////////////////////////
//⁡⁣⁣⁡⁣⁣⁢<=====================​‌‍​‌‍‌‍𝘨𝘦𝘵 𝘐𝘯𝘨𝘳𝘦𝘥𝘪𝘦𝘯𝘵𝘴 𝘪𝘯𝘧𝘰 𝘥𝘢𝘵𝘢​​​======================>⁡

//⁡⁢⁣⁣<=====================​‌‍‌𝘥𝘪𝘴𝘱𝘭𝘢𝘺​ ​‌‍‌𝘐𝘯𝘨𝘳𝘦𝘥𝘪𝘦𝘯𝘵𝘴 𝘪𝘯𝘧𝘰 𝘥𝘢𝘵𝘢​​​​======================>
///////////////////////////////////////////////////////////⁡
async function displayIngredientsInfoData(){
  let container=" " ;

  for(let i=0 ; i< data.meals.length ; i++){
    container+=
    `
    <div class="col-md-3 cursor" >
        <div class="img-data position-relative">
            <img src="${data.meals[i].strMealThumb}" class="w-100">
             <div class=" img-info position-absolute   w-100 h-100 ">
                 <p class="text-black" >${data.meals[i].strMeal}</p>
              </div>
        </div>
    </div> 
    `
  }
  document.getElementById('displayIngredientsInfo').innerHTML = container;
 }
 /////////////////////////////////////////////////////////
//⁡⁢⁣⁡⁢⁣⁣<=====================​‌‍‌𝘥𝘪𝘴𝘱𝘭𝘢𝘺​ ​‌‍‌𝘐𝘯𝘨𝘳𝘦𝘥𝘪𝘦𝘯𝘵𝘴 𝘪𝘯𝘧𝘰 𝘥𝘢𝘵𝘢​​​​======================>⁡


//? <<<<<<<<<<<<<<<<<<<​‌‍‌ ​‌‍‌search By Name ​‌‍‌to​ ​‌‍‌get data​​ ​​>>>>>>>>>>>>>>>>>>>
let searchByName = document.getElementById('searchByName');
searchByName.addEventListener('keyup' , function(){
  getSearchByName(searchByName.value);
})
//? <<<<<<<<<<<<<<<<<<<​‌‍‌ ​‌‍‌‍search By Name ​‌‍‌to​‌‍‌ get data ​​​>>>>>>>>>>>>>>>>>>>

//⁡⁣⁣⁡⁣⁣⁡⁣⁣⁢<=====================​‌‍‌‍‍‍𝘨𝘦𝘵 𝘚𝘦𝘢𝘳𝘤𝘩 𝘉𝘺 𝘕𝘢𝘮𝘦​======================>
/////////////////////////////////////////////////⁡//
async function getSearchByName(mealName){

  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
  data = await response.json(); 
  displaySearchByName();
}
///////////////////////////////////////////////////
//⁡⁣⁣⁢<=====================​‌‍‌‍‍‍𝘨𝘦𝘵 𝘚𝘦𝘢𝘳𝘤𝘩 𝘉𝘺 𝘕𝘢𝘮𝘦​======================>⁡

//⁡⁣⁣⁡⁣⁣⁡⁣⁣⁡⁢⁣⁣<=====================​‌‍‌𝘥𝘪𝘴𝘱𝘭𝘢𝘺 𝘚𝘦𝘢𝘳𝘤𝘩 𝘉𝘺 𝘕𝘢𝘮𝘦​​======================>
//////////////////////////////////////////////////////////⁡⁡
async function displaySearchByName(){
  let container=" " ;
  let term = searchByName.value ;

  for(let i=0 ; i< data.meals.length ; i++){
    if(data.meals[i].strMeal.toLowerCase().includes((term.toLowerCase()))){
      container+=
      `
        <div class="col-md-3 cursor" >
          <div class="img-data position-relative">
            <img src="${data.meals[i].strMealThumb}" class="w-100">
              <div class=" img-info position-absolute   w-100 h-100 ">
                  <p class="text-black" >${data.meals[i].strMeal}</p>
              </div>
          </div>
        </div>
      `
    }
  }
  document.getElementById('displaySearchInfo').innerHTML = container; 
 }
 ////////////////////////////////////////////////////////
//⁡⁣⁣⁡⁣⁣⁡⁣⁣⁡⁢⁣⁡⁢⁣⁣<=====================​‌‍‌𝘥𝘪𝘴𝘱𝘭𝘢𝘺 𝘚𝘦𝘢𝘳𝘤𝘩 𝘉𝘺 𝘕𝘢𝘮𝘦​​======================>⁡

//? <<<<<<<<<<<<<<<<<<<​‌‍‌ ​‌‍‌​‌‍‌‍search By Letter ‍to‍ get data​ ​​​>>>>>>>>>>>>>>>>>>>
let searchByLetter = document.getElementById('searchByLetter');
searchByLetter.addEventListener('keyup' , function(){
  getSearchByLetter(searchByLetter.value);
})
//? <<<<<<<<<<<<<<<<<<<​‌‍‌ ​‌‍‌‍‍‍search By Letter ‍to‍ get data​​ ​​​>>>>>>>>>>>>>>>>>>>

//⁡⁣⁣⁢<=====================​‌‍‌‍‍‍​‌‍‌𝘨𝘦𝘵 𝘚𝘦𝘢𝘳𝘤𝘩 𝘉𝘺 𝘓𝘦𝘵𝘵𝘦𝘳​======================>
/////////////////////////////////////////////////////////⁡
async function getSearchByLetter(mealName){

  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
  data = await response.json(); 
  displaySearchByLetter();

}
////////////////////////////////////////////////////////
//⁡⁣⁣⁢<=====================​‌‍‌‍‍‍​‌‍‌𝘨𝘦𝘵 𝘚𝘦𝘢𝘳𝘤𝘩 𝘉𝘺 𝘓𝘦𝘵𝘵𝘦𝘳​======================>

//⁡⁢⁣⁣<=====================​‌‍‌𝘥𝘪𝘴𝘭𝘱𝘢𝘭𝘺 𝘚𝘦𝘢𝘳𝘤𝘩 𝘉𝘺 𝘓𝘦𝘵𝘵𝘦𝘳​======================>
//////////////////////////////////////////////////////////⁡
async function displaySearchByLetter(){
  let container=" " ;
  let term = searchByLetter.value ;

  for(let i=0 ; i< data.meals.length ; i++){
    if(data.meals[i].strMeal.toLowerCase().includes((term.toLowerCase()))){
      container+=
      `
        <div class="col-md-3 cursor" >
          <div class="img-data position-relative">
            <img src="${data.meals[i].strMealThumb}" class="w-100">
              <div class=" img-info position-absolute   w-100 h-100 ">
                  <p class="text-black" >${data.meals[i].strMeal}</p>
              </div>
          </div>
        </div>
      `
    }
  }
  document.getElementById('displaySearchInfo').innerHTML = container;
 }
 ////////////////////////////////////////////////////////
//⁡⁢⁣⁣<=====================​‌‍‌𝘥𝘪𝘴𝘭𝘱𝘢𝘭𝘺 𝘚𝘦𝘢𝘳𝘤𝘩 𝘉𝘺 𝘓𝘦𝘵𝘵𝘦𝘳​======================>⁡

//? <=========================== fire ===========================>
(async function(){
  await getData();
   displayMails();
})()
//? <=========================== fire ===========================>



//! <=========================== validation ===========================>

let nameInput = document.getElementById('nameInput');
let emailInput = document.getElementById('emailInput');
let phoneInput = document.getElementById('phoneInput');
let ageInput = document.getElementById('ageInput');
let passwordInput = document.getElementById('passwordInput');
let repasswordInput = document.getElementById('repasswordInput');

let massageName = document.getElementById('massageName')
let  massageEmail = document.getElementById('massageEmail');
let massagePhone = document.getElementById('massagePhone');
let massageAge = document.getElementById('massageAge');
let massagePassword = document.getElementById('massagePassword');
let massageRpassword = document.getElementById('massageRpassword');


function validationName(){
  let name = nameInput.value;
  let regexName =/^[a-zA-Z]+$/;

  if( regexName.test(name) ){
    massageName.classList.add('d-none');
    return true;
  }
else{
  massageName.classList.remove('d-none');
  return false;
  }
}
nameInput.addEventListener('keyup' , function(){
  validationName();
})

function validationEmail(){
  let email = emailInput.value;
  let regexEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if(regexEmail.test(email)){
    massageEmail.classList.add('d-none')
    return true;
  }
  else{
    massageEmail.classList.remove('d-none');
    return false;
  }
}
emailInput.addEventListener('keyup' , function(){
  validationEmail();
})

function validationPhone(){
  let phone = phoneInput.value;
  let regexPhone=/^(\+?[0-9]{1,3})?[0-9]{10}$/;

  if(regexPhone.test(phone)){
    massagePhone.classList.add('d-none')
    return true;
  }
  else{
    massagePhone.classList.remove('d-none');
    return false;
  }
}
phoneInput.addEventListener('keyup' , function(){
  validationPhone();
})

function validationAge(){
  let age = ageInput.value;
  let regexAge=/^[0-9]{1,3}$/;

  if(regexAge.test(age)){
    massageAge.classList.add('d-none')
    return true;
  }
  else{
    massageAge.classList.remove('d-none');
    return false;
  }
}
ageInput.addEventListener('keyup' , function(){
  validationAge();
})

function validationPassword(){
  let password = passwordInput.value;
  let regexPassword=/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/ ;

  if(regexPassword.test(password)){
    massagePassword.classList.add('d-none')
    return true;
  }
  else{
    massagePassword.classList.remove('d-none');
    return false;
  }
}
passwordInput.addEventListener('keyup' , function(){
  validationPassword();
})

function validationRPassword(){
     if(passwordInput.value ==repasswordInput.value ){
    massageRpassword.classList.add('d-none');
    return true;
  }
  else{
    massageRpassword.classList.remove('d-none');
    return false;
  }
}

repasswordInput.addEventListener('keyup' , function(){
  validationRPassword();
})

document.getElementById('button').addEventListener('mouseover',function(){
  if(validationName() 
  && validationEmail() 
  && validationPhone()
  && validationAge() 
  && validationPassword() 
  && validationRPassword()){

    document.getElementById('button').removeAttribute('disabled');
 }
 else{
  document.getElementById('button').setAttribute('disabled',true);
  massageName.classList.add('d-none');
 }

})
// document.getElementById('button').addEventListener('click',function(){
//   document.getElementById('button').style.cssText= `border: 1px solid #742129; `
// })  
//! <=========================== validation ===========================>

