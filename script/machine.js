function showOnly(id) {
    const card = document.getElementById('card');
    const not_availabel_job = document.getElementById('not_available-job');

    card.classList.add('hidden');
    not_availabel_job.classList.add('hidden');


    document.getElementById(id).classList.remove('hidden');
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