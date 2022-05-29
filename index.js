function formDeadlineDate() {
    var futureDate = new Date("02 March 2022");
    var runtimeDate = new Date();
    if ($('#shortListed').length || $('.field_9933:contains(In Case Of Grade Point, Please Enter Equivalent Percentage.)').length) {
        if (runtimeDate < futureDate) {
            console.log('good to go');
        } else {
            if (location.pathname.search("preview") === -1) {
                $(location).attr('href', 'https://applymba.nmims.edu/dashboard');
            }
        }
    }
    if ($('#field_26961').val() === "Transfer Case") {

    } else {
        if (location.pathname.search("preview") === -1) {
            dataLayer.forEach(function (getData) {
                if (getData.userID.split("_")[1] !== "13585977") {
                    $(location).attr('href', 'https://applymba.nmims.edu/dashboard');
                }
            });
        }
    }
}
$(document).ready(function () {
    if ($('.reSubmitLogicForm').length === 0) {
        dataLayer.forEach(function (getData) {
            if (getData.userID !== undefined) {

                if (getData.userID.split("_")[1] !== "13671326" && getData.userID.split("_")[1] !== "13691944") {
                    formDeadlineDate();
                }
            }
        });
    }
});

if ($('#exam_details_190').length) {
    function isUserExamDatePassed() {
        var firstAppemptDate = $('#exam_details_190').val() !== "" && $('#exam_details_190').val() !== undefined ? $('#exam_details_190').val() : "";
        var getDate = firstAppemptDate.split("/")[0]
        var getMonth = firstAppemptDate.split("/")[1];
        var getYear = firstAppemptDate.split("/")[2];

        firstAppemptDate = new Date(getMonth + '/' + getDate + '/' + getYear);

        var currentDate = new Date();
        if (location.pathname.search("preview") == -1) {
            if (firstAppemptDate < currentDate) {
                /* if ($('#exam_details_2').val() !== "GD200093122") { */
                $(location).attr('href', 'https://applymba.nmims.edu/nmat-mba/dashboard');
                /*  } */
            } else {
                console.log('good to go');
            }
        }
    }
}
$(document).ready(function () {
    /*isUserExamDatePassed();*/
});

if ($('#email').length > 0 && $('#email').val() != '') {
    $('#email').attr('readonly', 'readonly');
}
if ($('#date_of_birth').length > 0 && $('#date_of_birth').val() != '') {
    $('#date_of_birth').attr('readonly', 'readonly');
}

$("#countryDialCodeDiv").parent().parent().css("pointer-events", "none");
/* Registration auto load */
if ($("#exam_details_1").length) {
    function nmat_regisno() {
        $("#exam_details_2").val($("#exam_details_1").val());
    }
    nmat_regisno();
}
$("#exam_details_1").change(nmat_regisno);

/*remove submit button*/
/* 
$("#next_btn:contains(Submit Application)").remove(); */

/* instruction*/
$("#nmimsinst").append(`<div class="headinst"><ul class="nav navbar-right" style="margin-top:-25px;float:right!important;"> <li><a aria-controls="instructions" aria-expanded="false" class="collapse-link fa fa-angle-up" data-toggle="collapse" href="#collapseTermsandConditions"> </a></li> </ul> </div> <div aria-expanded="true" class="collapse in" id="collapseTermsandConditions"> <div style="margin:15px;"> <ol> <li>The right to carry out the admission process for the Programmes lies with the SVKM's NMIMS.</li> <li>SVKM's NMIMS reserves the exclusive right to reject any application for non-fulfillment of Eligibility Criteria or/and if found, information provided by the candidate is wrong. In such cases fees paid by the Candidate will be forfeited at any stage of Admission.</li> <li>A Non-Refundable Fee of INR 2600/- (MBA) plus Taxes is payable by every Candidate on Registration. Candidates can make an online payment through VISA / Mastercard / Debit / Credit Card.</li> <li>All the information pertaining to the Programmes / Admission Process will be posted on <a href="http://www.nmims.edu" target="_blank">www.nmims.edu</a>, and no separate communication, by Email or Other Means, will be sent to Candidates.</li> <li>The information that you provide in the Application Form will be used by SVKMs NMIMS. You may receive information through Email or Other Forms on matters unrelated to the Programmes and you agree not to object to such communications.</li> <li>I am aware that there is no Management Quota at NMIMS for MBA Programs. If I receive any Email / SMS related to it, I will consider it as fraudulent.</li> <li>All Disputes in this regard are subject to the Legal Jurisdiction of Mumbai.</li><li>For any support and assistance kindly login to dashboard & raise query in my query section.</li></ol> <div class="col-md-12"> <div class="form-line"> <h4>REFUND OF FEES IN CASE OF WITHDRAWAL / CANCELLATION OF ADMISSION</h4> <p class"p11">If a student chooses to withdraw from the Program of Study in which he / she is enrolled, the Institution shall follow the following Five-Tier System for the Refund of Fees remitted by the student.</p> <table class="table table-bordered instable"> <thead> <tr class="table-dark"> <th scope="col">Sr.No.</th> <th scope="col">Percentage of Refund of Aggregate fees*</th> <th scope="col">Point of time when notice of withdrawal of admission is served to the Institute</th> </tr> </thead> <tbody> <tr> <th scope="row">1</th> <td>100%</td> <td>15 days or more before the formally-notified last date of admission</td> </tr> <tr> <th scope="row">2</th> <td>90%</td> <td>Less than 15 days before the formally-notified last date of admission</td> </tr> <tr> <th scope="row">3</th> <td>80%</td> <td>15 days or less after the formally-notified last date of admission</td> </tr> <tr> <th scope="row">4</th> <td>50%</td> <td>30 days or less, but more than 15 days, after formally-notified last date of admission </td> </tr> <tr> <th scope="row">5</th> <td>00%</td> <td>More than 30 days after formally-notified last date of admission</td> </tr> </tbody> </table> <p classp11>In case of (1) in the table above, the HEI concerned shall deduct an amount not more than 5% of the fees paid by the student, subject to a maximum of Rs. 5,000/- as processing charges from the refundable amount.</p> <p classpnote>Note: The above refund rules are subject to revision as per UGC notification (as applicable). Candidates to refer Important Dates of the respective programme.</p> </div> </div> </div> </div>`);


/* button change*/
$("#next_btn:contains(Next)").text("Save and Proceed");
$("#next_btn:contains(Continue)").text("Make Payment");

/* reomve header*/
$(".form-title:contains(MBA 2022 Application Form)").length ? $(".form-title:contains(MBA 2022 Application Form)").remove() : "";

/*  add button class and changes the position of preview button on payment page*/
$(document).ready(function () {
    $('a[class="btn btn-raised pull-right preview-btn"]:contains(Preview)').before($('a[class="btn btn-raised pull-right preview-btn"]:contains(Pay Application Fee)'));
    if ($("a.btn.preview-btn:contains('Pay Application Fee')").length) {
        $("a.btn.preview-btn:contains('Pay Application Fee')").addClass('payappfee');
    }
});

/* Start ICON JS */

$(".icon-candi_npf").addClass("muni-person");
$(".app-Survey-Questions-ico").addClass("muni-assignment");
$(".icon-gateway-icon").addClass("muni-surround");

$(".muni-person").before('<div class="steps_class">STEP 1</div>');
$(".muni-assignment").before('<div class="steps_class">STEP 2</div>');
$(".muni-surround").before('<div class="steps_class">STEP 3</div>');
$(".app-applicant-details-ico").before('<div class="steps_class">STEP 4</div>');
$(".icon-uploads").before('<div class="steps_class">STEP 5</div>');
$('#npf-form .owl-item p').addClass("inner_paragraph");
/* End ICON js */

function fieldsTrigger(triggerPoint, triggeredField) {
    $('#' + triggerPoint).change(function () {
        $('#' + triggeredField).val('').trigger('change');
        $('.chosen').trigger('chosen:updated');
        $('.chosen-select').chosen();
        $('.chosen-select-deselect').chosen({
            allow_single_deselect: true
        });
    });
}
fieldsTrigger('applicant_work_experience', 'field_87');
fieldsTrigger('applicant_work_experience', 'field_89');
fieldsTrigger('applicant_work_experience', 'field_91');
fieldsTrigger('course_one', 'course_two');
fieldsTrigger('course_one', 'course_three');
fieldsTrigger('course_one', 'course_four');
fieldsTrigger('course_one', 'course_five');
fieldsTrigger('course_one', 'course_six');
fieldsTrigger('course_one', 'course_seven');

fieldsTrigger('course_two', 'course_three');
fieldsTrigger('course_two', 'course_four');
fieldsTrigger('course_two', 'course_five');
fieldsTrigger('course_two', 'course_six');
fieldsTrigger('course_two', 'course_seven');

fieldsTrigger('course_three', 'course_four');
fieldsTrigger('course_three', 'course_five');
fieldsTrigger('course_three', 'course_six');
fieldsTrigger('course_three', 'course_seven');

fieldsTrigger('course_four', 'course_five');
fieldsTrigger('course_four', 'course_six');
fieldsTrigger('course_four', 'course_seven');

fieldsTrigger('course_five', 'course_six');
fieldsTrigger('course_five', 'course_seven');
fieldsTrigger('course_six', 'course_seven');

/* if off campus is unchecked then all offline campus should refreshed */
$('#field_15_4').click(function () {
    $('#course_one').trigger('change');
    $('#course_two').trigger('change');
    $('#course_three').trigger('change');
    $('#course_four').trigger('change');
    $('#course_five').trigger('change');
    $('#course_six').trigger('change');
    $('#course_seven').trigger('change');
    $('.chosen').trigger('chosen:updated');
    $('.chosen-select').chosen();
    $('.chosen-select-deselect').chosen({
        allow_single_deselect: true
    });
});

function userProgramPreference() {
    var userAcademicBackgrounds = $('#graduation :selected').text();

    var mbadsaAcademicArray_DSA = [
        "Statistics",
        "Economics",
        "Mathematics",
        "Econometrics",
        "Commerce",
        "Engineering",
        "Pharmacy",
        "Biotechnology",
        "Bio-Medical",
        "Bio-Tech",
        "Life Science",
        "Information Technology",
        "Computer Science",
        "Electronics",
        "Physics",
        "MCA",
        "Pharmaceutical Chemistry and Technology",
        "Microbiology",
        "Biochemistry",
        "Bachelor of Management Studies (BMS)",
        "Bachelor of Business Administration (BBA)",
        "B.Tech",
        "Business Analytics"
    ];
    var userpharmaceuticalProgramValidation = ["Pharmacy",
        "Life Science",
        "Medical Technology",
        "MBBS",
        "BDS",
        "BHMS",
        "BAMS",
        "Biotechnology",
        "Bio-Medical",
        "Food Nutrition and Dietetics",
        "B.Sc. (Chemistry)",
        "Pharmaceutical Chemistry and Technology",
        "Pharmaceutical and Fine Chemicals Technology",
        "Microbiology",
        "Biochemistry",
        "Bioengineering",
        "Bio-Tech"
    ];

    var removepharmadsa = ['Zoology', 'Banking and Finance', 'Fashion Technology'];

    if (mbadsaAcademicArray_DSA.indexOf(userAcademicBackgrounds) !== -1 && userAcademicBackgrounds !== "") {
        $('#field_15_0').parent().show();
        $('.field_15 input[type=checkbox], .field_15 input[type=radio]').css('margin', '12px 26px 18px');
    } else {
        $('#field_15_0').attr('checked', false).parent().hide();
    }
    if (userpharmaceuticalProgramValidation.indexOf(userAcademicBackgrounds) !== -1 && userAcademicBackgrounds !== "") {
        $('#field_15_3').parent().show();
        $('.field_15 input[type=checkbox], .field_15 input[type=radio]').css('margin', '12px 0 18px');
    } else {
        $('#field_15_3').attr('checked', false).parent().hide();
    }
    if (mbadsaAcademicArray_DSA.indexOf(userAcademicBackgrounds) !== -1 && userpharmaceuticalProgramValidation.indexOf(userAcademicBackgrounds) !== -1) {
        $('.field_15 input[type=checkbox], .field_15 input[type=radio]').css('margin', '12px 26px 18px');
    }
    if (removepharmadsa.indexOf(userAcademicBackgrounds) !== -1) {
        $('#field_15_0,#field_15_3').attr('checked', false).parent().hide();
    }
}
$('#graduation').change(function () {
    userProgramPreference();
});
$(document).ajaxStop(userProgramPreference);

