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
  console.log(btns);
  let select = document.getElementById(btns)

  allJobs = btns
  console.log(allJobs);

  select.classList.remove('text-[#64748B]', 'bg-white','hover:bg-slate-200')
  select.classList.add('bg-[#3B82F6]', 'text-white', 'hover:bg-[#3c70c5]')


  if (btns == 'interview-filter') {
    allCardSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
    renderInterview()

  }
  else if (btns == 'all-filter') {
    allCardSection.classList.remove('hidden');
    filterSection.classList.add('hidden');


  }
  else if (btns == 'rejected-filter') {
    allCardSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
    renderRejected()
  }
}


mainContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('interview-btn')) {
    let parentsNode = event.target.parentNode.parentNode;
    let brand = parentsNode.querySelector('.brandname').innerText
    let post = parentsNode.querySelector('.postname').innerText
    let pay = parentsNode.querySelector('.pay').innerText
    let apply=parentsNode.querySelector('.applied').innerText
    let details = parentsNode.querySelector('.detail').innerText
    
    parentsNode.querySelector('.applied').innerText = '✓ Applied'
    
    let cardInfo = {
      brand,
      post,
      pay,
      apply: '✓ Applied',
      details
    }

    let parentsExist = interviewList.find(item => item.brand == cardInfo.brand)
    if (!parentsExist) {
      interviewList.push(cardInfo)
    }
     rejectedList=rejectedList.filter(item=>item.brand != cardInfo.brand)
    if (allJobs === 'interview-filter') {
  renderInterview();
}
else if (allJobs === 'rejected-filter') {
  renderRejected();
}
    allJobsCount();


  }
  else if (event.target.classList.contains('rejected-btn')) {
    let parentsNode = event.target.parentNode.parentNode;
    let brand = parentsNode.querySelector('.brandname').innerText
    let post = parentsNode.querySelector('.postname').innerText
    let pay = parentsNode.querySelector('.pay').innerText
    let apply=parentsNode.querySelector('.applied').innerText
    let details = parentsNode.querySelector('.detail').innerText
    
    parentsNode.querySelector('.applied').innerText = 'Rejected'
    
    let cardInfo = {
      brand,
      post,
      pay,
      apply: 'Rejected',
      details
    }

    let parentsExist = rejectedList.find(item => item.brand == cardInfo.brand)
    if (!parentsExist) {
      rejectedList.push(cardInfo)
    }
    interviewList = interviewList.filter(item => item.brand != cardInfo.brand)
    console.log(interviewList);
    if (allJobs === 'interview-filter') {
      renderInterview()
    }else if (allJobs === 'rejected-filter') {
  renderRejected();
}
    allJobsCount();

  }


  else if (event.target.classList.contains('btn-delete')) {
    let parentNode = event.target.closest('.card');
    let brand = parentNode.querySelector('.brandname').innerText;
    interviewList = interviewList.filter(item => item.brand !== brand);
    rejectedList = rejectedList.filter(item => item.brand !== brand);

    parentNode.remove();
    allJobsCount();

   if (allJobs === 'rejected-filter') {
  renderRejected();
}
else if (allJobs === 'interview-filter') {
  renderInterview();
}
  }
})






function renderInterview() {
  filterSection.innerHTML = ''
  if (interviewList.length===0) {
    filterSection.innerHTML = `
    <div class="card  mx-auto text-center grid justify-center items-center p-22  bg-white">
        <figure class="grid justify-center">
            <img src="./jobs.png"/>
        </figure>
        <div class="card-body space-y-5">
            <h2 class="card-title font-bold text-4xl">No jobs available</h2>
            <p>Check back soon for new job opportunities</p>
        </div>
    </div>
    `
  }

  for (let interview of interviewList) {
    console.log(interview);

    let div = document.createElement('div');
    div.className = 'card bg-white border border-[#dedfe0] flex flex-row justify-between p-8'
    div.innerHTML = `
    <div class="space-y-6 ">
    <div class="">
      <h2 class="brandname text-[#002C5C] text-2xl font-semibold pb-2">${interview.brand}</h2>
      <p class="postname text-[#64748B]">${interview.post}</p>
     </div>

     <p class=" pay text-[#64748B] text-[16px] font-normal ">${interview.pay}</p>

     <div class=" flex gap-2">
      <button class="applied bg-[#EEF4FF] text-[#002C5C] rounded-md p-3 cursor-pointer">${interview.apply}</button>
     </div>
     <p class="detail text-[#323B49] text-[16px]">${interview.details}</p>


     <div class="flex gap-4 ">
      <button class="interview-btn py-3 px-5 bg-transparent text-[#10B981] border-1 rounded-md text-[16px] font-semibold hover:bg-[#62dbb3] hover:text-white cursor-pointer">Interview</button>
      <button class="rejected-btn py-3 px-5 bg-transparent text-[#EF4444] border-1 rounded-md text-[16px] font-semibold hover:bg-[#f94646] hover:text-white cursor-pointer">Rejected</button>
    </div>
    </div>

  <div class="">
     <button class="btn-delete border-2 border-[#F1F2F4] text-[#64748B] rounded-full p-2 hover:bg-[#728093] hover:text-white cursor-pointer">
       <i class="fa-regular fa-trash-can"></i>
     </button>
    </div>

  </div>

    `

    filterSection.appendChild(div)
  }
}

function renderRejected() {
  filterSection.innerHTML = ''
  if (rejectedList.length==0) {
    filterSection.innerHTML = `
    <div class="card  mx-auto text-center grid justify-center items-center p-22  bg-white">
        <figure class="grid justify-center">
            <img src="./jobs.png"/>
        </figure>
        <div class="card-body space-y-5">
            <h2 class="card-title font-bold text-4xl">No jobs available</h2>
            <p>Check back soon for new job opportunities</p>
        </div>
    </div>
    
    `
  }

  for (let reject of rejectedList) {
    console.log(reject);

    let div = document.createElement('div');
    div.className = 'card bg-white border border-[#dedfe0] flex flex-row justify-between p-8'
    div.innerHTML = `
    
    <div class="space-y-6 ">
    <div class="">
      <h2 class="brandname text-[#002C5C] text-2xl font-semibold pb-2">${reject.brand}</h2>
      <p class="postname text-[#64748B]">${reject.post}</p>
     </div>

     <p class=" pay text-[#64748B] text-[16px] font-normal ">${reject.pay}</p>

     <div class=" flex gap-2">
      <button class="applied bg-[#EEF4FF] text-[#002C5C] rounded-md p-3 cursor-pointer">${reject.apply}</button>
     </div>
     <p class="detail text-[#323B49] text-[16px]">${reject.details}</p>


     <div class="flex gap-4 ">
      <button class="interview-btn py-3 px-5 bg-transparent text-[#10B981] border-1 rounded-md text-[16px] font-semibold hover:bg-[#62dbb3] hover:text-white cursor-pointer">Interview</button>
      <button class="rejected-btn py-3 px-5 bg-transparent text-[#EF4444] border-1 rounded-md text-[16px] font-semibold hover:bg-[#f94646] hover:text-white cursor-pointer">Rejected</button>
    </div>
    </div>

  <div class="">
     <button class="btn-delete border-2 border-[#F1F2F4] text-[#64748B] rounded-full p-2 hover:bg-[#728093] hover:text-white cursor-pointer">
       <i class="fa-regular fa-trash-can"></i>
     </button>
    </div>

  </div>


    `

    filterSection.appendChild(div)

  }
}