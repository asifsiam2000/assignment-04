
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
    statusButton.classList.add('status-btn', 'btn', 'mb-3', statusClass, 'btn-sm'); 

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




// counting job for all,  interview , rejected button 
document.getElementById('all-butten').addEventListener('click', function () {
    const total_job = document.getElementById('total-job');
    const avail_job = document.getElementById('avail-job');
    avail_job.innerText = total_job.innerText;
})

document.getElementById('interview-butten').addEventListener('click', function () {
    const avail_job = document.getElementById('avail-job');
    const total_interview = document.getElementById('interview-cnt');
    if (total_interview.innerText === '0') {
        avail_job.innerText = '0';
        return;
    }
    else {
        avail_job.innerText = total_interview.innerText + " of 8 ";
    }
})

document.getElementById('rejected-butten').addEventListener('click', function () {
    const avail_job = document.getElementById('avail-job');
    const total_interview = document.getElementById('rejected-cnt');
    if (total_interview.innerText === '0') {
        avail_job.innerText = '0';
        return;
    }
    else avail_job.innerText = total_interview.innerText + " of 8 ";
})


// delet card  

  
const deleteButtons = document.querySelectorAll('.delet-card');

for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', function () {
        
        const targetCard = this.closest('.job-card'); 

        if (targetCard) {
            let totalJobElement = document.getElementById('total-job');
            let currentTotal = parseInt(totalJobElement.innerText);

            totalJobElement.innerText = Math.max(0, currentTotal - 1);

            targetCard.remove();
        }
    });
}