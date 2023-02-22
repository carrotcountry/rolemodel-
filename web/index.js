const title = document.querySelector("#hellohello");
const Thankyou = document.querySelector("#bye");
const Stevejobs = document.querySelector("#Steve");
const Steve = document.querySelector("#StevejobsPic");
const Nietzsche = document.querySelector("#Nietzsche");
const FriedrichNietzsche = document.querySelector("#FriedrichNietzschePic");
const Che_guevara = document.querySelector("#Che_guevara");
const Che_guevaraPic = document.querySelector("#Che_guevaraPic");
const Winston_Churchill = document.querySelector("#Winston_Churchill");
const Winston_ChurchillPic = document.querySelector("#Winston_ChurchillPic");
const Inamori_Kazuo = document.querySelector("#Inamori_Kazuo");
const Inamori_KazuoPic = document.querySelector("#Inamori_KazuoPic");
const firstText = document.querySelector("#hellohello");

const again = document.querySelector("#again");
const rink = document.querySelector("#rink");
const rink2 = document.querySelector("#rink2");
const or = document.querySelector("#or");



const Hidden_ClassName = document.querySelector(".hidden");
const Stevejobspic2 = document.querySelector("#StevejStevejobsPic2obsPic")

// Find_Role_Model == FRM
// Find_Role_Model_Trash == FRMT
// Find_Role_Model_Trash2 == FRMT2
// KnowingaboutsteveJobs == KASJ
// Knowing_about_steveJobs_Trash == KASJT
// Knowing_about_steveJobs_Trash == KASJT2
// KnowingaboutFriedrichNietzsche == KAFN
// KnowingaboutFriedrichNietzscheTrash == KAFNT
// KnowingaboutFriedrichNietzscheTrash2 == KAFNT2
// KnowingaboutCheGuevara == KACG
// KnowingaboutCheGuevaraTrash == KACGT
// KnowingaboutCheGuevaraTrash2 == KACGT2
// KnowingaboutWinstonChurchill == KAWC
// KnowingaboutWinstonChurchillTrash == KAWCT
// KnowingaboutWinstonChurchillTrash2 == KAWCT2
// KnowingaboutInamoriKazuo == KAIK
// KnowingaboutInamoriKazuoTrash == KAIKT
// KnowingaboutInamoriKazuoTrash2 == KAIKT2
// FindMore == FM
// FindMore2 == FM2

// Friedrich Nietzsche
// Steve Jobs
// Winston Churchill
// Che Guevara
// Inamori Kazuo 

if (title.innerText == "Find your role Model Here (Click here)."){
    function FRM() {
    cursor()
    title.innerText = "Find your role Model Here (Click here).";
    title.addEventListener("click",FRMT);
    };
    FRM()
};

function ag(){
    cursor()
    // again
}
function cursor() {
    firstText.style.cursor = "pointer";
}

function FRMT() {
    // cursor()
    title.innerText = "Find your role Model.";
    title.addEventListener("mouseenter",KASJ);
    title.addEventListener("mouseleave",FRMT);
};

function KASJ() {
    // cursor()
    title.innerText = "Knowing about Steve Jobs";
    title.addEventListener("click", KASJT);
};

function KASJT() {
    // cursor()
    Steve.classList.remove("hidden");
    // Steve Jobs hidden css 제거
    Stevejobs.classList.remove("hidden")
    title.innerText = "Steve Jobs";
    title.addEventListener("mouseenter", KAFN);
    title.addEventListener("mouseleave",KASJT2);
};

function KASJT2() {
    // cursor() 
    title.innerText = "Steve Jobs";
    title.addEventListener("mouseenter", KAFN);
};
function KAFN() {
    // cursor()
    title.innerText = "Knowing about Friedrich Nietzsche";
    title.addEventListener("mouseleave",KASJT2);
    title.addEventListener("click", KAFNT);
    title.removeEventListener("click", KASJT);
};