/* How many option is in dropdown only those preference should visible to the candidate */
function userPreferenceShowHide() {
    var prefIDs = ['course_one', 'course_two', 'course_three', 'course_four', 'course_five', 'course_six', 'course_seven'];
    var optionVisible = $('#' + prefIDs[0] + ' option').not(':eq(0)').length;
    var i;
    prefIDs.forEach(function (e) {
        $('.' + e).hide();
    });
    if ($("#field_15_4").is(":checked") == true) {

        $('.' + prefIDs[0]).show();

        if ($('#' + prefIDs[0]).val() !== "" && optionVisible > 1) {
            $('.' + prefIDs[1]).show();
            if ($('#' + prefIDs[1]).val() !== "" && optionVisible > 2) {
                $('.' + prefIDs[2]).show();
            } else {
                $('.' + [prefIDs[2], prefIDs[3], prefIDs[4], prefIDs[5], prefIDs[6]].join(",.")).hide();
                $('#' + [prefIDs[2], prefIDs[3], prefIDs[4], prefIDs[5], prefIDs[6]].join(",#")).val('').trigger('chosen:updated');
            }
            if ($('#' + prefIDs[2]).val() !== "" && optionVisible > 3) {
                $('.' + prefIDs[3]).show();
            } else {
                $('.' + [prefIDs[3], prefIDs[4], prefIDs[5], prefIDs[6]].join(",.")).hide();
                $('#' + [prefIDs[3], prefIDs[4], prefIDs[5], prefIDs[6]].join(",#")).val('').trigger('chosen:updated');
            }

            if ($('#' + prefIDs[3]).val() !== "" && optionVisible > 4) {
                $('.' + prefIDs[4]).show();
            } else {
                $('.' + [prefIDs[4], prefIDs[5], prefIDs[6]].join(",.")).hide();
                $('#' + [prefIDs[4], prefIDs[5], prefIDs[6]].join(",#")).val('').trigger('chosen:updated');
            }
            if ($('#' + prefIDs[4]).val() !== "" && optionVisible > 5) {
                $('.' + prefIDs[5]).show();
            } else {
                $('.' + [prefIDs[5], prefIDs[6]].join(",.")).hide();
                $('#' + [prefIDs[5], prefIDs[6]].join(",#")).val('').trigger('chosen:updated');
            }
            if ($('#' + prefIDs[5]).val() !== "" && optionVisible > 6) {
                $('.' + prefIDs[6]).show();
            } else {
                $('.' + [prefIDs[6]].join(",.")).hide();
                $('#' + [prefIDs[6]].join(",#")).val('').trigger('chosen:updated');
            }
        }
    }
}
// $('[name="field_15[]"]').change(userPreferenceShowHide);

// $('#course_one,#course_two,#course_three,#course_four,#course_five,#course_six,#course_seven').change(function () {
//     userPreferenceShowHide();
// });
// for (var timer = 200; timer <= 1000; timer++) {
//     setTimeout(() => {
//         userPreferenceShowHide();
//     }, timer);
// }
// $(document).ajaxStop(function () {
//     userPreferenceShowHide();
// });
/* changing the toggle position on clicking */
$(".collapse-link").click(function () {
    $(".collapse-link").toggleClass("fa-angle-down");
});

/* populating the application number in to the textbox field_6 */
$(document).ready(function () {
    $('#field_6').val($('#exam_details_1').val());
});

function userProgramCriteria() {
    var graduationStatus = $('#degreecertificate_status').val();

    var graduationMarks = $('#graduation_marks').val();

    var userProgramPreference = $('[name="field_15[]"]:checked').val();

    var academicBackgrounds_Digital_Trans = ["Engineering",
        "Mathematics",
        "Statistics",
        "Information Technology",
        "Computer Science",
        "Electronics",
        "Physics",
        "MCA",
        "B.Tech"
    ];


    var academicBackgrounds_DSA = ["Statistics",
        "Economics",
        "Mathematics",
        "Econometrics",
        "Commerce",
        "Engineering",
        "Pharmacy",
        "Biotechnology",
        "Bio-Medical",
        "Bio-Tech",
        "Life Science",
        "Information Technology",
        "Computer Science",
        "Electronics",
        "Physics",
        "MCA",
        "Pharmaceutical Chemistry and Technology",
        "Microbiology",
        "Biochemistry",
        "Bachelor of Management Studies (BMS)",
        "Bachelor of Business Administration (BBA)",
        "B.Tech",
    ];

    var academicBackground_BA_BA_JADCHERLA = ["Engineering",
        "Commerce",
        "Mathematics",
        "Econometrics",
        "Statistics",
        "Economics",
        "Information Technology",
        "Computer Science",
        "Electronics",
        "Physics",
        "B.Sc. (Chemistry)",
        "B.Tech"
    ];

    var academicBackground = $('#graduation :selected').text();

    var programPrefIds = ['course_one', 'course_two', 'course_three', 'course_four'];

    var campusValue55 = ["MBA Business Analytics (Mumbai)", "MBA Business Analytics Jadcherla (Hyderabad)", "MBA Digital Transformation (Mumbai)", "MBA Decision Science and Analytics(Mumbai) (NMIMS SBM and Purdue University Dual Degree Program)"];

    if (graduationStatus === "Passed") {

        programPrefIds.forEach(function (e) {
            var offlineProgramCampus = $('#' + e + ' :selected').text();
            if ((academicBackgrounds_Digital_Trans.indexOf(academicBackground) !== -1 && graduationMarks < "55" && graduationMarks !== "") && (campusValue55.indexOf(offlineProgramCampus) !== -1 || campusValue55.indexOf(userProgramPreference) !== -1)) {
                scrollToField('graduation_marks');
                $("#otherError_graduation_marks").html("Graduation Percentage: Minumum 55% required").show();
                flag = true;
            } else if ((academicBackgrounds_DSA.indexOf(academicBackground) !== -1 && graduationMarks < "55" && graduationMarks !== "") && (campusValue55.indexOf(offlineProgramCampus) !== -1 || campusValue55.indexOf(userProgramPreference) !== -1)) {
                scrollToField('graduation_marks');
                $("#otherError_graduation_marks").html("Graduation Percentage: Minumum 55% required").show();
                flag = true;
            } else if ((academicBackground_BA_BA_JADCHERLA.indexOf(academicBackground) !== -1 && graduationMarks < "55" && graduationMarks !== "") && (campusValue55.indexOf(offlineProgramCampus) !== -1 || campusValue55.indexOf(userProgramPreference) !== -1)) {
                scrollToField('graduation_marks');
                $("#otherError_graduation_marks").html("Graduation Percentage: Minumum 55% required").show();
                flag = true;
            } else {
                if (graduationMarks < "50" && graduationMarks !== "") {
                    scrollToField('graduation_marks');
                    $("#otherError_graduation_marks").html("Graduation Percentage: Minumum 50% required").show();
                    flag = true;
                }
            }
        });
    }
}
/* userProgramCriteria();
$(document).ajaxStop(function () {
    userProgramCriteria();
}); */
//freezing nmat fields here
if (location.pathname.search("preview") == -1) {
    $(document).ready(function () {
        if ($('h3:contains(Identity Information)').length === 1) {
            console.log('Hi I AM HERE');
            $('.form_build').find('div').find('input').each(function () {
                $(this).attr('readonly', true);
                $(this).css('pointer-events', 'none');
                $('select').css('pointer-events', 'none');
                $('.chosen-container.chosen-container-single,.radio.radio-primary.horizontal').css('pointer-events', 'none');
                $(this).addClass('nmatFields');
                $('.form-control').addClass('nmatFields');
                $('.chosen-container .chosen-single span').css('color', '#b9b7b7');
                $(document).on("contextmenu", function () {
                    return false;
                });
                /* locking tab button here */
                $(document).keydown(function (objEvent) {
                    if (objEvent.keyCode == 9) {
                        objEvent.preventDefault();
                    }
                })
            });
            /*changing the name of instruction on the nmat fields stage*/
            $('a:contains(Instructions)').replaceWith(`<a href="#npf-instruction" data-parent="#npf-form-instruction" data-toggle="collapse" class="accordion-toggle"><span class="icon-i infoIco"></span>Important Notes: <span class="pull-right arw-sml glyphicon glyphicon-minus marginTopToggle"></span><span class="pull-right arw-sml glyphicon glyphicon-plus marginTopToggle"></span></a>`);
        }
    });
}


/*DSA Instruction js*/
function dsaInstruction() {
    if ($('#field_15_0:checked').length === 1) {
        $('#dsacheck').show();
    } else {
        $('#dsacheck').hide();
    }
}
$('[name="field_15[]"],#graduation').change(function () {
    dsaInstruction();
});
dsaInstruction();

$('.dropup.col-md-12.field_27.checkbox .control-label').css('font-weight', '400');

/* for date gap */

var monthvalue = {

    "Jan": "01",
    "Feb": "02",
    "Mar": "03",
    "Apr": "04",
    "May": "05",
    "Jun": "06",
    "Jul": "07",
    "Aug": "08",
    "Sep": "09",
    "Oct": "10",
    "Nov": "11",
    "Dec": "12"

};

/* 12/diploma and ug year gap   */
if ($("#field_10018").length || $("#field_10244").length) {
    function ugxiigap(month, year, setdatevalue) {
        var setonchange = function () {
            var constdate = "01";
            var actualmnth = $('#' + month).val();
            var nummonth = monthvalue[actualmnth];
            var actualyear = $('#' + year).val();
            var datemmddyy = new Date(nummonth + '/' + constdate + '/' + actualyear);
            $('#' + setdatevalue).datepicker("setDate", datemmddyy);
        }
        $('#' + [month, year].join(",#")).change(setonchange);
        $(document).ready(setonchange);
    }
    ugxiigap('field_9946_1_2', 'field_9946_1_3', 'field_10020');
    ugxiigap('field_9950_1_2', 'field_9950_1_3', 'field_10253');
    ugxiigap('field_9958_1_1', 'field_9958_1_2', 'field_10021');

}


