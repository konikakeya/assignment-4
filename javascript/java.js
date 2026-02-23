let interviewList = [];
let rejectedList = [];
let allJobs = 'all';

let total = document.getElementById('total');
let interviewCount = document.getElementById('interview');
let rejectedCount = document.getElementById('rejected');

let availableTotal = document.getElementById('availabletotal');

let allFilter = document.getElementById('all-filter');
let interviewFilter = document.getElementById('interview-filter');
let rejectedFilter = document.getElementById('rejected-filter');

let allCardSection = document.getElementById('allcards');
let filterSection = document.getElementById('filter-section');
let mainContainer = document.querySelector('main');

function allJobsCount() {
  total.innerText = allCardSection.children.length
  availableTotal.innerText= allCardSection.children.length
  interviewCount.innerText = interviewList.length
  rejectedCount.innerText= rejectedList.length
}

allJobsCount()



// top buttons

function toggleStyle(btns) {
  // for all 
  allFilter.classList.add('text-[#64748B]', 'bg-white' , 'hover:bg-slate-200')
  interviewFilter.classList.add('text-[#64748B]', 'bg-white','hover:bg-slate-200')
  rejectedFilter.classList.add('text-[#64748B]', 'bg-white','hover:bg-slate-200')

  // remove gray

  allFilter.classList.remove('bg-[#3B82F6]', 'text-white')
  interviewFilter.classList.remove('bg-[#3B82F6]', 'text-white')
  rejectedFilter.classList.remove('bg-[#3B82F6]', 'text-white')
  // console.log(btns);

  let select = document.getElementById(btns)
  select.classList.remove('text-[#64748B]', 'bg-white','hover:bg-slate-200')
  select.classList.add('bg-[#3B82F6]', 'text-white', 'hover:bg-[#3c70c5]')

  allJobs = btns
  // console.log(allJobs);

  
}