function KAFNT() {
    // cursor()
    Steve.classList.add("hidden");
    Stevejobs.classList.add("hidden");
    // Steve Jobs hidden css 삽입
    Nietzsche.classList.remove("hidden");
    FriedrichNietzsche.classList.remove("hidden");
    // Nietzsche hidden css 제거
    title.innerText = "Friedrich Nietzsche";
    title.addEventListener("mouseleave", KAFNT2);

};
function KAFNT2() {
    // cursor()
    title.innerText = "Friedrich Nietzsche";
    title.addEventListener("click", KACGT);
    title.addEventListener("mouseenter", KACG);
};

function KACG() {
    // cursor()
    title.innerText = " Knowing about Che Guevara";
    title.addEventListener("mouseenter", KACG);
    title.removeEventListener("click", KAFNT);
};
function KACGT() {
    // cursor()
    Nietzsche.classList.add("hidden");
    FriedrichNietzsche.classList.add("hidden");
    // Steve Jobs hidden css 삽입
    Che_guevara.classList.remove("hidden");
    Che_guevaraPic.classList.remove("hidden");
    // Nietzsche hidden css 제거
    title.innerText = "Che Guevara";
    title.addEventListener("mouseleave", KACGT2);
};
function KACGT2() {
    // cursor()
    title.innerText = "Che Guevara";
    title.addEventListener("mouseenter", KAWC);
};

function KAWC() {
    // cursor()
    title.innerText = "Knowing about Winston Churchil"
    title.removeEventListener("click", KACGT);
    title.addEventListener("click", KAWCT);
    title.addEventListener("mouseleave",KACGT2);
};

function KAWCT() {
    // cursor()
    Che_guevara.classList.add("hidden");
    Che_guevaraPic.classList.add("hidden");
    // Steve Jobs hidden css 삽입
    Winston_Churchill.classList.remove("hidden");
    Winston_ChurchillPic.classList.remove("hidden");
    // Nietzsche hidden css 제거
    title.innerText = "Winston Churchill";
    title.addEventListener("mouseleave", KAWCT2);
};

function KAWCT2() {
    // cursor()
    title.innerText = "Winston Churchill";
    title.addEventListener("mouseenter", KAIK);
    // title.removeEventListener("click", KnowingaboutWinstonChurchillTrash);
};

function KAIK (){
    // cursor()
    title.innerText = "Knowing about Inamori Kazuo";
    title.addEventListener("click", KAIKT);
    title.removeEventListener("click", KAWCT);
};

function KAIKT (){
    // cursor()
    Winston_Churchill.classList.add("hidden");
    Winston_ChurchillPic.classList.add("hidden");
    // Steve Jobs hidden css 삽입
    Inamori_Kazuo.classList.remove("hidden");
    Inamori_KazuoPic.classList.remove("hidden");
    // Nietzsche hidden css 제거
    title.innerText = "Inamori Kazuo";
    title.addEventListener("mouseenter", FM);
    title.addEventListener("mouseleave", KAIKT2);
};

function KAIKT2 (){
    title.innerText = "Inamori Kazuo";
    title.addEventListener("click", KAIKT);
    title.addEventListener("mouseenter", FM);
};

function FM() {
    title.innerText = "Find more";
    title.addEventListener("click", FM2);
    title.removeEventListener("click", KAIKT);
    title.removeEventListener("click", KAIKT2);
    title.removeEventListener("click", FM);
};

function FMT() {
    title.innerText = "Our web";
    title.addEventListener("click", FM2);
}

function FM2() {
    cursor()
    title.innerText = "Our web";
    title.addEventListener("mouseenter", FMT);
    // title.addEventListener("mouseleave", FM2);
    Inamori_Kazuo.classList.add("hidden");  
    Inamori_KazuoPic.classList.add("hidden");
    title.addEventListener("mouseleave", FMT);
    // title.addEventListener("click", FMT);
    // Inamori_Kazuo hidden css 삽입
    Thankyou.classList.remove("hidden");
    again.classList.remove("hidden");
    rink.classList.remove("hidden");
    rink2.classList.remove("hidden");
    or.classList.remove("hidden");
}