/* experince start month should be (ug pass year + 1)  */
if ($(".field_9972").length && $('.form_preview').length !== 1) {

    var startwork = function () {
        var constdate = "01";
        var actualmnth = $('#field_9958_1_3').val();
        var nummonth = parseFloat(monthvalue[actualmnth]) + 1;
        var nummonth2 = monthvalue[actualmnth];
        var actualyear = $('#field_9958_1_4').val();
        /* var datemmddyy = new Date(nummonth + '/' + constdate + '/' + actualyear); */
        var datemmddyy = new Date(nummonth + '/' + constdate + '/' + actualyear);
        var datemmddyy2 = new Date(nummonth2 + '/' + constdate + '/' + actualyear);

        console.log(datemmddyy);
        $('#field_9972_1_5').datepicker("setStartDate", datemmddyy);
        $('#field_9972_2_5').datepicker("setStartDate", datemmddyy);
        $('#field_9972_3_5').datepicker("setStartDate", datemmddyy);

        $('#field_10256').datepicker("setDate", datemmddyy2);
        $('#field_9972_1_6').datepicker("setStartDate", datemmddyy);
        $('#field_9972_2_6').datepicker("setStartDate", datemmddyy);
        $('#field_9972_3_6').datepicker("setStartDate", datemmddyy);

        $('#field_10256').datepicker("setDate", datemmddyy2);

    }
    startwork();
    $('#field_9958_1_3,#field_9958_1_4').change(function () {
        $('#field_9972_1_5').val("");
        $('#field_9972_2_5').val("");
        $('#field_9972_3_5').val("");
        startwork();
    });
}

/* experince start month year should be greater than previous end date*/

if ($(".field_9972").length && $('.form_preview').length !== 1) {
    function datecontrol(datefieldTo, datefieldFrom) {
        var runOnChange = function () {
            if ($('#' + datefieldTo).val() != "") {
                var date_to = $('#' + datefieldTo).val();
                var date = date_to.split("/")[0];
                var month = date_to.split("/")[1];
                var year = date_to.split("/")[2];
                var datemmddyy = new Date(month + '/' + date + '/' + year);
                datemmddyy.setDate(datemmddyy.getDate() + 1);

                $('#' + datefieldTo).change(function () {
                    $('#' + datefieldFrom).val("");
                });

                $('#' + datefieldFrom).datepicker('setStartDate', datemmddyy)
            }
        }
        $('#' + [datefieldTo, datefieldFrom].join(",#")).change(runOnChange);
        $(document).ready(runOnChange);
    }

    datecontrol('field_9972_1_6', 'field_9972_2_5');
    datecontrol('field_9972_2_6', 'field_9972_3_5');

}

/* if ($("#field_10259").length) {
    function workgap() {
        console.log("chla");
        var ugpass_dec = $("#field_10258").val(),
            totalexp = $("#field_9984").val();
        actualgap = ugpass_dec - totalexp;
        $("#field_10259").val(actualgap);
    }
    workgap();
}
$("#field_10258,#field_9984").change(workgap); */

$("a:contains(WAT and PI Form)").text("NEXT");


if ($("#field_10261").length) {

    function eligibleshow() {
        var eligprog1 = $("#exam_details_14").length && $("#exam_details_14").val() == "Eligible" ? "MBA Decision Science and Analytics(Mumbai) (NMIMS SBM and Purdue University Dual Degree Program), " : "";
        var eligprog2 = $("#exam_details_15").length && $("#exam_details_15").val() == "Eligible" ? "MBA(Mumbai), " : "";
        var eligprog3 = $("#exam_details_16").length && $("#exam_details_16").val() == "Eligible" ? "MBA Human Resource(Mumbai), " : "";
        var eligprog4 = $("#exam_details_17").length && $("#exam_details_17").val() == "Eligible" ? "MBA Pharmaceutical Management(Mumbai), " : "";
        var eligprog5 = $("#exam_details_18").length && $("#exam_details_18").val() == "Eligible" ? "MBA Business Analytics (Mumbai), " : "";
        var eligprog6 = $("#exam_details_19").length && $("#exam_details_19").val() == "Eligible" ? "MBA Bangalore, " : "";
        var eligprog7 = $("#exam_details_20").length && $("#exam_details_20").val() == "Eligible" ? "MBA Business Analytics Jadcherla (Hyderabad), " : "";
        var eligprog8 = $("#exam_details_21").length && $("#exam_details_21").val() == "Eligible" ? "MBA Digital Transformation (Mumbai), " : "";
        var eligprog9 = $("#exam_details_22").length && $("#exam_details_22").val() == "Eligible" ? "MBA Indore, " : "";
        var eligprog10 = $("#exam_details_23").length && $("#exam_details_23").val() == "Eligible" ? "MBA Jadcherla (Hyderabad), " : "";
        var eligprog11 = $("#exam_details_24").length && $("#exam_details_24").val() == "Eligible" ? "MBA Navi Mumbai, " : "";

        var all = eligprog1 + eligprog2 + eligprog3 + eligprog4 + eligprog5 + eligprog6 + eligprog7 + eligprog8 + eligprog9 + eligprog10 + eligprog11;
        var alleligilble = all.substring(0, all.length - 2);

        if (alleligilble !== "" && alleligilble !== undefined) {
            $("#allprogram").text('Apart from your selected preferences, you are also eligible for the following programs: ' + alleligilble);
            /*  addRequired('field_10261');
             $('.field_10261').show(); */
        }
        /* else {
                   removeRequired('field_10261');
                   $('.field_10261').hide();
                   $('#field_10261').val('').change().trigger('chosen:updated');
               } */
    }
    eligibleshow();
    $("#exam_details_14,#exam_details_15,#exam_details_16,#exam_details_17,#exam_details_18,#exam_details_19,#exam_details_20,#exam_details_21,#exam_details_22,#exam_details_23,#exam_details_24").change(eligibleshow);
}

function displayDataStatus() {
    var statusFields = ["exam_details_14", "exam_details_15", "exam_details_16", "exam_details_17", "exam_details_18", "exam_details_19", "exam_details_20", "exam_details_21", "exam_details_22", "exam_details_23", "exam_details_24"];
    var offCampusField = ['course_one', 'course_two', 'course_three', 'course_four', 'course_five', 'course_six', 'course_seven'];
    var fieldProgramMapping = {
        "exam_details_14": "MBA Decision Science and Analytics(Mumbai) (NMIMS SBM and Purdue University Dual Degree Program)",
        "exam_details_15": "MBA(Mumbai)",
        "exam_details_16": "MBA Human Resource(Mumbai)",
        "exam_details_17": "MBA Pharmaceutical Management(Mumbai)",
        "exam_details_18": "MBA Business Analytics (Mumbai)",
        "exam_details_19": "MBA Bangalore",
        "exam_details_20": "MBA Business Analytics Jadcherla (Hyderabad)",
        "exam_details_21": "MBA Digital Transformation (Mumbai)",
        "exam_details_22": "MBA Indore",
        "exam_details_23": "MBA Jadcherla (Hyderabad)",
        "exam_details_24": "MBA Navi Mumbai"
    }
    statusFields.forEach(function (getId) {
        if ($('#' + getId).val() === "Eligible") {
            $('#eligible').append("<li>" + fieldProgramMapping[getId] + "</li>");
            $('.notEligibleContent2').hide();
        }
        if ($('#' + getId).val() === "Shortlisted") {
            $('#shortListed').append("<li>" + fieldProgramMapping[getId] + "</li>");
            $('.notEligibleContent1').hide();
        }
        /*Clearning the above extra space here*/
        $('.' + getId).hide();
    });
    offCampusField.forEach(function (offId) {
        $('.' + offId).hide();
    });
}
displayDataStatus();

if ($("#field_10261").length) {
    function programeligibleshow(eligibleprogram, checkvalue, addprog) {
        var eligibleOnChange = function () {
            if ($('#' + addprog).val() == "Yes") {

                /* $('#' + eligibleprogram).val() == "Eligible" ? $('#' + checkvalue).parent().show() : $('#' + checkvalue).attr('checked', false).parent().hide(); */
                if ($('#' + eligibleprogram).val() == "Eligible") {
                    console.log('i AM IN ' + eligibleprogram);
                    $('#' + checkvalue).parent().show();
                } else {
                    console.log('I am here' + eligibleprogram);
                    $('#' + checkvalue).attr('checked', false).parent().hide();
                }
            }
        }
        $('#' + [eligibleprogram, addprog].join(",#")).change(eligibleOnChange);

        $(document).ready(eligibleOnChange);
    }
    programeligibleshow('exam_details_14', 'field_10266_2', 'field_10261');
    programeligibleshow('exam_details_15', 'field_10266_0', 'field_10261');
    programeligibleshow('exam_details_16', 'field_10266_1', 'field_10261');
    programeligibleshow('exam_details_17', 'field_10266_3', 'field_10261');
    programeligibleshow('exam_details_18', 'field_10266_4', 'field_10261');
    programeligibleshow('exam_details_19', 'field_10266_5', 'field_10261');
    programeligibleshow('exam_details_20', 'field_10266_6', 'field_10261');
    programeligibleshow('exam_details_21', 'field_10266_7', 'field_10261');
    programeligibleshow('exam_details_22', 'field_10266_8', 'field_10261');
    programeligibleshow('exam_details_23', 'field_10266_9', 'field_10261');
    programeligibleshow('exam_details_24', 'field_10266_10', 'field_10261');

}

var previousSelectedArray = [];
var selectedOffCampusData = [];
var blankFieldsId = [];
var offCampusField = ['course_one', 'course_two', 'course_three', 'course_four', 'course_five', 'course_six', 'course_seven'];

function previouslySelectedProgram() {
    $('[name="field_15[]"]').each(function (i, e) {
        if ($(this).is(':checked')) {
            previousSelectedArray.push({
                keyId: $(this).attr('id'),
                keyValue: $(this).val()
            });
        }
    });
    if ($('#field_15535').val() === "" || $('#field_15535').val() === undefined) {
        $('#field_15535').val(previousSelectedArray.length);
    }

    offCampusField.forEach(function (id) {
        if ($('#' + id).val() !== "" && $('#' + id).val() !== undefined) {
            selectedOffCampusData.push({
                fieldId: id,
                fieldData: $('#' + id).val()
            });
        }
        if ($('#' + id).val() === "" || $('#' + id).val() === undefined) {
            blankFieldsId.push(id);
        }
    });
    if ($('#field_15536').val() === "" || $('#field_15536').val() === undefined) {
        $('#field_15536').val(selectedOffCampusData.length);
    }
    /*freezing the field of choose program preference show that candidate can not change that*/
    $('.field_15 label').css('pointer-events', 'none');
    offCampusField.forEach(function (fieldId) {
        $('.' + fieldId).css('pointer-events', 'none');
    });
    $('.graduation').css('pointer-events', 'none');
    $(document).on("contextmenu", function () {
        return false;
    });
    /* locking tab button here */
    $(document).keydown(function (objEvent) {
        if (objEvent.keyCode == 9) {
            objEvent.preventDefault();
        }
    })
}

function addMoreProgram() {
    var addMorePrograms = [];
    var offCampuses = ['MBA Business Analytics (Mumbai)', 'MBA Bangalore', 'MBA Business Analytics Jadcherla (Hyderabad)', 'MBA Digital Transformation (Mumbai)', 'MBA Indore', 'MBA Jadcherla (Hyderabad)', 'MBA Navi Mumbai'];

    $('[name="field_10266[]"]').each(function () {
        if ($(this).is(':checked')) {
            addMorePrograms.push($(this).val());
        }
    });

    $('.field_15 :checkbox').prop('checked', false);
    previousSelectedArray.forEach(function (elem) {
        $('#' + elem.keyId).prop('checked', true);
    });
    if (selectedOffCampusData.length === 0) {
        $('#field_15_4').prop('checked', false).change();
        ResetJS();
    }
    offCampusField.forEach(function (elemId) {
        $('#' + elemId).val('').change().trigger('chosen:updated');
    });
    selectedOffCampusData.forEach(function ($elemId) {
        $('#' + $elemId.fieldId).val($elemId.fieldData).change().trigger('chosen:updated');
    });
    addMorePrograms.forEach(function (getValue) {
        $('.field_15 :checkbox[value="' + getValue + '"]').prop('checked', true);
        //passing the data in offCampus Field
        if (offCampuses.indexOf(getValue) !== -1) {
            if (selectedOffCampusData.length === 0) {
                $('#field_15_4').prop('checked', true).change();
                ResetJS();
            }
            if ($('#field_15_4:checked').length === 1) {
                blankFieldsId.forEach(function (fieldId) {
                    if ($('#' + fieldId).val() === "") {
                        $('#' + fieldId).val("").change().trigger('chosen:updated');
                        console.log(getValue);
                        $('#' + fieldId + ' option:contains(' + getValue + ')').prop('selected', true).change().trigger('chosen:updated');
                    }
                });
            }
        }
    });
    console.log(previousSelectedArray, selectedOffCampusData, addMorePrograms);
}
$('[name="field_10266[]"]').click(function () {
    addMoreProgram();
});
$('#field_10261').change(function () {
    addMoreProgram(); /* calling the same function on ajaxStop function below as well*/
});

