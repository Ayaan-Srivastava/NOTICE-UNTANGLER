// ==========================================
// AI EXTRACTION
// ==========================================

function extractNotice() {

    const text = document.getElementById("noticeText").value;

    if (text.trim() === "") {

        alert("Please paste a notice first.");

        return;
    }

    const section =
        document.getElementById("extractionSection");

    section.style.display = "block";

    section.scrollIntoView({
        behavior: "smooth"
    });

    // Demo AI extraction

    document.getElementById("title").value =
        "Examination Form Submission";

    document.getElementById("deadline").value =
        "18 October 2026";

    document.getElementById("action").value =
        "Submit examination form";

    document.getElementById("confidence").innerText =
        "94%";
}


// ==========================================
// EDIT
// ==========================================

function editNotice() {

    alert(
        "All extracted fields are editable. " +
        "Admin can correct AI results before publishing."
    );
}


// ==========================================
// TARGETING
// ==========================================

function goToTargeting() {

    document.getElementById("targetSection").style.display =
        "block";

    document.getElementById("targetSection")
        .scrollIntoView({
            behavior: "smooth"
        });

    updateCount();
}


// ==========================================
// STUDENT COUNT
// ==========================================

function updateCount() {

    const dept =
        document.getElementById("targetDept").value;

    const year =
        document.getElementById("targetYear").value;

    const semester =
        document.getElementById("targetSemester").value;

    const section =
        document.getElementById("targetSection").value;


    let count = 184;


    if (section === "All Sections") {
        count = 184;
    }

    else if (section === "B") {
        count = 176;
    }

    else if (section === "C") {
        count = 169;
    }

    else {
        count = 184;
    }


    if (dept === "BBA") {
        count = 142;
    }

    if (dept === "B.Tech") {
        count = 316;
    }

    if (dept === "MCA") {
        count = 98;
    }


    document.getElementById("studentCount")
        .innerText = count;


    document.getElementById("audiencePreview")
        .innerText =
        dept +
        " → " +
        year +
        " → " +
        semester +
        " → " +
        section;
}


// ==========================================
// APPROVAL
// ==========================================

function showApproval() {

    const title =
        document.getElementById("title").value;

    const deadline =
        document.getElementById("deadline").value;

    const action =
        document.getElementById("action").value;


    document.getElementById("previewTitle")
        .innerText = title;

    document.getElementById("previewDeadline")
        .innerText = deadline;

    document.getElementById("previewAction")
        .innerText = action;


    document.getElementById("previewAudience")
        .innerText =
        document.getElementById("audiencePreview")
        .innerText;


    document.getElementById("approvalSection")
        .style.display = "block";


    document.getElementById("approvalSection")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ==========================================
// PUBLISH
// ==========================================

function publishNotice() {

    document.getElementById("publishedSection")
        .style.display = "block";


    document.getElementById("publishedSection")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ==========================================
// DEADLINE CHANGE DETECTION
// ==========================================

function detectChange() {

    const result =
        document.getElementById("changeResult");


    result.innerHTML = `

        <div class="change-alert">

            <strong>
                🚨 DEADLINE UPDATED
            </strong>

            <div class="change-dates">

                <span>
                    Previous:
                    <b>18 October 2026</b>
                </span>

                <span>
                    New:
                    <b>22 October 2026</b>
                </span>

            </div>

            <p>
                184 affected students would be notified
                about this deadline change.
            </p>

        </div>

    `;

}