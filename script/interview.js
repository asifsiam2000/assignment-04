const allInterviewButton = document.querySelectorAll('.interview-btn');
// console.log(allInterviewButton);

allInterviewButton.forEach((button) => {
    button.addEventListener('click', function () {
        const job = get_value('get-intervew');
        const job_number = Number(job) + 1;
        set_value_interview(job_number);
    });
});