$(document).ready(function () {
    previouslySelectedProgram();
    if ($('h3:contains(Work Experience Details)').length) {
        $('#next_btn').text('Next');
    }
    /*removing the function from save & exit*/
    $('.save-exit').replaceWith(`<a class="btn pull-left dark-grey save-exit" href="https://applymba.nmims.edu/nmat-mba/dashboard" onclick="">Save &amp; Exit</a>`);
    /*hiding the checkbox field here name as new combine values*/

    $('.field_15').hide();
    $('.field_14291').hide();

    var gen = $("#gender").val();
    var title;
    if (gen == '97977;;;Male') {
        title = 'Mr';

    } else if (gen == '97978;;;Female') {
        title = 'Miss';

    }
    $("#applicant_title").val(title);
    $('.chosen-select').trigger('chosen:updated');

    $('#applicant_title_chosen').css("pointer-events", "none");

    //$('#field_9886').val($('#father_first_name').val());
    $('#field_11619').val($('#first_name').val());
    $('#field_11618').val($('#last_name').val());
    $('#field_19452').val($('#first_name').val());
    $('#field_19453').val($('#last_name').val());
    $('#field_19454').val($('#email').val());

    $('#field_19458').val($('#mobile no').val());
    $('#field_19457').val($('#father_first_name').val());
    $('#field_19456').val($('#father_last_name').val());
    $('#field_19460').val($('#mother_first_name').val());
    $('#field_19459').val($('#mother_last_name').val());


    //$('#field_9903').val($('#mother_first_name').val());
    if ($('#field_13').val() !== "" && $('#field_13').val() !== undefined) {
        $('#field_11613').val($('#field_13').val()).change().trigger('chosen:updated');
    }
    /*$('#field_11613_chosen').css("pointer-events", "none");*/
    // $('#field_9958_1_8').val($('#graduation_marks').val()).trigger('chosen:updated');
    $('.father_mobile_no .merge_field_div').css('pointer-events', '');
    /*$('#field_11614_chosen,#field_11612_chosen,#field_11616_chosen,#field_11615_chosen,#field_11611_chosen').css('pointer-events', 'none');*/

    previouslySelectedProgram();
});

var firstAjaxFlag = false;
// to stop the autopopulate i have made flag false for all time
// if ($('#field_11614,#field_11612,#field_11616,#field_11615,#field_11611').length) {
//     $(document).ajaxStop(function () {
//         if (firstAjaxFlag) {
//             if ($('#graduation_university').val() !== "" && $('#graduation_university').val() !== undefined) {
//                 $('#field_11614').val($('#graduation_university').val()).change().trigger('chosen:updated');;
//             }
//             if ($('#applicant_graduate_college').val() !== "" && $('#applicant_graduate_college').val() !== undefined) {
//                 if ($('#applicant_graduate_college').val().search("Other") == -1) {
//                     $('#field_11612').val($('#applicant_graduate_college').val()).change().trigger('chosen:updated');
//                 }
//             }
//             if ($('#grad_degree').val() !== "" && $('#grad_degree').val() !== undefined) {
//                 $('#field_11616').val($('#grad_degree').val()).change().trigger('chosen:updated');;
//             }
//             if ($('#applicant_completion_of_graduation_degree').val() !== "" && $('#applicant_completion_of_graduation_degree').val() !== undefined) {
//                 $('#field_11611').val($('#applicant_completion_of_graduation_degree').val()).trigger('chosen:updated');
//             }
//             firstAjaxFlag = false;
//         }
//     });
// }

var ajaxFlagForWatPi = true;
$(document).ajaxStop(function () {
    if (ajaxFlagForWatPi) {
        previouslySelectedProgram();
        addMoreProgram();
        ajaxFlagForWatPi = false;
    }
});

/*function check wheather field blank*/
$('.item,#next_btn,#skip_btn,.save-exit').click(function () {
    if ($("h3:contains(Father's Office Address Details)").length) {
        document.cookie = "blankFields=none;expires = Thu, 18 Dec 2033 12: 00: 00 UTC ";
        required_fields.forEach(function (e) {
            if ($('#' + e).val() === "") {
                document.cookie = "blankFields=Yes;expires = Thu, 18 Dec 2033 12: 00: 00 UTC ";
            }
        });
    }
});




if ($('.reSubmitLogicForm').length == 1 && !$("#field_19671_0").is(":disabled")) {
    /* function offerStatus(params) {
        $("#" + params).val() != "Approved" && $('.' + params).parent().hide();
    }
    offerStatus('enrolled_field31');
    offerStatus('enrolled_field36');
    offerStatus('enrolled_field41'); */

    /* $("div#enrolled_field31_chosen, input#enrolled_field33, input#enrolled_field33, div#enrolled_field36_chosen, input#enrolled_field38, input#enrolled_field39, div#enrolled_field41_chosen, input#enrolled_field43, input#enrolled_field44, input#enrolled_field34, .field_19350, .file").hide(); */
    $('.field_20918,.field_20917,.field_20917,.field_20918,.field_20831,.field_20808,.countFormNpf,.progress,.field_19350, .file,.owl-item:contains(Admission Form),.field_20419,.field_20420,.field_20422').hide();
    $('a:contains(Submit)').text('Accept and Submit');
    $('.signature_image,.parents_signature_image').show();
    removeRequired('field_20422');



}

if ($('#field_20419').length) {

    if ($('#field_20810_1_1').val() === "MBA Business Analytics (Mumbai)") {
        $('#field_20419').val('Centre of Excellence in Analytics and Data Science');
    } else {
        $('#field_20419').val('School of Business Management');
    }

    if ($('#field_20292').val() == 'Accept') {
        $('#field_20420').val('MBA(MUMBAI)').change();
    } else if ($('#field_20291').val() == 'Accept') {
        $('#field_20420').val('MBA (HR)').change();
    } else if ($('#field_20290').val() == 'Accept') {
        $('#field_20420').val('MBA (DECISION SCIENCES & ANALYTICS)').change();
    }
    $('#selectprogram').text($('#field_20420').val());
}
$('.field_19671').find('.control-label:contains(UNDERTAKING & DECLARATION)').text('');

if ($('.reSubmitLogicForm').length == 1 && $('input[type="file"]').is(":disabled") == false) {
    setTimeout(function () {
        $(".enrolled_field31,.enrolled_field33,.enrolled_field34,.field_20292,.enrolled_field36,.enrolled_field38,.enrolled_field39,.field_20291,.enrolled_field41,.enrolled_field43,.enrolled_field43,.enrolled_field44,.field_20290,.field_20417").hide();
    }, 1000);
    $("#field_19671_0").is(":disabled") && $(".field_20117").hide();
    $("#field_20113_0").is(":disabled") && $(".field_20113").parent().hide();
    $("#field_20114_0").is(":disabled") && $(".field_20114").parent().hide();
    $("#field_20115_0").is(":disabled") && $(".field_20115").parent().hide();
} else {
    if ($('.reSubmitLogicForm').length == 0 && location.pathname.search("preview") === -1) {
        $('.field_20799,.field_20809,.field_20810,.field_20117').hide();
    }
}

//function to display the data to the candidate in what preference he got selected or not by Anshul
//variable declare for transfer case -
var globalMeritNumberForOffCampus = "";
var globalMeritRoundForOffCampus = "";
var globalSubCategory = "";

function statusDataMappingDisplay() {
    var fieldDataContains = {
        'field_20805': 'pref1OfferStatus',
        'field_20806': 'pref2OfferStatus',
        'field_20807': 'pref3OfferStatus',
        'field_21331': 'pref4OfferStatus',
        'enrolled_field33': 'pref1MeritNumber',
        'enrolled_field34': 'pref1MeritRound',
        'enrolled_field38': 'pref2MeritNumber',
        'enrolled_field39': 'pref2MeritRound',
        'enrolled_field43': 'pref3MeritNumber',
        'enrolled_field44': 'pref3MeritRound',
        'enrolled_field48': 'pref4MeritNumber',
        'enrolled_field49': 'pref4MeritRound'
    }
    var prefId = ['field_20805', 'field_20806', 'field_20807', 'field_21331', 'enrolled_field33', 'enrolled_field34', 'enrolled_field38', 'enrolled_field39', 'enrolled_field43', 'enrolled_field44', 'enrolled_field48', 'enrolled_field49'];
    prefId.forEach(function (searchInObject) {
        $('#' + fieldDataContains[searchInObject]).text($('#' + searchInObject).val());
    });
    //for oFF campus handling
    var offCampusStatus = ["field_23416;;;Pref1-status", "field_23415;;;Pref2-status", "field_23414;;;Pref3-status", "field_23413;;;Pref4-status", "field_23417;;;Pref5-status", "field_23418;;;Pref6-status"];

    var fieldOffDataContains1;
    var fieldOffDataContains2;
    var fieldOffDataContains3;
    var fieldOffDataContains4;
    var fieldOffDataContains5;
    var fieldOffDataContains6;
    offCampusStatus.forEach(function (dataElem) {
        if (["Selected", "Waitlisted"].indexOf($('#' + dataElem.split(";;;")[0]).val()) !== -1) {
            if (dataElem.split(";;;")[1] === "Pref1-status") {
                fieldOffDataContains1 = {
                    "field_22195": "pref5_Off",
                    "field_23416": "pref5_Off_OfferStatus",
                    "enrolled_field3": "pref5_Off_MeritNumber",
                    "enrolled_field4": "pref5_Off_MeritRound"
                }
                globalMeritNumberForOffCampus = $('#enrolled_field3').val();
                globalMeritRoundForOffCampus = $('#enrolled_field4').val();
                globalSubCategory = $('#sub_category5').val();
            }
            if (dataElem.split(";;;")[1] === "Pref2-status") {
                fieldOffDataContains2 = {
                    "field_22196": "pref6_Off",
                    "field_23415": "pref6_Off_OfferStatus",
                    "enrolled_field8": "pref6_Off_MeritNumber",
                    "enrolled_field9": "pref6_Off_MeritRound"
                }
                globalMeritNumberForOffCampus = $('#enrolled_field8').val();
                globalMeritRoundForOffCampus = $('#enrolled_field9').val();
                globalSubCategory = $('#sub_category6').val();
            }
            if (dataElem.split(";;;")[1] === "Pref3-status") {
                fieldOffDataContains3 = {
                    "field_22197": "pref7_Off",
                    "field_23414": "pref7_Off_OfferStatus",
                    "enrolled_field13": "pref7_Off_MeritNumber",
                    "enrolled_field14": "pref7_Off_MeritRound"
                }
                globalMeritNumberForOffCampus = $('#enrolled_field13').val();
                globalMeritRoundForOffCampus = $('#enrolled_field14').val();
                globalSubCategory = $('#sub_category7').val();
            }
            if (dataElem.split(";;;")[1] === "Pref4-status") {
                fieldOffDataContains4 = {
                    "field_22198": "pref8_Off",
                    "field_23413": "pref8_Off_OfferStatus",
                    "enrolled_field18": "pref8_Off_MeritNumber",
                    "enrolled_field19": "pref8_Off_MeritRound"
                }
                globalMeritNumberForOffCampus = $('#enrolled_field18').val();
                globalMeritRoundForOffCampus = $('#enrolled_field19').val();
                globalSubCategory = $('#sub_category8').val();

            }
            if (dataElem.split(";;;")[1] === "Pref5-status") {
                fieldOffDataContains5 = {
                    "field_22199": "pref9_Off",
                    "field_23417": "pref9_Off_OfferStatus",
                    "enrolled_field23": "pref9_Off_MeritNumber",
                    "enrolled_field24": "pref9_Off_MeritRound"
                }
                globalMeritNumberForOffCampus = $('#enrolled_field23').val();
                globalMeritRoundForOffCampus = $('#enrolled_field24').val();
                globalSubCategory = $('#sub_category9').val();
            }
            if (dataElem.split(";;;")[1] === "Pref6-status") {
                fieldOffDataContains6 = {
                    "field_22200": "pref10_Off",
                    "field_23418": "pref10_Off_OfferStatus",
                    "enrolled_field28": "pref10_Off_MeritNumber",
                    "enrolled_field29": "pref10_Off_MeritRound"
                }
                globalMeritNumberForOffCampus = $('#enrolled_field28').val();
                globalMeritRoundForOffCampus = $('#enrolled_field29').val();
                globalSubCategory = $('#sub_category').val();
            }
        }
    });
    var allOffCampusFields = ["field_22195", "field_22196", "field_22197", "field_22198", "field_22199", "field_22200", "field_23416", "field_23415", "field_23414", "field_23413", "field_23417", "field_23418", "enrolled_field3", "enrolled_field4", "enrolled_field8", "enrolled_field9", "enrolled_field13", "enrolled_field14", "enrolled_field18", "enrolled_field19", "enrolled_field23", "enrolled_field24", "enrolled_field28", "enrolled_field29"];

    allOffCampusFields.forEach(function (getOffDisplayData) {
        console.log();
        fieldOffDataContains1 !== undefined ? $('#' + fieldOffDataContains1[getOffDisplayData]).text($('#' + getOffDisplayData).val()) : "";
        fieldOffDataContains2 !== undefined ? $('#' + fieldOffDataContains2[getOffDisplayData]).text($('#' + getOffDisplayData).val()) : "";
        fieldOffDataContains3 !== undefined ? $('#' + fieldOffDataContains3[getOffDisplayData]).text($('#' + getOffDisplayData).val()) : "";
        fieldOffDataContains4 !== undefined ? $('#' + fieldOffDataContains4[getOffDisplayData]).text($('#' + getOffDisplayData).val()) : "";
        fieldOffDataContains5 !== undefined ? $('#' + fieldOffDataContains5[getOffDisplayData]).text($('#' + getOffDisplayData).val()) : "";
        fieldOffDataContains6 !== undefined ? $('#' + fieldOffDataContains6[getOffDisplayData]).text($('#' + getOffDisplayData).val()) : "";
    });
}
//global variable declare to take the date from the preferences if that is selected in first merit list
var selectedWaitlistedProgram = "";
var offerStatus = "";
var globalSchoolName = "";
var globalCampusName = "";

