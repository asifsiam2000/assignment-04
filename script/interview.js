const allInterviewButton = document.querySelectorAll('.interview-btn');
// console.log(allInterviewButton);

allInterviewButton.forEach((button) => {
    button.addEventListener('click', function () {

        // interview increses 
        const job = get_value('get-intervew');
        const job_number = Number(job) + 1;
        set_value_interview(job_number);
        
        // new button add 
        add_new_button(this, "INTERVIEW", "btn-success");
    });
});
