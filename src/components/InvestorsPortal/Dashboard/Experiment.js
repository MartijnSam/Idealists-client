import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Textbox,
  Textarea,
  Radiobox,
  Checkbox,
  Select
} from "react-inputs-validation";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import "./styles.css";

const JOB_OPTIONS_LIST = [
  { id: "engineer", name: "engineer" },
  { id: "teacher", name: "teacher" },
  { id: "student", name: "student" }
];
const COUNTRY_OPTIONS_LIST = [
  { id: "", name: "Please Select a country" },
  { name: "Afghanistan", id: "AF" },
  { name: "Åland Islands", id: "AX" },
  { name: "Albania", id: "AL" },
  { name: "Algeria", id: "DZ" },
  { name: "American Samoa", id: "AS" },
  { name: "AndorrA", id: "AD" },
  { name: "Angola", id: "AO" },
  { name: "Anguilla", id: "AI" },
  { name: "Antarctica", id: "AQ" },
  { name: "Antigua and Barbuda", id: "AG" },
  { name: "Argentina", id: "AR" },
  { name: "Armenia", id: "AM" },
  { name: "Aruba", id: "AW" },
  { name: "Australia", id: "AU" },
  { name: "Austria", id: "AT" },
  { name: "Azerbaijan", id: "AZ" },
  { name: "Bahamas", id: "BS" },
  { name: "Bahrain", id: "BH" },
  { name: "Bangladesh", id: "BD" },
  { name: "Barbados", id: "BB" },
  { name: "Belarus", id: "BY" },
  { name: "Belgium", id: "BE" },
  { name: "Belize", id: "BZ" },
  { name: "Benin", id: "BJ" },
  { name: "Bermuda", id: "BM" },
  { name: "Bhutan", id: "BT" },
  { name: "Bolivia", id: "BO" },
  { name: "Bosnia and Herzegovina", id: "BA" },
  { name: "Botswana", id: "BW" },
  { name: "Bouvet Island", id: "BV" },
  { name: "Brazil", id: "BR" },
  { name: "British Indian Ocean Territory", id: "IO" },
  { name: "Brunei Darussalam", id: "BN" },
  { name: "Bulgaria", id: "BG" },
  { name: "Burkina Faso", id: "BF" },
  { name: "Burundi", id: "BI" },
  { name: "Cambodia", id: "KH" },
  { name: "Cameroon", id: "CM" },
  { name: "Canada", id: "CA" },
  { name: "Cape Verde", id: "CV" },
  { name: "Cayman Islands", id: "KY" },
  { name: "Central African Republic", id: "CF" },
  { name: "Chad", id: "TD" },
  { name: "Chile", id: "CL" },
  { name: "China", id: "CN" },
  { name: "Christmas Island", id: "CX" },
  { name: "Cocos (Keeling) Islands", id: "CC" },
  { name: "Colombia", id: "CO" },
  { name: "Comoros", id: "KM" },
  { name: "Congo", id: "CG" },
  { name: "Congo, The Democratic Republic of the", id: "CD" },
  { name: "Cook Islands", id: "CK" },
  { name: "Costa Rica", id: "CR" },
  { name: "Croatia", id: "HR" },
  { name: "Cuba", id: "CU" },
  { name: "Cyprus", id: "CY" },
  { name: "Czech Republic", id: "CZ" },
  { name: "Denmark", id: "DK" },
  { name: "Djibouti", id: "DJ" },
  { name: "Dominica", id: "DM" },
  { name: "Dominican Republic", id: "DO" },
  { name: "Ecuador", id: "EC" },
  { name: "Egypt", id: "EG" },
  { name: "El Salvador", id: "SV" },
  { name: "Equatorial Guinea", id: "GQ" },
  { name: "Eritrea", id: "ER" },
  { name: "Estonia", id: "EE" },
  { name: "Ethiopia", id: "ET" },
  { name: "Falkland Islands (Malvinas)", id: "FK" },
  { name: "Faroe Islands", id: "FO" },
  { name: "Fiji", id: "FJ" },
  { name: "Finland", id: "FI" },
  { name: "France", id: "FR" },
  { name: "French Guiana", id: "GF" },
  { name: "French Polynesia", id: "PF" },
  { name: "French Southern Territories", id: "TF" },
  { name: "Gabon", id: "GA" },
  { name: "Gambia", id: "GM" },
  { name: "Georgia", id: "GE" },
  { name: "Germany", id: "DE" },
  { name: "Ghana", id: "GH" },
  { name: "Gibraltar", id: "GI" },
  { name: "Greece", id: "GR" },
  { name: "Greenland", id: "GL" },
  { name: "Grenada", id: "GD" },
  { name: "Guadeloupe", id: "GP" },
  { name: "Guam", id: "GU" },
  { name: "Guatemala", id: "GT" },
  { name: "Guernsey", id: "GG" },
  { name: "Guinea", id: "GN" },
  { name: "Guinea-Bissau", id: "GW" },
  { name: "Guyana", id: "GY" },
  { name: "Haiti", id: "HT" },
  { name: "Heard Island and Mcdonald Islands", id: "HM" },
  { name: "Holy See (Vatican City State)", id: "VA" },
  { name: "Honduras", id: "HN" },
  { name: "Hong Kong, SAR of China", id: "HK" },
  { name: "Hungary", id: "HU" },
  { name: "Iceland", id: "IS" },
  { name: "India", id: "IN" },
  { name: "Indonesia", id: "ID" },
  { name: "Iran, Islamic Republic Of", id: "IR" },
  { name: "Iraq", id: "IQ" },
  { name: "Ireland", id: "IE" },
  { name: "Isle of Man", id: "IM" },
  { name: "Israel", id: "IL" },
  { name: "Italy", id: "IT" },
  { name: "Jamaica", id: "JM" },
  { name: "Japan", id: "JP" },
  { name: "Jersey", id: "JE" },
  { name: "Jordan", id: "JO" },
  { name: "Kazakhstan", id: "KZ" },
  { name: "Kenya", id: "KE" },
  { name: "Kiribati", id: "KI" },
  { name: "Korea, Republic of", id: "KR" },
  { name: "Kuwait", id: "KW" },
  { name: "Kyrgyzstan", id: "KG" },
  { name: "Latvia", id: "LV" },
  { name: "Lebanon", id: "LB" },
  { name: "Lesotho", id: "LS" },
  { name: "Liberia", id: "LR" },
  { name: "Libyan Arab Jamahiriya", id: "LY" },
  { name: "Liechtenstein", id: "LI" },
  { name: "Lithuania", id: "LT" },
  { name: "Luxembourg", id: "LU" },
  { name: "Macao, SAR of China", id: "MO" },
  { name: "Macedonia, The Former Yugoslav Republic of", id: "MK" },
  { name: "Madagascar", id: "MG" },
  { name: "Malawi", id: "MW" },
  { name: "Malaysia", id: "MY" },
  { name: "Maldives", id: "MV" },
  { name: "Mali", id: "ML" },
  { name: "Malta", id: "MT" },
  { name: "Marshall Islands", id: "MH" },
  { name: "Martinique", id: "MQ" },
  { name: "Mauritania", id: "MR" },
  { name: "Mauritius", id: "MU" },
  { name: "Mayotte", id: "YT" },
  { name: "Mexico", id: "MX" },
  { name: "Micronesia, Federated States of", id: "FM" },
  { name: "Moldova, Republic of", id: "MD" },
  { name: "Monaco", id: "MC" },
  { name: "Mongolia", id: "MN" },
  { name: "Montserrat", id: "MS" },
  { name: "Morocco", id: "MA" },
  { name: "Mozambique", id: "MZ" },
  { name: "Myanmar", id: "MM" },
  { name: "Namibia", id: "NA" },
  { name: "Nauru", id: "NR" },
  { name: "Nepal", id: "NP" },
  { name: "Netherlands", id: "NL" },
  { name: "Netherlands Antilles", id: "AN" },
  { name: "New Caledonia", id: "NC" },
  { name: "New Zealand", id: "NZ" },
  { name: "Nicaragua", id: "NI" },
  { name: "Niger", id: "NE" },
  { name: "Nigeria", id: "NG" },
  { name: "Niue", id: "NU" },
  { name: "Norfolk Island", id: "NF" },
  { name: "Northern Mariana Islands", id: "MP" },
  { name: "Norway", id: "NO" },
  { name: "Oman", id: "OM" },
  { name: "Pakistan", id: "PK" },
  { name: "Palau", id: "PW" },
  { name: "Palestinian Territory, Occupied", id: "PS" },
  { name: "Panama", id: "PA" },
  { name: "Papua New Guinea", id: "PG" },
  { name: "Paraguay", id: "PY" },
  { name: "Peru", id: "PE" },
  { name: "Philippines", id: "PH" },
  { name: "Pitcairn", id: "PN" },
  { name: "Poland", id: "PL" },
  { name: "Portugal", id: "PT" },
  { name: "Puerto Rico", id: "PR" },
  { name: "Qatar", id: "QA" },
  { name: "Reunion", id: "RE" },
  { name: "Romania", id: "RO" },
  { name: "Russian Federation", id: "RU" },
  { name: "RWANDA", id: "RW" },
  { name: "Saint Helena", id: "SH" },
  { name: "Saint Kitts and Nevis", id: "KN" },
  { name: "Saint Lucia", id: "LC" },
  { name: "Saint Pierre and Miquelon", id: "PM" },
  { name: "Saint Vincent and the Grenadines", id: "VC" },
  { name: "Samoa", id: "WS" },
  { name: "San Marino", id: "SM" },
  { name: "Sao Tome and Principe", id: "ST" },
  { name: "Saudi Arabia", id: "SA" },
  { name: "Senegal", id: "SN" },
  { name: "Serbia and Montenegro", id: "CS" },
  { name: "Seychelles", id: "SC" },
  { name: "Sierra Leone", id: "SL" },
  { name: "Singapore", id: "SG" },
  { name: "Slovakia", id: "SK" },
  { name: "Slovenia", id: "SI" },
  { name: "Solomon Islands", id: "SB" },
  { name: "Somalia", id: "SO" },
  { name: "South Africa", id: "ZA" },
  { name: "South Georgia and the South Sandwich Islands", id: "GS" },
  { name: "Spain", id: "ES" },
  { name: "Sri Lanka", id: "LK" },
  { name: "Sudan", id: "SD" },
  { name: "Suriname", id: "SR" },
  { name: "Svalbard and Jan Mayen", id: "SJ" },
  { name: "Swaziland", id: "SZ" },
  { name: "Sweden", id: "SE" },
  { name: "Switzerland", id: "CH" },
  { name: "Syrian Arab Republic", id: "SY" },
  { name: "Taiwan, Province of China", id: "TW" },
  { name: "Tajikistan", id: "TJ" },
  { name: "Tanzania, United Republic of", id: "TZ" },
  { name: "Thailand", id: "TH" },
  { name: "Timor-Leste", id: "TL" },
  { name: "Togo", id: "TG" },
  { name: "Tokelau", id: "TK" },
  { name: "Tonga", id: "TO" },
  { name: "Trinidad and Tobago", id: "TT" },
  { name: "Tunisia", id: "TN" },
  { name: "Turkey", id: "TR" },
  { name: "Turkmenistan", id: "TM" },
  { name: "Turks and Caicos Islands", id: "TC" },
  { name: "Tuvalu", id: "TV" },
  { name: "Uganda", id: "UG" },
  { name: "Ukraine", id: "UA" },
  { name: "United Arab Emirates", id: "AE" },
  { name: "United Kingdom", id: "GB" },
  { name: "United States", id: "US" },
  { name: "United States Minor Outlying Islands", id: "UM" },
  { name: "Uruguay", id: "UY" },
  { name: "Uzbekistan", id: "UZ" },
  { name: "Vanuatu", id: "VU" },
  { name: "Venezuela", id: "VE" },
  { name: "Viet Nam", id: "VN" },
  { name: "Virgin Islands, British", id: "VG" },
  { name: "Virgin Islands, U.S.", id: "VI" },
  { name: "Wallis and Futuna", id: "WF" },
  { name: "Western Sahara", id: "EH" },
  { name: "Yemen", id: "YE" },
  { name: "Zambia", id: "ZM" },
  { name: "Zimbabwe", id: "ZW" }
];