function displaySelectedPreference() {
    var mbaStatus = $('#field_20805').val();
    var hrStatus = $('#field_20806').val();
    var dsaStatus = $('#field_20807').val();
    var pharmaStatus = $('#field_21331').val();

    if (mbaStatus !== "Selected") {
        $('#field_20810_1_1 option[value="MBA(Mumbai)"]').remove();
    }
    if (hrStatus !== "Selected") {
        $('#field_20810_1_1 option[value="MBA (Human Resources)"]').remove();
    }
    if (dsaStatus !== "Selected") {
        $('#field_20810_1_1 option[value="MBA (Decision Sciences and Analytics)"]').remove();
    }
    if (pharmaStatus !== "Selected") {
        $('#field_20810_1_1 option[value="MBA Pharmaceutical Management(Mumbai)"]').remove();
    }
    var offCampusStatusField = ["field_23416;;;pref1", "field_23415;;;pref2", "field_23414;;;pref3", "field_23413;;;pref4", "field_23417;;;pref5", "field_23418;;;pref6"];
    var offCampusSequencePrefrence = {
        "pref1": $('#field_22195').val(),
        "pref2": $('#field_22196').val(),
        "pref3": $('#field_22197').val(),
        "pref4": $('#field_22198').val(),
        "pref5": $('#field_22199').val(),
        "pref6": $('#field_22200').val(),
    }
    var selectedOption = false;
    var previousSelectedData = $('#field_20810_1_1').val() !== "" ? $('#field_20810_1_1').val() : console.log();
    $('#field_20810_1_1 option').each(function (index, value) {
        let dataOption = $(value).val();
        if (["MBA Business Analytics (Mumbai)", "MBA Bangalore", "MBA Digital Transformation (Mumbai)", "MBA Indore", "MBA Jadcherla (Hyderabad)", "MBA Navi Mumbai"].indexOf(dataOption) !== -1) {
            $(value).attr('disabled', true).prop('selected', false).hide();
        }
        if (index === 6) {
            selectedOption = true;
        }
    });
    if (selectedOption) {
        offCampusStatusField.forEach(function (statusId) {
            if ($('#' + statusId.split(";;;")[0]).val() === "Selected") {
                $('#field_20810_1_1 option[value="' + offCampusSequencePrefrence[statusId.split(";;;")[1]] + '"]').attr('disabled', false).show();
            }
        });
        $('#field_20810_1_1').val(previousSelectedData);
    } else {
        if ($('#page_wise_percent_1').length || $('.page_wise_percent_mobile_1').length) {
            //pushing the selected data in to the global variable - transfer case
            offCampusStatusField.forEach(function (statusId) {
                if ($('#' + statusId.split(";;;")[0]).val() === "Selected") {
                    selectedWaitlistedProgram = offCampusSequencePrefrence[statusId.split(";;;")[1]];
                    offerStatus = $('#' + statusId.split(";;;")[0]).val();
                    globalCampusName = selectedWaitlistedProgram === "MBA Business Analytics (Mumbai)" ? "Mumbai" : selectedWaitlistedProgram === "MBA Bangalore" ? "Bangalore" : selectedWaitlistedProgram === "MBA Digital Transformation (Mumbai)" ? "Mumbai" : selectedWaitlistedProgram === "MBA Indore" ? "Indore" : selectedWaitlistedProgram === "MBA Jadcherla (Hyderabad)" ? "Jadcherla (Hyderabad)" : selectedWaitlistedProgram === "MBA Navi Mumbai" ? "Navi Mumbai" : console.log()
                    globalSchoolName = selectedWaitlistedProgram === "MBA Business Analytics (Mumbai)" ? "Centre of Excellence in Analytics and Data Science" : "School of Business Management";
                }
            });
        }
    }
}

function disAbledOptionIfSelectedAndSave() {
    var lastAddedSave = $('#field_20812').val();
    //because offer accept date have been passed for MBA and MBA HR and off campuses
    var offerDatePassed = ["MBA(Mumbai)", "MBA (Human Resources)", "MBA (Decision Sciences and Analytics)", "MBA Business Analytics (Mumbai)", "MBA Bangalore", "MBA Digital Transformation (Mumbai)", "MBA Indore", "MBA Jadcherla (Hyderabad)", "MBA Navi Mumbai"];
    //below array contains which data where candidate have paid for that
    var spllittedValue = [];
    if (lastAddedSave) {
        if (lastAddedSave.indexOf("->") !== -1) {
            spllittedValue.push(lastAddedSave.split("->"));
        } else {
            spllittedValue.push([lastAddedSave]);
        }
    }
    if ($('#field_20813').val() !== "" && Number($('#field_20813').val()) > 0) {
        spllittedValue.forEach(function (getArray) {
            $('#field_20810_1_1 option').each(function (i, e) {
                let localData = $(e).val();
                if (getArray.indexOf(localData) !== -1) {
                    $(e).not(':selected').attr('disabled', true);
                }
            });
        });
    }
    //because offer accept date have been passed for MBA and MBA HR MBA (Decision Sciences and Analytics) and off campus
    //will do transfer form handling here when offer accept start for approved candidates just need to put the check of request for program trasnfer
    //field here if that is yes then exclude below function if that is empty then this function will work..
    $('#field_20810_1_1 option').each(function (index, value) {
        let localData = $(value).val();
        if (offerDatePassed.indexOf(localData) !== -1) {
            //$(value).attr('disabled', true);
            $(value).not(':selected').attr('disabled', true);
        }
    });
    //handling of transfer case if person selected in transfer
    var approvedTransferProgram = ["MBA Bangalore", "MBA Jadcherla (Hyderabad)"];
    if ($('#field_26004').val() === "Yes") {
        $('#field_20810_1_1 option').each(function (index, value) {
            let localData = $(value).val();
            if (approvedTransferProgram.indexOf(localData) !== -1) {
                $(value).attr('disabled', false);
            }
        });
    }
    var approvedTransferProgram = ["MBA Business Analytics (Mumbai)"];
    if ($('#field_26050').val() === "Enable Off Campus") {
        $('#field_20810_1_1 option').each(function (index, value) {
            let localData = $(value).val();
            if (approvedTransferProgram.indexOf(localData) !== -1) {
                $(value).attr('disabled', false);
            }
        });
    }
    $('.chosen-select').trigger('chosen:updated');
}

function toRemoveExtraSpace() {
    var prefId = ['field_20805', 'field_20806', 'field_20807', 'enrolled_field33', 'enrolled_field34', 'enrolled_field38', 'enrolled_field39', 'enrolled_field43', 'enrolled_field44', 'field_20418', 'sap_student_number1', 'sap_student_number2', 'sap_student_number3', 'enrolled_field48', 'enrolled_field49', "field_23416", "field_23415", "field_23414", "field_23413", "field_23417", "field_23418"];
    prefId.forEach(function (elem) {
        $('.' + elem).hide();
    });
    if ($('.reSubmitLogicForm').length == 1) {
        $('.field_20811,.field_20812,.field_20813,.field_20814,.field_20830,.field_20828,.field_20829').hide();
    }
}

function dataInAdmissionForm() {
    $('#field_20420').val($('#field_20810_1_1').val());
    if ($('#field_20810_1_1').val() === "MBA(Mumbai)") {
        $('#field_20829').val($('#sap_student_number1').val());
        $('#field_20828').val('Mumbai');
    } else if ($('#field_20810_1_1').val() === "MBA (Human Resources)") {
        $('#field_20829').val($('#sap_student_number2').val());
        $('#field_20828').val('Mumbai');
    } else if ($('#field_20810_1_1').val() === "MBA (Decision Sciences and Analytics)") {
        $('#field_20829').val($('#sap_student_number3').val());
        $('#field_20828').val('Mumbai');
    } else if ($('#field_20810_1_1').val() === "MBA Pharmaceutical Management(Mumbai)") {
        $('#field_20829').val($('#sap_student_number4').val());
        $('#field_20828').val('Mumbai');
    } else {
        if (["MBA Business Analytics (Mumbai)", "MBA Bangalore", "MBA Digital Transformation (Mumbai)", "MBA Indore", "MBA Jadcherla (Hyderabad)", "MBA Navi Mumbai"].indexOf($('#field_20810_1_1').val()) !== -1) {
            console.log('I am in else under if');
            $('#field_20829').val($('#sap_student_number').val());
            $('#field_20810_1_1').val() === "MBA Bangalore" ? $('#field_20828').val('Bangalore') : console.log();
            $('#field_20810_1_1').val() === "MBA Indore" ? $('#field_20828').val('Indore') : console.log();
            $('#field_20810_1_1').val() === "MBA Jadcherla (Hyderabad)" ? $('#field_20828').val('Jadcherla (Hyderabad') : console.log();
            $('#field_20810_1_1').val() === "MBA Navi Mumbai" ? $('#field_20828').val('Navi Mumbai') : console.log();
            $('#field_20810_1_1').val() === "MBA Digital Transformation (Mumbai)" ? $('#field_20828').val('Mumbai') : console.log();
            $('#field_20810_1_1').val() === "MBA Business Analytics (Mumbai)" ? $('#field_20828').val('Mumbai') : console.log();
        }
    }
}
var newProgramName;
var previousProgramNam;

