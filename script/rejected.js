const allRejectdedButton = document.querySelectorAll('.rejected-btn');

allRejectdedButton.forEach((button) => {
    button.addEventListener('click', function () {

        // interview add 
        const job = get_value('get-rejected');
        const job_number = Number(job) + 1;
        set_value_rejected(job_number);

        // button add 
        add_new_button(this, "REJECTED", "btn-error");
    });
});