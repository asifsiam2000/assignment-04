window.addEventListener("DOMContentLoaded", () => {
  filterJobs("all");
});
function updateStatus(button, status) {
  const card = button.closest(".job-card");
  card.dataset.status = status;
}
function filterjob(status) {
  const cards = document.querySelectorAll(".job-card");
  const emptyState = document.getElementById("empty-state");

  let visibleCount = 0;

  
  for (let i = 0; i < cards.length; i++) {

    const card = cards[i];

    if (status === "all" || card.dataset.status === status) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
    }
    
  if (visibleCount === 0) {
    emptyState.style.display = "block";
  } else {
    emptyState.style.display = "none";
  }
}







// get value 
function get_value(id) {
    const input = document.getElementById(id);
    const value = input.innerText;
    return value;
}

// set value interview
function set_value_interview(value) {
    const job = document.getElementById('get-intervew');
    job.innerText = value;
}
// set value rejected 
function set_value_rejected(value) {
    const job = document.getElementById('get-rejected');
    job.innerText = value;
}


// when interview and rejected button click then new button created 

function add_new_button(clickedButton, statusText, statusClass) {

    const parentCard = clickedButton.closest('.job-card');

    const description = parentCard.querySelector('.job-description');

    // old status remove (if exists)
    const oldStatus = parentCard.querySelector('.status-btn');
    if (oldStatus) {
        oldStatus.remove();
    }

    // create new button
    const statusButton = document.createElement('button');
    statusButton.innerText = statusText;

    statusButton.classList.add(
        'status-btn',
        'btn',
        'mb-3',
        statusClass
    );

    // insert before paragraph
    parentCard.insertBefore(statusButton, description);
}