function confirmationMessage() {
    newProgramName = $('#field_20810_1_1').val();
    sessionStorage.setItem('newProgramNameLocal', $('#field_20810_1_1').val());
}

function onProgramChange() {
    $('#field_20810_1_2').val('');
}
//amount whoich is fixed for these programs that's why declared as a global object
var programFees = {
    "MBA(Mumbai)": "1195000",
    "MBA (Human Resources)": "1195000",
    "MBA (Decision Sciences and Analytics)": "1202000",
    "MBA Pharmaceutical Management(Mumbai)": "700000",
    "MBA Business Analytics (Mumbai)": "902000",
    "MBA Bangalore": "902000",
    "MBA Digital Transformation (Mumbai)": "852000",
    "MBA Indore": "750000",
    "MBA Jadcherla (Hyderabad)": "902000",
    "MBA Navi Mumbai": "902000"
}

function getFeesDataFromJsVars() {
    var paidFeesData = 0;
    if (jsVars.fee_type_id_9 !== undefined) {
        paidFeesData = jsVars.fee_type_id_9;
        $('#field_20813').val(paidFeesData);
        console.log(paidFeesData);
    }
}

function setDiffrentialFees() {
    var diffrentialAmount = 0;
    var totalPaidAmount = 0;
    var lastSavedPayment = $('#field_20811').val();
    var splittedAmount = [];
    $('#field_20902').val('').trigger('chosen:updated');
    $('#field_20914').val('').trigger('chosen:updated');
    if (lastSavedPayment) {
        if (lastSavedPayment.indexOf("->") !== -1) {
            splittedAmount.push(lastSavedPayment.split("->"));
        } else {
            splittedAmount.push([lastSavedPayment]);
        }
    }
    //if first payment done send diffrential amount
    if ($('#field_20813').val() !== "" && Number($('#field_20813').val()) > 0) {
        if (newProgramName !== undefined && newProgramName !== "") {
            let lastIndex = splittedAmount[0].length - 1;
            diffrentialAmount = parseInt(programFees[newProgramName]) - parseInt(splittedAmount[0][lastIndex]);
            console.log(diffrentialAmount);
        }
    }
    if (diffrentialAmount > 0) {
        $('#field_20902').val(diffrentialAmount).trigger('chosen:updated');
        $('#field_20914').val('Yes').trigger('chosen:updated');
    }
    //saving total need to paid / or paid amount -
    splittedAmount.forEach(function (getAmount) {
        getAmount.forEach(function (amount) {
            totalPaidAmount += parseInt(amount);
        });
    })
    if (totalPaidAmount > 0) {
        $('#field_20903').val(totalPaidAmount);
    }
}

function tableShoWhide() {
    var arrayId = ['pref1OfferStatus', 'pref2OfferStatus', 'pref3OfferStatus', 'pref4OfferStatus', 'pref5_Off_OfferStatus', 'pref6_Off_OfferStatus', 'pref7_Off_OfferStatus', 'pref8_Off_OfferStatus', 'pref9_Off_OfferStatus', 'pref10_Off_OfferStatus'];
    var arrayIdRowMapping = {
        "pref1OfferStatus": 'row2',
        "pref2OfferStatus": "row3",
        "pref3OfferStatus": "row4",
        "pref4OfferStatus": "row5",
        "pref5_Off_OfferStatus": "row6",
        "pref6_Off_OfferStatus": "row7",
        "pref7_Off_OfferStatus": "row8",
        "pref8_Off_OfferStatus": "row9",
        "pref9_Off_OfferStatus": "row10",
        "pref10_Off_OfferStatus": "row11"
    }
    arrayId.forEach(function (ids) {
        if ($('#' + ids).text() === "") {
            $('#' + arrayIdRowMapping[ids]).hide();
        }
    });
}

function dataPopulate() {
    $('#field_21045').val('').trigger('chosen:updated');
    var selectedData = $('#field_20810_1_1').val();
    if (selectedData !== "" && selectedData !== undefined) {
        $('#field_21045').val(selectedData).trigger('chosen:updated');
    }
}

function aknwoledmentMapping() {
    var selectedProgram = $('#field_20810_1_1').val();
    if (selectedProgram !== "" && selectedProgram !== undefined) {
        if (selectedProgram === "MBA(Mumbai)") {
            $('#field_21166').val() === "" ? $('#field_21166').val($('#sap_notification_number1').val()) : console.log();
            $('#field_21167').val() === "" ? $('#field_21167').val($('#enrolled_field33').val()) : console.log();
            $('#field_21168').val() === "" ? $('#field_21168').val($('#sap_student_number1').val()) : console.log();
        }
        if (selectedProgram === "MBA (Human Resources)") {
            $('#field_21166').val() === "" ? $('#field_21166').val($('#sap_notification_number2').val()) : console.log();
            $('#field_21167').val() === "" ? $('#field_21167').val($('#enrolled_field38').val()) : console.log();
            $('#field_21168').val() === "" ? $('#field_21168').val($('#sap_student_number2').val()) : console.log();
        }
        if (selectedProgram === "MBA (Decision Sciences and Analytics)") {
            $('#field_21166').val() === "" ? $('#field_21166').val($('#sap_notification_number3').val()) : console.log();
            $('#field_21167').val() === "" ? $('#field_21167').val($('#enrolled_field43').val()) : console.log();
            $('#field_21168').val() === "" ? $('#field_21168').val($('#sap_student_number3').val()) : console.log();
        }
        //pharma case
        if (selectedProgram === "MBA Pharmaceutical Management(Mumbai)") {
            $('#field_21166').val() === "" ? $('#field_21166').val($('#sap_notification_number4').val()) : console.log();
            $('#field_21167').val() === "" ? $('#field_21167').val($('#enrolled_field48').val()) : console.log();
            $('#field_21168').val() === "" ? $('#field_21168').val($('#sap_student_number4').val()) : console.log();
        }
        //Handling of offCampus Data in Aknowledment reciept based on preference status
        var offCampusField = ["field_22195;;;pref1", "field_22196;;;pref2", "field_22197;;;pref3", "field_22198;;;pref4", "field_22199;;;pref5", "field_22200;;;pref6"];
        var offCampusSequence = "";
        var prefWiseMapping = {
            "pref1": "enrolled_field3;;;meritNumberPreference1",
            "pref2": "enrolled_field8;;;meritNumberPreference2",
            "pref3": "enrolled_field13;;;meritNumberPreference3",
            "pref4": "enrolled_field18;;;meritNumberPreference4",
            "pref5": "enrolled_field23;;;meritNumberPreference5",
            "pref6": "enrolled_field28;;;meritNumberPreference6"
        }
        offCampusField.forEach(function (offId) {
            if ($('#' + offId.split(";;;")[0]).val() === selectedProgram) {
                offCampusSequence = offId.split(";;;")[1];
            }
        });
        if (offCampusSequence !== "") {
            $('#field_21167').val() === "" ? $('#field_21167').val($('#' + prefWiseMapping[offCampusSequence].split(";;;")[0]).val()) : console.log();
            $('#field_21166').val() === "" ? $('#field_21166').val($('#sap_notification_number').val()) : console.log();
            $('#field_21168').val() === "" ? $('#field_21168').val($('#sap_student_number').val()) : console.log();

        }
        //to update the data in offer at runtime once the candidate has changed their preferences in to the offer letter
        if (offCampusSequence !== "") {
            $('#field_22481').val($('#' + prefWiseMapping[offCampusSequence].split(";;;")[0]).val());
            $('#field_22480').val($('#sap_notification_number').val());
            $('#field_22482').val($('#sap_student_number').val());
        }
    }
}

function removeRequiredFromResubmission() {
    var mandatefield = ['field_20808', 'field_20422'];
    if ($('.reSubmitLogicForm').length === 0) {
        mandatefield.forEach(function (getId) {
            addRequired(getId);
        });
    }
    if ($('.reSubmitLogicForm').length === 1 && ($('#page_wise_percent_5').length === 1 || $('.page_wise_percent_mobile_5').length === 1)) {
        addRequired("field_19671");
    }
}

$(document).ready(function () {
    removeRequiredFromResubmission();
    previousProgramName = $('#field_20810_1_1').val();
    sessionStorage.setItem('previousProgramNameLocal', $('#field_20810_1_1').val());
    getFeesDataFromJsVars();
    statusDataMappingDisplay();
    displaySelectedPreference();
    disAbledOptionIfSelectedAndSave();
    toRemoveExtraSpace();
    dataInAdmissionForm();
    //setDiffrentialFees();
    tableShoWhide();
    //hiding the first cell of table
    $('#tr_field_20810_0').children('td:first').hide();
    $('#tr_field_20810_1').children('td:first').hide();
    //removing preview button
    $('h3:contains(Accepted Program Details)').length ? $('a:contains(Preview)').remove() : console.log();
});
$('#field_20810_1_1').change(function () {
    confirmationMessage();
    onProgramChange();
    setDiffrentialFees();
    dataPopulate();
    aknwoledmentMapping();
});
$('#next_btn:contains(Accept and Submit)').click(function () {
    for (let i = 200; i <= 1500; i++) {
        setTimeout(() => {
            if ((previousProgramName !== undefined && newProgramName !== undefined) && previousProgramName !== "" && newProgramName !== "") {
                if (previousProgramName !== newProgramName) {
                    $('#ConfirmMsgBody p').html('If you accept the offer, you will be deregistered from<br>' + previousProgramName + ' program and the fees paid will be adjusted against ' + newProgramName + ' program.<br>Are you sure you want to go ahead?');
                } else {
                    $('#ConfirmMsgBody p').html('Are you sure you want to go ahead?');
                }
            }
        }, i);
    }
});

