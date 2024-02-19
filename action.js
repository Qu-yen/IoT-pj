
var changeATquat = 
document.getElementById("quat");
var changeCLbutton_q_on=
document.getElementById("q-b-on-on");
var changeCLbutton_q_off=
document.getElementById("q-b-off-off");
function q_on(){
    changeATquat.classList.add("rotating");
    changeCLbutton_q_on.classList.add("q-b-on-on");
    changeCLbutton_q_off.classList.remove("q-b-off-off");
} 
function q_off(){
    changeATquat.classList.remove("rotating");
    changeCLbutton_q_on.classList.remove("q-b-on-on");
    changeCLbutton_q_off.classList.add("q-b-off-off");
} 
var changeCLbongden=document.getElementById("bongden");
// changeCLbongdenbutton_on.addEventListener("click",function(){

// });
var changeCLbutton_bd_on=
document.getElementById("bd-b-on-on");
var changeCLbutton_bd_off=
document.getElementById("bd-b-off-off");
function bd_on(){
    
    changeCLbongden.classList.add("bongden-on-on-on");
    changeCLbutton_bd_on.classList.add("q-b-on-on");
    changeCLbutton_bd_off.classList.remove("q-b-off-off");

} 
function bd_off(){
    changeCLbongden.classList.remove("bongden-on-on-on");
    changeCLbutton_bd_on.classList.remove("q-b-on-on");
    changeCLbutton_bd_off.classList.add("q-b-off-off");

} 
//line chart
const labels = ['topic 1', 'topic 2', 'topic 3', 'topic 4', 'topic 5', 'topic 6', 'topic 7', 'topic 8', 'topic 9', 'topic 10'];

const data ={
    labels: labels,
    datasets : [
        {
            label : 'Nhiệt độ (°C)',
            backgroundColor : 'red',
            borderColor : 'red',
            data : [20, 17, 22, 19, 10, 30, 15, 30, 29, 22],
            tension : 0.2,
        },
        {
            label : 'Độ ẩm (%)',
            backgroundColor : 'blue',
            borderColor : 'blue',
            data : [80, 27, 56, 34, 24, 53, 20, 40, 50, 80],
            tension : 0.2,
        },
        {
            label : 'Ánh sáng (lux)',
            backgroundColor : 'yellow',
            borderColor : 'yellow',
            data : [50, 127, 156, 134, 124, 153, 120, 180, 190, 220],
            tension : 0.2,
        },

    ]
}
const config = {
    type : 'line',
    data : data,
    

}
const canvas = document.getElementById("canvas");
const chart = new Chart(canvas,config);
// ////////// click ...........
var click_Dashboard_on =document.getElementById("dashboard_on");
var click_Datasensors_on =document.getElementById("datasensors_on");
var click_Actionhistory_on =document.getElementById("actionhistory_on");
var click_Profile_on =document.getElementById("profile_on");
        // ------------
var click_Dashboard_00 =document.getElementById("Dashboard_00");
var click_Datasensors_00 =document.getElementById("Datasensors_00");
var click_Actionhistory_00 =document.getElementById("Actionhistory_00");
var click_Profile_00 =document.getElementById("Profile_00");
        // ------------ 
click_Dashboard_00.classList.add("Dashboard_00_on");
click_Datasensors_00.classList.add("Datasensors_00");
click_Actionhistory_00.classList.add("Actionhistory_00");
click_Profile_00.classList.add("Profile_00");
    // -------
    click_Dashboard_on.classList.add("color_button_1"); 
    // --------------
click_Dashboard_on.classList.add("color_button_10"); 
click_Datasensors_on.classList.add("color_button_10");
click_Actionhistory_on.classList.add("color_button_10");
click_Profile_on.classList.add("color_button_10");
    // --------
//   /////  1
function dashboard_on(){  
    click_Dashboard_00.classList.add("Dashboard_00_on"); 
    click_Datasensors_00.classList.add("Datasensors_00");
    click_Actionhistory_00.classList.add("Actionhistory_00");
    click_Profile_00.classList.add("Profile_00");
    click_Dashboard_00.classList.remove("Dashboard_00");  
    click_Datasensors_00.classList.remove("Datasensors_00_on");
    click_Actionhistory_00.classList.remove("Actionhistory_00_on");
    click_Profile_00.classList.remove("Profile_00_on");
    // -----------
    click_Dashboard_on.classList.add("color_button_1"); 
    click_Datasensors_on.classList.remove("color_button_1");
    click_Actionhistory_on.classList.remove("color_button_1");
    click_Profile_on.classList.remove("color_button_1");

} 
//   /////  2
function datasensors_on(){
    click_Dashboard_00.classList.add("Dashboard_00");
    click_Datasensors_00.classList.add("Datasensors_00_on");
    click_Actionhistory_00.classList.add("Actionhistory_00");
    click_Profile_00.classList.add("Profile_00");
    click_Dashboard_00.classList.remove("Dashboard_00_on");
    click_Datasensors_00.classList.remove("Datasensors_00");
    click_Actionhistory_00.classList.remove("Actionhistory_00_on");
    click_Profile_00.classList.remove("Profile_00_on");
    // --------
    click_Dashboard_on.classList.remove("color_button_1"); 
    click_Datasensors_on.classList.add("color_button_1");
    click_Actionhistory_on.classList.remove("color_button_1");
    click_Profile_on.classList.remove("color_button_1");

} 
//   /////  3
function actionhistory_on(){
    click_Dashboard_00.classList.add("Dashboard_00");
    click_Datasensors_00.classList.add("Datasensors_00");
    click_Actionhistory_00.classList.add("Actionhistory_00_on");
    click_Profile_00.classList.add("Profile_00");
    click_Dashboard_00.classList.remove("Dashboard_00_on");
    click_Datasensors_00.classList.remove("Datasensors_00_on");
    click_Actionhistory_00.classList.remove("Actionhistory_00");
    click_Profile_00.classList.remove("Profile_00_on");
    // ---------
    click_Dashboard_on.classList.remove("color_button_1"); 
    click_Datasensors_on.classList.remove("color_button_1");
    click_Actionhistory_on.classList.add("color_button_1");
    click_Profile_on.classList.remove("color_button_1");

} 
//   ///// 4
function profile_on(){
    click_Dashboard_00.classList.add("Dashboard_00");
    click_Datasensors_00.classList.add("Datasensors_00");
    click_Actionhistory_00.classList.add("Actionhistory_00");
    click_Profile_00.classList.add("Profile_00_on");
    click_Dashboard_00.classList.remove("Dashboard_00_on");
    click_Datasensors_00.classList.remove("Datasensors_00_on");
    click_Actionhistory_00.classList.remove("Actionhistory_00_on");
    click_Profile_00.classList.remove("Profile_00");
    // --------
    click_Dashboard_on.classList.remove("color_button_1"); 
    click_Datasensors_on.classList.remove("color_button_1");
    click_Actionhistory_on.classList.remove("color_button_1");
    click_Profile_on.classList.add("color_button_1");

} 



