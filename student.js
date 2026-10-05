// ==========================================
// FILTER NOTICES
// ==========================================

function filterNotices(type, button) {

    const buttons =
        document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");


    const notices =
        document.querySelectorAll(".student-notice");


    notices.forEach(notice => {

        const noticeType =
            notice.getAttribute("data-type");


        if (type === "all") {

            notice.style.display = "grid";

        }

        else if (noticeType === type) {

            notice.style.display = "grid";

        }

        else {

            notice.style.display = "none";

        }

    });

}



// ==========================================
// ACKNOWLEDGE NOTICE
// ==========================================

function acknowledge(button) {

    button.innerText = "✓ Seen";

    button.classList.add("acknowledged");

    button.disabled = true;


    // Demo acknowledgement

    alert(
        "Notice acknowledged successfully.\n\n" +
        "In the real system this status will be stored " +
        "in the database."
    );

}



// ==========================================
// OPEN NOTICE
// ==========================================

function openNotice() {

    document
        .getElementById("noticeModal")
        .classList.add("show");

}



// ==========================================
// CLOSE NOTICE
// ==========================================

function closeNotice() {

    document
        .getElementById("noticeModal")
        .classList.remove("show");

}



// ==========================================
// TELEGRAM
// ==========================================

function connectTelegram() {

    alert(
        "Telegram linking flow:\n\n" +
        "1. Verify college account\n" +
        "2. Open official Notice Untangler bot\n" +
        "3. Link Telegram account\n" +
        "4. Receive optional alerts\n\n" +
        "This is a prototype."
    );

}