// Code for Annexures
$("#annexbystudent").after(`<div class="headinst"> <ul class="nav navbar-right" style="margin-top:-25px;float:right!important;"> <li><a aria-controls="instructions" aria-expanded="true" class="collapse-link fa fa-angle-down" data-toggle="collapse" href="#collapseTermsandConditions1"></a></li> </ul> </div> <div aria-expanded="true" class="collapse" id="collapseTermsandConditions1"> <div style="margin:15px;"> <table align="center" border="0" cellpadding="6" cellspacing="0" style="font-size: 14px;font-family:Helvetica, Arial, sans-serif, Verdana;line-height: 26px;margin-bottom: 15px;margin-top: 10px;border: 2px solid #000;padding: 15px;" width="800"> <tbody> <tr> <td colspan="4" style="font-weight: bold;font-size:18px;text-align: center;padding-bottom: 15px;"> ANNEXURE I<br> AFFIDAVIT BY THE STUDENT</td> </tr> <tr> <td colspan="4">1. I, <span id="name1"> </span> S/o, D/o Mr./Mrs./Ms. <span id="fathername"> </span> Having been admitted to NMIMS University , have Received a copy of the UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009, (hereinafter called the “Regulations”) carefully read and fully understood the provisions contained in the said Regulations.</td> </tr> <tr> <td colspan="4">2. I have, in particular, perused clause 3 of the Regulations and am aware as to what constitutes ragging.</td> </tr> <tr> <td colspan="4">3. I have also, in particular, perused clause 7 and clause 9.1 of the Regulations and an fully aware of the penal and administrative action that is liable to be taken against me in case I am found guilty of abetting ragging, actively or passively, or being part of a conspiracy to promote ragging.</td> </tr> <tr> <td colspan="4">4. I hereby solemnly aver and undertake that :- <br> a) I will not indulge in any behaviour or act that may be constituted as ragging under clause 3 of the Regulations.<br> b) I will not indulge in any behaviour or act that may be constituted as ragging under clause 3 of the Regulations.</td> </tr> <tr> <td colspan="4">5. I hereby affirm that, if found guilty of ragging, I am liable for punishment according to clause 9.1 of the Regulations, without prejudice to any other criminal action that may be taken against me under any penal law or any law for the time being in force.</td> </tr> <tr> <td colspan="4">6. I hereby declare that I have not been expelled or debarred from admission in any institution, in the country on account of being found guilty, of abetting or being part of conspiracy to promote, ragging; and further affirm that, in case the declaration is found to be untrue, I am aware that my admission is liable to be cancelled.</td> </tr> <tr> <td colspan="4">Declared this on <span id="CurrentDate"> </span></td> </tr> <tr> <td colspan="4" style="text-align: center;"><strong>VERIFICATION</strong></td> </tr> <tr> <td colspan="4">Verified that the contents of this affidavit are true to the best of my knowledge and no part of the affidavit is false and nothing has been concealed or misstated therein.</td> </tr> <tr> <td colspan="4">Verified at <span id="CurrentPlace"> </span> on this <span id="CurrentDate1"> </span> </td> </tr> <tr> <td colspan="4">Solemnly affirmed and signed in my presence on this <span id="CurrentDate2"> </span> after reading the contents of this affidavit</td> </tr> </tbody> </table> </div> </div>`);

$("#annexbyparent").after(`<div class="headinst2"> <ul class="nav navbar-right" style="margin-top:-25px;float:right!important;"> <li><a aria-controls="instructions" aria-expanded="true" class="collapse-link fa fa-angle-down" data-toggle="collapse" href="#collapseTermsandConditions2"></a></li> </ul> </div> <div aria-expanded="true" class="collapse" id="collapseTermsandConditions2"> <div style="margin:15px;"> <table align="center" border="0" cellpadding="6" cellspacing="0" style="font-size: 14px;font-family:Helvetica, Arial, sans-serif, Verdana;line-height: 26px;margin-bottom: 15px;margin-top: 10px;border: 2px solid #000;padding: 15px;" width="800"> <tbody> <tr> <td colspan="4" style="font-weight: bold;font-size:18px;text-align: center;padding-bottom: 15px;"> ANNEXURE II<br> AFFIDAVIT BY THE PARENT/GUARDIAN</td> </tr> <tr> <td colspan="4">1. I, Mr./Mrs/Ms. <span id="fathername2"> </span> Father/mother/guardian of <span id="name2"> </span> having been admitted to NMIMS University , have received a copy of the UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009, (thereinafter called the “Regulations”), carefully react and fully understood the provisions contained in the said Regulations.</td> </tr> <tr> <td colspan="4">2. I have, in particular, perused clause 3 of the Regulations and am aware as to what constitutes ragging.</td> </tr> <tr> <td colspan="4">3. I have also, in particular, perused clause 7 and clause 9.1 of the Regulations and an fully aware of the penal and administrative action that is liable to be taken against my ward in case he/she is found guilty of abetting ragging, actively or passively, or being part of a conspiracy to promote ragging.</td> </tr> <tr> <td colspan="4">4. I hereby solemnly aver and undertake that :- <br> a) My ward will not indulge in any behaviour or act that may be constituted as ragging Under clause 3 of the Regulations.<br> b) My ward will not participate in or abet or propagate through any act of commission or omission that may be constituted as ragging under clause 3 of the Regulations.</td> </tr> <tr> <td colspan="4">5. I hereby affirm that, if found guilty of ragging, my ward is liable for punishment according to clause 9.1 of the Regulations, without prejudice to any other criminal action that may be taken against me under any penal law or any law for the time being in force. </td> </tr> <tr> <td colspan="4"> <span id="AnnexPoint6"></span> </td> </tr> <tr> <td colspan="4">Declared this <span id="CurrentDate3"> </span></td> </tr> <tr> <td colspan="4" style="text-align: center;"><strong>VERIFICATION</strong></td> </tr> <tr> <td colspan="4">Verified that the contents of this affidavit are true to the best of my knowledge and no part of the affidavit is false and nothing has been concealed or misstated therein.</td> </tr> <tr> <td colspan="4">Verified at <span id="CurrentPlace1"> </span> on <span id="CurrentDate4"> </span> </tr> <tr> <td colspan="4">Solemnly affirmed and signed in my presence on this <span id="CurrentDate5"> </span> after reading the contents of this affidavit</td> </tr> </tbody> </table> </div> </div>`);

// function for Change Annexures II Line 6 (field_26788)--> Field For store line 6 new value
$('#field_20810_1_1').change(AnnexChange());

function AnnexChange() {
    if ($('#field_20810_1_1').val() == 'MBA Pharmaceutical Management(Mumbai)') {
        $('#AnnexPoint6').text('6. I hereby declare that my ward has not been expelled or debarred from admission in any institution, in the country on account of being found guilty, of abetting or being part of conspiracy to promote, ragging; and further affirm that, in case the declaration is found to be untrue, I am aware that my admission is liable to be cancelled.');
        $('#field_26788').val('6. I hereby declare that my ward has not been expelled or debarred from admission in any institution, in the country on account of being found guilty, of abetting or being part of conspiracy to promote, ragging; and further affirm that, in case the declaration is found to be untrue, I am aware that my admission is liable to be cancelled.');
    } else {
        $('#AnnexPoint6').text('6. I hereby affirm that, if found guilty of ragging, my ward is liable for punishment according to clause 9.1 of the Regulations, without prejudice to any other criminal action that may be taken against me under any penal law or any law for the time being in force.');
        $('#field_26788').val('6. I hereby affirm that, if found guilty of ragging, my ward is liable for punishment according to clause 9.1 of the Regulations, without prejudice to any other criminal action that may be taken against me under any penal law or any law for the time being in force.')
    }
}

$("#name1").length ? $("#name1").text($("#first_name").val() + " " + $("#last_name").val() + " ") : "";
$("#name2").length ? $("#name2").text($("#first_name").val() + " " + $("#last_name").val() + " ") : "";

$("#fathername").length ? $("#fathername").text($("#father_first_name").val() + " ") : "";
$("#fathername2").length ? $("#fathername2").text($("#father_first_name").val() + " ") : "";

$("#CurrentDate").length ? $("#CurrentDate").text($('#field_20913').val() + " ") : "";
$("#CurrentDate1").length ? $("#CurrentDate1").text($('#field_20913').val() + " ") : "";
$("#CurrentDate2").length ? $("#CurrentDate2").text($('#field_20913').val() + " ") : "";
$("#CurrentDate3").length ? $("#CurrentDate3").text($('#field_20913').val() + " ") : "";
$("#CurrentDate4").length ? $("#CurrentDate4").text($('#field_20913').val() + " ") : "";
$("#CurrentDate5").length ? $("#CurrentDate5").text($('#field_20913').val() + " ") : "";
$("#CurrentPlace").length ? $("#CurrentPlace").text($('#field_20422').val() + " ") : "";
$("#CurrentPlace1").length ? $("#CurrentPlace1").text($('#field_20422').val() + " ") : "";

function fieldsShowOnBackend() {
    offCampusField.forEach(function (campusId, index) {
        $('.' + campusId + ' > div > div').show();
        $('.' + campusId).css('pointer-events', '');
        if (index > 1) {
            console.log(index);
            if ($('.course_one:visible').length === 0) {
                $('.' + 'course_one').show();
            }
        }
    });
}
if (location.pathname.search("preview") !== -1) {
    $(document).ajaxStop(function () {
        fieldsShowOnBackend();
    });
};
//function written by neha for dyanamic dates in annexures and refund rules
function undertaking_date() {
    var idsArray = ['CourseHeading', 'exam_details_100', 'Refund1', 'exam_details_101', 'Refund2', 'exam_details_102', 'Refund3', 'exam_details_103', 'Refund4', 'exam_details_104', 'Refund5', 'exam_details_105'];
    $('#' + idsArray.join(",#")).val('');
    $('#' + idsArray.join(",#")).text('');
    if ($('#field_20810_1_1').val() == 'MBA(Mumbai)' || $('#field_20810_1_1').val() == 'MBA (Human Resources)' || $('#field_20810_1_1').val() == 'MBA (Decision Sciences and Analytics)' || $('#field_20810_1_1').val() == 'MBA Pharmaceutical Management(Mumbai)') {
        $('#CourseHeading').text('MBA(Mumbai), MBA(HR), MBA(DSA), MBA PHARMA');
        $('#exam_details_100').val('MBA(Mumbai), MBA(HR), MBA(DSA), MBA PHARMA');
        $('#Refund1').text('6 June 2022');
        $('#exam_details_101').val('6 June 2022');
        $('#Refund2').text('7 June 2022 to 22 June 2022');
        $('#exam_details_102').val('7 June 2022 to 22 June 2022');
        $('#Refund3').text('23 June 2022 to 7 July 2022');
        $('#exam_details_103').val('23 June 2022 to 7 July 2022');
        $('#Refund4').text('8 July to 22 July 2022');
        $('#exam_details_104').val('8 July to 22 July 2022');
        $('#Refund5').text('23 July 2022');
        $('#exam_details_105').val('23 July 2022');
    } else {
        if (["MBA Business Analytics (Mumbai)", "MBA Bangalore", "MBA Digital Transformation (Mumbai)", "MBA Indore", "MBA Jadcherla (Hyderabad)", "MBA Navi Mumbai"].indexOf($('#field_20810_1_1').val()) !== -1) {
            $('#CourseHeading').text('MBA Business Analytics (Mumbai), MBA Bangalore, MBA Digital Transformation (Mumbai), MBA Indore, MBA Jadcherla (Hyderabad), MBA Navi Mumbai');
            $('#exam_details_100').val('MBA Business Analytics (Mumbai), MBA Bangalore, MBA Digital Transformation (Mumbai), MBA Indore, MBA Jadcherla (Hyderabad), MBA Navi Mumbai');
            $('#Refund1').text('9 June 2022');
            $('#exam_details_101').val('9 June 2022');
            $('#Refund2').text('10 June 2022 to 25 June 2022');
            $('#exam_details_102').val('10 June 2022 to 25 June 2022');
            $('#Refund3').text('26 June 2022 to 10 July 2022');
            $('#exam_details_103').val('26 June 2022 to 10 July 2022');
            $('#Refund4').text('11 July to 25 July 2022');
            $('#exam_details_104').val('11 July to 25 July 2022');
            $('#Refund5').text('26 July 2022');
            $('#exam_details_105').val('26 July 2022');
        } else {
            if ($('#field_20810_1_1').val() !== "") {
                $('#CourseHeading').text('MBA(Mumbai), MBA(HR), MBA(DSA)');
                $('#exam_details_100').val('MBA(Mumbai), MBA(HR), MBA(DSA)');
                $('#Refund1').text('6 June 2022');
                $('#exam_details_101').val('6 June 2022');
                $('#Refund2').text('7 June 2022 to 22 June 2022');
                $('#exam_details_102').val('7 June 2022 to 22 June 2022');
                $('#Refund3').text('23 June 2022 to 7 July 2022');
                $('#exam_details_103').val('23 June 2022 to 7 July 2022');
                $('#Refund4').text('8 July to 22 July 2022');
                $('#exam_details_104').val('8 July to 22 July 2022');
                $('#Refund5').text('23 July 2022');
                $('#exam_details_105').val('23 July 2022');
            }
        }
    }
}
$('#field_20810_1_1').change(function () {
    undertaking_date();
})
$(document).ready(function () {
    undertaking_date();
});

