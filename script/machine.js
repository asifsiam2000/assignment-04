// window.addEventListener("DOMContentLoaded", () => {
//   filterjob("all");
// });
// function updateStatus(button, status) {
//   const card = button.closest(".job-card");
//   card.dataset.status = status;
// }
// function filterjob(status) {
//   const cards = document.querySelectorAll(".job-card");
//   const emptyState = document.getElementById("empty-state");

//   let visibleCount = 0;

  
//   for (let i = 0; i < cards.length; i++) {

//     const card = cards[i];

//     if (status === "all" || card.dataset.status === status) {
//       card.style.display = "block";
//       visibleCount++;
//     }
//     else {
//       card.style.display = "none";
//     }
//     }
//     // console.log("visibol card", visibleCount);
//   if (visibleCount === 0) {
//     emptyState.style.display = "block";
//   }
//   else {
//     emptyState.style.display = "none";
//   }
// }





// variable diclearation 
let currentInterview = 0;
let currentRejected = 0;

function updateStatus(button, status) {
    const card = button.closest(".job-card");
    const interviewDisplay = document.getElementById('interview-cnt');
    const rejectedDisplay = document.getElementById('rejected-cnt');

    
    const previousStatus = card.dataset.status;

    
    if (previousStatus === status) {
        return;
    }

    
    if (previousStatus === 'interview') {
        currentInterview--;
    } else if (previousStatus === 'rejected') {
        currentRejected--;
    }

   
    if (status === 'interview') {
        currentInterview++;
        add_new_button(button, "INTERVIEW", "btn-success");
    } else if (status === 'rejected') {
        currentRejected++;
        add_new_button(button, "REJECTED", "btn-error");
    }

    
    card.dataset.status = status;

    
    interviewDisplay.innerText = Math.max(0, currentInterview);
    rejectedDisplay.innerText = Math.max(0, currentRejected);
}

// new button add kora
function add_new_button(clickedButton, statusText, statusClass) {
    const parentCard = clickedButton.closest('.job-card');
    const description = parentCard.querySelector('.job-description');

    const oldStatus = parentCard.querySelector('.status-btn');
    if (oldStatus) {
        oldStatus.remove();
    }

    const statusButton = document.createElement('button');
    statusButton.innerText = statusText;
    statusButton.classList.add('status-btn', 'btn', 'mb-3', statusClass, 'btn-sm'); // btn-sm দিয়েছি দেখতে সুন্দর লাগবে

    parentCard.insertBefore(statusButton, description);
}

// filter 
function filterjob(status) {
    const cards = document.querySelectorAll(".job-card");
    const emptyState = document.getElementById("empty-state");
    let visibleCount = 0;

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (status === "all" || card.dataset.status === status) {
            card.style.display = "block";
            visibleCount++;
        }
        else {
            card.style.display = "none";
        }
    }

    if (emptyState) {
        emptyState.style.display = (visibleCount === 0) ? "block" : "none";
    }
}

window.addEventListener("DOMContentLoaded", () => {
    filterjob("all");
});