export default class FormAssessIdeas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: "",
      description: "",
      job: "",
      country: "",
      agreement: false,
      isAgreementChecked: false,
      hasNameError: true,
      hasDescriptionError: true,
      hasMovieError: true,
      hasJobError: true,
      hasAgreementError: true,
      validate: false
    };
    this.validateForm = this.validateForm.bind(this);
  }

  toggleValidating(validate) {
    this.setState({ validate });
  }

  validateForm(e) {
    e.preventDefault();
    this.toggleValidating(true);
    const {
      // name,
      // job,
      // country,
      // agreement,
      // description,
      hasNameError,
      hasDescriptionError,
      hasMovieError,
      hasJobError,
      hasAgreementError
    } = this.state;
    if (
      !hasNameError &&
      !hasDescriptionError &&
      !hasMovieError &&
      !hasJobError &&
      !hasAgreementError
    ) {
      alert("All validated!");
    }
  }

  render() {
    const {
      name,
      number,
      description,
      job,
      agreement,
      isAgreementChecked,
      country,
      validate
    } = this.state;
    const rowStyle = {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      padding: "2%",
      fontSize: "14px"
    };
    const rowWrapperStyle = {
      display: "table",
      width: "100%"
    };
    const rowContainerStyle = {
      display: "table-cell",
      verticalAlign: "middle",
      borderBottom: "1px solid #e5e5e5"
    };
    const labelStyle = {
      display: "inline-block"
    };
    const labelContentStyle = {
      verticalAlign: "middle"
    };

    // let countryItem;
    // COUNTRY_OPTIONS_LIST.filter(i => {
    //   if (String(i.id) == String(country)) {
    //     countryItem = i;
    //   }
    // });

    return (
      <div
        style={{
          minHeight: "1000px",
          padding: "10px",
          border: "1px solid #e5e5e5"
        }}
      >
        <h1>Example form</h1>
        <Content>
            <StyledCard>
                <h4>Idea Question</h4>
                <p>Answer</p>
            </StyledCard>
            <StyledCard>
                <h4>Idea Question</h4>
                <p>Answer</p>
            </StyledCard>
            <StyledCard>
                <h4>Idea Question</h4>
                <p>Answer</p>
            </StyledCard>
            <StyledCard>
                <h4>Idea Question</h4>
                <p>Answer</p>
            </StyledCard>
        </Content>
        <form onSubmit={this.validateForm}>
          <div style={rowWrapperStyle}>
            <div style={rowContainerStyle}>
              <div style={rowStyle}>
                <div
                  style={{ ...labelStyle, flex: "3 3 0px", marginTop: "3px" }}
                >
                  <span
                    className="icon icon-person"
                    style={{ ...labelContentStyle, fontSize: "20px" }}
                  />
                  &nbsp;
                  <span style={labelContentStyle}>Name</span>
                </div>
                <div style={{ flex: "6 6 0px" }}>
                  <Textbox
                    tabIndex="1" // Optional.[String or Number].Default: -1.
                    id={"Name"} // Optional.[String].Default: "".  Input ID.
                    name="Name" // Optional.[String].Default: "". Input name.
                    type="text" // Optional.[String].Default: "text". Input type [text, password, number].
                    value={name} // Optional.[String].Default: "".
                    disabled={false} // Optional.[Bool].Default: false.
                    placeholder="Place your name here ^-^" // Optional.[String].Default: "".
                    validate={validate} // Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
                    validationCallback={res =>
                      this.setState({ hasNameError: res, validate: false })
                    } // Optional.[Func].Default: none. Return the validation result.
                    classNameInput="" // Optional.[String].Default: "".
                    classNameWrapper="" // Optional.[String].Default: "".
                    classNameContainer="" // Optional.[String].Default: "".
                    customStyleInput={{}} // Optional.[Object].Default: {}.
                    customStyleWrapper={{}} // Optional.[Object].Default: {}.
                    customStyleContainer={{}} // Optional.[Object].Default: {}.
                    onChange={(name, e) => {
                      this.setState({ name });
                      // console.log(e);
                    }} // Required.[Func].Default: () => {}. Will return the value.
                    onBlur={e => {
                      // console.log(e);
                    }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                    // onFocus={(e) => {console.log(e);}} // Optional.[Func].Default: none.
                    // onClick={(e) => {console.log(e);}} // Optional.[Func].Default: none.
                    validationOption={{
                      name: "Name", // Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
                      check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                      required: true // Optional.[Bool].Default: true. To determin if it is a required field.
                      // type: 'string', // Optional.[String].Default: "string". Validation type, options are ['string', 'number'].
                      // showMsg: true, // Optional.[Bool].Default: true. To determin display the error message or not.
                      // min: 2, // Optional.[Number].Default: 0. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
                      // max: 10, // Optional.[Number].Default: 0. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
                      // length: 2, // Optional.[Number].Default: 0. Validation of exact length of the value.
                      // compare: '3', // Optional.[String].Default: "" Compare this value to 3 to see if they are equal.
                      // reg: /^\d{18}|\d{15}$/, // Optional.[Bool].Default: "" Custom regex.
                      // regMsg: 'failed in reg.test(${value})', // Optional.[String].Default: "" Custom regex error message.
                      // locale: 'en-US', // Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'.
                      // msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", // Optional.[String].Default: "" Show your custom error message no matter what when it has error if it is provied.
                      // msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border." // Optional.[String].Default: "". Show your custom success message no matter what when it has error if it is provied.
                      // customFunc: res => { // Optional.[Func].Default: none. Custom function. Returns true or err message
                      //   if (res != 'milk') {
                      //     return 'Name cannot be other things but milk';
                      //   }
                      //   return true;
                      // }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={rowWrapperStyle}>
            <div style={rowContainerStyle}>
              <div style={rowStyle}>
                <div
                  style={{ ...labelStyle, flex: "3 3 0px", marginTop: "3px" }}
                >
                  {/*<div style={(labelStyle, { flex: '3 3 0px' })}>*/}
                  <span
                    className="icon icon-info"
                    style={{ ...labelContentStyle, fontSize: "20px" }}
                  />
                  &nbsp;
                  <span style={labelContentStyle}>job</span>
                </div>
                <div style={{ flex: "6 6 0px", display: "flex" }}>
                  <Radiobox
                    tabIndex={2} // Optional.[String or Number].Default: -1.
                    id="job" // Optional.[String].Default: "".  Input ID.
                    name="job" // Optional.[String].Default: "". Input name.
                    disabled={false} // Optional.[Bool].Default: false.
                    value={job} // Optional.[String].Default: "".
                    validate={validate} // Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
                    validationCallback={res =>
                      this.setState({ hasJobError: res, validate: false })
                    } // Optional.[Func].Default: none. Return the validation result.
                    optionList={JOB_OPTIONS_LIST}
                    classNameInput="" // Optional.[String].Default: "".
                    classNameWrapper="" // Optional.[String].Default: "".
                    classNameContainer="" // Optional.[String].Default: "".
                    classNameOptionListItem="" // Optional.[String].Default: "".
                    customStyleInput={{}} // Optional.[Object].Default: {}.
                    customStyleWrapper={{}} // Optional.[Object].Default: {}.
                    customStyleContainer={{
                      display: "flex",
                      justifyContent: "flex-start"
                    }} // Optional.[Object].Default: {}.
                    customStyleOptionListItem={{ marginRight: "20px" }} // Optional.[Object].Default: {}.
                    onChange={(job, e) => {
                      this.setState({ job });
                      // console.log(e);
                    }} // Required.[Func].Default: () => {}. Will return the value.
                    onBlur={e => {
                      // console.log(e);
                    }} // Optional.[Func].Default: none.
                    // onFocus={(e) => {console.log(e);}} // Optional.[Func].Default: none.
                    // onClick={(e) => {console.log(e);}} // Optional.[Func].Default: none.
                    validationOption={{
                      name: "Name", // Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
                      check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                      required: true // Optional.[Bool].Default: true. To determin if it is a required field.
                      // showMsg: true, // Optional.[Bool].Default: true. To determin display the error message or not.
                      // locale: 'en-US', // Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'.
                      // msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", // Optional.[String].Default: "". Show your custom error message no matter what when it has error if it is provied.
                      // msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border." // Optional.[String].Default: "". Show your custom success message no matter what when it has error if it is provied.
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={rowWrapperStyle}>
            <div style={rowContainerStyle}>
              <div style={rowStyle}>
                <div
                  style={{ ...labelStyle, flex: "3 3 0px", marginTop: "3px" }}
                >
                  {/*<div style={(labelStyle, { flex: '3 3 0px' })}>*/}
                  <span
                    className="icon icon-assignment-late"
                    style={{ ...labelContentStyle, fontSize: "20px" }}
                  />
                  &nbsp;
                  <span style={labelContentStyle}>agreement</span>
                </div>
                <div style={{ flex: "6 6 0px" }}>
                  <Checkbox
                    tabIndex="5" // Optional.[String or Number].Default: -1.
                    id={"agreement"} // Optional.[String].Default: "".  Input ID.
                    name={"agreement"} // Optional.[String].Default: "". Input name
                    value={agreement} // Required.[String].Default: "".
                    checked={isAgreementChecked} // Required.[Bool].Default: false.
                    disabled={false} // Optional.[Bool].Default: false.
                    validate={validate} // Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
                    validationCallback={res => {
                      this.setState({
                        hasAgreementError: res,
                        validate: false
                      });
                    }} // Optional.[Func].Default: none. Return the validation result.
                    classNameWrapper="" // Optional.[String].Default: "".
                    classNameInputBox="" // Optional.[String].Default: "".
                    classNameContainer="" // Optional.[String].Default: "".
                    customStyleWrapper={{}} // Optional.[Object].Default: {}.
                    customStyleInputBox={{}} // Optional.[Object].Default: {}.
                    customStyleContainer={{}} // Optional.[Object].Default: {}.
                    onBlur={() => {}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                    // onFocus={(e) => {console.log(e);}} // Optional.[Func].Default: none.
                    // onClick={(e) => {console.log(e);}} // Optional.[Func].Default: none.
                    onChange={(isAgreementChecked, e) => {
                      this.setState({ isAgreementChecked });
                      // console.log(e);
                    }} // Required.[Func].Default: () => {}. Will return the value.
                    labelHtml={
                      <div style={{ color: "#4a4a4a", marginTop: "2px" }}>
                        agree?
                      </div>
                    } // Required.[Html].Default: none.
                    validationOption={{
                      name: "agreement", // Optional.[String].Default: "". To display in the Error message. i.e Please check the ${name}.
                      check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                      required: true // Optional.[Bool].Default: true. To determin if it is a required field.
                      // showMsg: true, // Optional.[Bool].Default: true. To determin display the error message or not.
                      // locale: 'en-US', // Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'.
                      // msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", // Optional.[String].Default: "". Show your custom error message no matter what when it has error if it is provied.
                      // msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border." // Optional.[String].Default: "". Show your custom success message no matter what when it has error if it is provied.
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={rowWrapperStyle}>
            <div style={rowContainerStyle}>
              <div style={rowStyle}>
                <div
                  style={{ ...labelStyle, flex: "3 3 0px", marginTop: "3px" }}
                >
                  <span
                    className="icon icon-bookmark"
                    style={{ ...labelContentStyle, fontSize: "20px" }}
                  />
                  &nbsp;
                  <span style={labelContentStyle}>country</span>
                </div>
                <div style={{ flex: "6 6 0px" }}>
                  <Select
                    tabIndex="6" // Optional.[String or Number].Default: -1.
                    id={"country"} // Optional.[String].Default: "". Input ID.
                    name={"country"} // Optional.[String].Default: "". Input name.
                    value={country} // Optional.[String].Default: "".
                    disabled={false} // Optional.[Bool].Default: false.
                    validate={validate} // Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
                    validationCallback={res =>
                      this.setState({ hasMovieError: res, validate: false })
                    } // Optional.[Func].Default: none. Return the validation result.
                    optionList={COUNTRY_OPTIONS_LIST} // Required.[Array of Object(s)].Default: [].
                    classNameSelect="" // Optional.[String].Default: "".
                    classNameWrapper="" // Optional.[String].Default: "".
                    classNameContainer="" // Optional.[String].Default: "".
                    classNameOptionListContainer="" // Optional.[String].Default: "".
                    classNameOptionListItem="" // Optional.[String].Default: "".
                    customStyleSelect={{}} // Optional.[Object].Default: {}.
                    customStyleWrapper={{}} // Optional.[Object].Default: {}.
                    customStyleContainer={{}} // Optional.[Object].Default: {}.
                    customStyleOptionListContainer={{
                      maxHeight: "200px",
                      overflow: "auto",
                      fontSize: "14px"
                    }} // Optional.[Object].Default: {}.
                    customStyleOptionListItem={{}} // Optional.[Object].Default: {}.
                    onChange={(country, e) => {
                      this.setState({ country });
                      // console.log(e);
                    }} // Optional.[Func].Default: () => {}. Will return the value.
                    onBlur={() => {}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                    // onFocus={(e) => {console.log(e);}} // Optional.[Func].Default: none.
                    // onClick={(e) => {console.log(e);}} // Optional.[Func].Default: none.
                    // selectHtml={<div>{countryItem.name}</div>} // Optional.[Html].Default: none. The custom html that will display when user choose. Use it if you think the default html is ugly.
                    // selectOptionListItemHtml={COUNTRY_OPTIONS_LIST.map(
                    //   (i, k) => {
                    //     return (
                    //       <div
                    //         key={k}
                    //         onClick={() => {
                    //           this.handleSelectChange(i.id);
                    //         }}
                    //       >
                    //         <span className="icon icon-person" />{i.name}
                    //       </div>
                    //     );
                    //   }
                    // )} // Optional.[Html].Default: none. The custom select options item html that will display in dropdown list. Use it if you think the default html is ugly.
                    validationOption={{
                      name: "country", // Optional.[String].Default: "". To display in the Error message. i.e Please select a ${name}.
                      check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                      required: true // Optional.[Bool].Default: true. To determin if it is a required field.
                      // showMsg: true, // Optional.[Bool].Default: true. To determin display the error message or not.
                      // locale: 'en-US', // Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'.
                      // msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", // Optional.[String].Default: "". Show your custom error message no matter what when it has error if it is provied.
                      // msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border." // Optional.[String].Default: "". Show your custom success message no matter what when it has error if it is provied.
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={rowWrapperStyle}>
            <div style={rowContainerStyle}>
              <div style={rowStyle}>
                <div
                  style={{ ...labelStyle, flex: "3 3 0px", marginTop: "3px" }}
                >
                  <span
                    className="icon icon-insert-drive-file"
                    style={{ ...labelContentStyle, fontSize: "20px" }}
                  />
                  &nbsp;
                  <span style={labelContentStyle}>description</span>
                </div>
                <div style={{ flex: "6 6 0px" }}>
                  <Textarea
                    tabIndex="7" // Optional.[String or Number].Default: -1.
                    id="description" // Optional.[String].Default: "".  Textarea ID.
                    name="description" // Optional.[String].Default: "". Textarea name.
                    value={description} // Optional.[String].Default: "".
                    disabled={false} // Optional.[Bool].Default: false.
                    // maxLength="10" // Optional.[String | Number].Default: 524288.
                    // cols="10" // Optional.[String | Number].Default: 2.
                    // rows="10" // Optional.[String | Number].Default: 2.
                    placeholder="Place your description here ^-^" // Optional.[String].Default: "".
                    validate={validate} // Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
                    validationCallback={res =>
                      this.setState({
                        hasDescriptionError: res,
                        validate: false
                      })
                    } // Optional.[Func].Default: none. Return the validation result.
                    classNameInput="" // Optional.[String].Default: "".
                    classNameWrapper="" // Optional.[String].Default: "".
                    classNameContainer="" // Optional.[String].Default: "".
                    customStyleInput={{}} // Optional.[Object].Default: {}.
                    customStyleWrapper={{}} // Optional.[Object].Default: {}.
                    customStyleContainer={{}} // Optional.[Object].Default: {}.
                    onChange={(description, e) => {
                      this.setState({ description });
                      // console.log(e);
                    }} // Required.[Func].Default: () => {}. Will return the value.
                    onBlur={e => {
                      // console.log(e);
                    }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                    // onFocus={(e) => {console.log(e);}} // Optional.[Func].Default: none.
                    // onClick={(e) => {console.log(e);}} // Optional.[Func].Default: none.
                    validationOption={{
                      name: "Description", // Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
                      check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                      required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
                      type: "string" // Optional.[String].Default: "string". Validation type, options are ['string', 'number'].
                      // showMsg: true, // Optional.[Bool].Default: true. To determin display the error message or not.
                      // locale: 'en-US', // Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'.
                      // min: 2, // Optional.[Number].Default: 0. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
                      // max: 10, // Optional.[Number].Default: 0. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
                      // length: 2, // Optional.[Number].Default: 0. Validation of exact length of the value.
                      // reg: /^\d{18}|\d{15}$/, // Optional.[Bool].Default: "". Custom regex.
                      // regMsg: 'failed in reg.test(${value})', // Optional.[String].Default: "". Custom regex error message.
                      // msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", // Optional.[String].Default: "". Show your custom error message no matter what when it has error if it is provied.
                      // msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border." // Optional.[String].Default: "". Show your custom success message no matter what when it has error if it is provied.
                      // customFunc: res => { // Optional.[Func].Default: none. Custom function. Returns true or err message
                      //   if (res != 'banana') {
                      //     return 'Description cannot be other things but banana';
                      //   }
                      //   return true;
                      // }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: "10px" }} />
          <div
            className={`my-button my-button__red save-button`}
            onClick={this.validateForm}
          >
            validate!
          </div>
          <input type="submit" style={{ display: "none" }} />
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<FormAssessIdeas />, rootElement);


const Content = styled.div`
    align-self: center;
    justify-self: center;
    color: #ffffff;
    width: 90vw;
    max-width: 800px;
    height: auto;
    padding: 20px;
    
`;

const StyledCard = styled(Card) `
    background-color: rgb(255,255,255, 0.3);
    padding-left: 8px;
    padding-right: 8px;
`;