function changeInDeclarationDate() {
    var currentDate = new Date();
    var getOnlyDate = currentDate.getDate();
    var getOnlyMonth = currentDate.getMonth() + 1;
    getOnlyMonth = getOnlyMonth < 10 ? '0' + getOnlyMonth : getOnlyMonth;
    var getOnlyYear = currentDate.getFullYear();
    var fullDate = getOnlyDate + '/' + getOnlyMonth + '/' + getOnlyYear;
    $('#field_20913').val(fullDate);
}
$('#field_20810_1_1').change(function () {
    changeInDeclarationDate();
});

function transferFormHandling() {
    //checking all the disabled field in to the dom and making them disabled
    $('.form_build').find('div').find('input').each(function () {
        if ($(this).is(':disabled')) {
            $(this).parent().hide();
            $(this).hide();
        }
    });
    var notRequiredIds = ['npf-form-instruction', 'field_2', 'field_3', 'mobile_no', 'field_632', 'blank_space', 'field_635', 'field_1328', 'field_1926', 'preview-btn', 'npfFormStatus', 'panel-heading', 'step'];
    notRequiredIds.forEach(function (getId) {
        $('#' + getId).hide();
        $('.' + getId).hide();
    });
    //to change the button name
    $('#field_26000:disabled').length === 0 ? $('#next_btn').text(
        'Submit Request'
    ) : console.log('No Transfer form found');
    $('.counter').show();
}

function displayTransferInformation() {
    var applicantInfoObj = {
        "exam_details_2": "application_No",
        "mobile_no": "applicant_mobile",
        "email": "applicant_email",
        "sap_notification_number": "notificationNo",
        "field_7540": "phaseData"
    }
    $('#student_name').text(
        $('#first_name').val() + ' ' + $('#middle_name').val() + ' ' +
        $('#last_name').val()
    );
    $('#meritNo').text(globalMeritNumberForOffCampus);
    $('#selectedProgram').text(selectedWaitlistedProgram);
    $('#status').text(offerStatus);
    $('#merit_round').text(globalMeritRoundForOffCampus);
    $('#subcategory').text(globalSubCategory);
    $('#schoolName').text(globalSchoolName);
    $('#campus').text(globalCampusName);
    $('#Academic_Year').text("2022-24");


    var applicantInfoIDS = ["exam_details_2", "mobile_no", "email", "field_20419", "field_20828",
        "field_21166", "field_21167", "field_7540", "sap_notification_number", "exam_details_3"
    ];
    applicantInfoIDS.forEach(function (getApplicantData) {
        $('#' + applicantInfoObj[getApplicantData]).text($('#' + getApplicantData).val());
    });
    //handle the case of requested program if that is already selected
    var sapPreferenceId = ["field_22195", "field_22196", "field_22197", "field_22198", "field_22199", "field_22200"];
    var totalSapSentOption = ['Select'];
    sapPreferenceId.forEach(function (getSapData) {
        if ($('#' + getSapData).val() !== "" && $('#' + getSapData).val() !== undefined) {
            totalSapSentOption.push($('#' + getSapData).val());
        }
    });

    $('#field_26001 option:not(":eq(0)")').each(function ($dev, $devVal) {
        let localVal = $($devVal).val();
        if (selectedWaitlistedProgram === localVal) {
            $($devVal).remove();
            $('.chosen-select').trigger('chosen:updated');
        }
        if (totalSapSentOption.indexOf(localVal) === -1) {
            $($devVal).remove();
            $('.chosen-select').trigger('chosen:updated');
        }
    });
    if (selectedWaitlistedProgram === "MBA Business Analytics (Mumbai)") {
        $('#field_26000 option[value="' + 'Centre of Excellence in Analytics and Data Science' + '"]').remove();
        $('.chosen-select').trigger('chosen:updated');
    }
    //to make field mandatory on re-submission 
    var mandatoryFieldId = ["field_26000", "field_26001", "field_26002", "field_26003"];
    mandatoryFieldId.forEach(function (getMandate) {
        addRequired(getMandate);
    });
}

function showSchoolAndCampus() {
    $('#field_26001').val("");
    if ($('#field_26000').val() === "Centre of Excellence in Analytics and Data Science" && $('#field_26000').val() !== "") {
        $('#field_26001 option:not(":eq(0)")').attr('disabled', true).hide();
        $('#field_26001 option[value="MBA Business Analytics (Mumbai)"]').attr('disabled', false).show();
    } else {
        $('#field_26001 option:not(":eq(0)")').attr('disabled', false).show();
        $('#field_26001 option[value="MBA Business Analytics (Mumbai)"]').attr('disabled', true).prop('selected', false).hide();
    }
    $('.chosen-select').trigger('chosen:updated');
}

function showCampus() {
    var campusMpping = {
        "MBA Business Analytics (Mumbai)": "Mumbai",
        "MBA Bangalore": "Bangalore",
        "MBA Digital Transformation (Mumbai)": "Mumbai",
        "MBA Indore": "Indore",
        "MBA Jadcherla (Hyderabad)": "Jadcherla (Hyderabad)",
        "MBA Navi Mumbai": "Navi Mumbai"
    }
    var reqProgram = $('#field_26001').val();
    $('#field_26002 option:not(":eq(0)")').attr('disabled', true).hide();
    if (reqProgram) {
        $('#field_26002 option[value="' + campusMpping[reqProgram] + '"]').attr('disabled', false).show();
        $('#field_26002').val(campusMpping[reqProgram]);
    } else {
        $('#field_26002 option:not(":eq(0)")').attr('disabled', true).hide();
        $('#field_26002').val("");
    }
    $('.chosen-select').trigger('chosen:updated');
}
if ($('.reSubmitLogicForm').length == 1 && ($('#page_wise_percent_1').length || $('.page_wise_percent_mobile_1').length)) {
    $('#field_26000').change(function () {
        showSchoolAndCampus();
    });
    $('#field_26001').change(function () {
        showCampus();
    });
}
$(document).ready(function () {
    if ($('.reSubmitLogicForm').length == 1 && ($('#page_wise_percent_1').length || $('.page_wise_percent_mobile_1').length)) {
        transferFormHandling();
        displayTransferInformation();
        showSchoolAndCampus();
    }
    //transfer form data capture
    if ($('.reSubmitLogicForm').length == 1 && ($('#page_wise_percent_1').length === 1 || $('.page_wise_percent_mobile_1').length === 1)) {
        $('#field_26004').val('Yes').trigger('chosen:updated');
        var currentDate = new Date();
        var getOnlyDate = currentDate.getDate();
        var getOnlyMonth = currentDate.getMonth() + 1;
        getOnlyMonth = getOnlyMonth < 10 ? '0' + getOnlyMonth : getOnlyMonth;
        var getOnlyYear = currentDate.getFullYear();
        var fullDate = getOnlyDate + '/' + getOnlyMonth + '/' + getOnlyYear;
        $('#field_26038').val(fullDate);
    }
});

function updateApplicationDetails() {
    //removing old disabled fields here
    $('.form_build').find('div').find('input').each(function () {
        if ($(this).is(':disabled')) {
            $(this).parent().hide();
            $(this).hide();
        }
    });
    var restRemovblefields = ["field_20117", "field_20799", "field_20809", "field_20810", "field_20831", "field_19670"];
    restRemovblefields.forEach(function (getId) {
        $('.' + getId).hide();
    });
    $('p[class="inner_paragraph"]:contains(Admission Form)').text('Update Details');
    var mandatoryFields = ["field_11613"];
    mandatoryFields.forEach(function (getMandatory) {
        addRequired(getMandatory);
    });

}

function pendingDocuments() {
    if ($('#field_20810_1_1:disabled').length === 1) {
        $('.field_9958 input,select').each(function (i, e) {
            if ($(this).val() !== "" && $(this).val() !== undefined) {
                $(this).css('pointer-events', 'none');
            }
        });
    } else {
        if ($('#field_20810_1_1:disabled').length === 0) {
            $('.field_11613,.field_29516,.field_9958,.field_9963,.field_9969,.field_9970,.field_30181').hide();
        }
    }
    var documentsName = [];
    let uploadedDoc = 0;
    var documentsId = [];
    $('input[type="file"]').each(function (index, Data) {
        if ($('#' + $(this).attr("id") + ':disabled').length === 0) {
            documentsId.push($(this).attr("id"));
        }
    });
    var pendingDocuments = documentsId.length;
    documentsId.forEach(function (getDoc) {
        if ($('#' + getDoc).attr("data-file_status") !== undefined) {
            uploadedDoc++;
        } else {
            documentsName.push($('.' + getDoc + ' label').text().trim());
        }
    });

    // Code For Find Pending Upload Field ****
    var eligibleDoc = [];

    if ($('#field_9944').val() !== '12956;;;Maharastra State Board Of Secondary And Higher Secondary Education' && $('#field_9945').val() !== '166806;;;Maharashtra') {
        eligibleDoc.push($('.field_19362 label').text().trim()); // Map the migration doc upload
    }
    if ($('#differently_abled').val() !== 'No') {
        eligibleDoc.push($('.field_19365 label').text().trim()); // Map the medical fitness doc upload
        eligibleDoc.push($('.field_19367 label').text().trim()); // Map the disability doc upload
    }
    if (CurrentYear - PG_Year !== 0) {
        eligibleDoc.push($('.field_19365 label').text().trim()); // Map the gap Doc upload
    }

    documentsName.length > 0 ? $('#field_29520').val(documentsName.join(",")) : $('#field_29520').val("");
    $('#field_29519').val(parseInt(pendingDocuments) - parseInt(uploadedDoc));
}

$(document).ready(function () {
    if ($('.page_wise_percent_5').length === 1 && $('.reSubmitLogicForm').length === 1 && $('#field_20810_1_1:disabled').length === 1) {
        updateApplicationDetails();
        pendingDocuments();
    }
    // to populated the last updated date in upload
    if ($('.page_wise_percent_5').length === 1 && $('.reSubmitLogicForm').length === 1 && $('#field_20810_1_1:disabled').length === 1) {
        var currentDateNew = new Date();
        var getOnlyDateNew = currentDateNew.getDate();
        getOnlyDateNew = getOnlyDateNew < 10 ? '0' + getOnlyDateNew : getOnlyDateNew;
        var getOnlyMonthNew = currentDateNew.getMonth() + 1;
        getOnlyMonthNew = getOnlyMonthNew < 10 ? '0' + getOnlyMonthNew : getOnlyMonthNew;
        var getOnlyYearNew = currentDateNew.getFullYear();
        var myfullDate = getOnlyDateNew + '/' + getOnlyMonthNew + '/' + getOnlyYearNew;
        $('#field_29521').val(myfullDate);
    }
});
$(document).ajaxStop(function () {
    pendingDocuments();
});

/*<-------------------------------- Gap Found -------------------------------->*/

var PG_Year = 0;
var CurrentYear = 0;
PG_Year = $('#field_9970_1_4').val();
CurrentYear = new Date().getFullYear();