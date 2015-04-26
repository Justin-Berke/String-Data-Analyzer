/* String Analyzer by Justin Berke
	V.2015.03.16
	This toolset is designed to run rapid reports on packets
		of string data that is either typed or pasted into the
		Analyzer text area.
	Contact infomation:
		  https://github.com/Justin-Berke
		  http://jbResume.tk
		  Justin.Berke+stringAnalyzer@gmail.com

		  https://github.com/Justin-Berke/String-Data-Analyzer
		  http://jsfiddle.net/1qyktzyg

	Issues:
		Functions b) & c) work okay. After that, the preveious case must 
			be true before the following lines will fire properly.

	Notes:
		http://www.w3schools.com/js/js_strings.asp
		http://xregexp.com/tests/unicode.html
		http://en.wikipedia.org/wiki/ASCII
		
	Contents: 
	Form controls id values:
		1) txtareaMain
		2) txtCharacters
		3) txtWords
		4) txtSpecialCharacters
		5) txtLines
		6) txtTabs
		
		Planned) txtCustom
		Planned) txtNumericCharacters

	Function index:
	 A) Global Functions
		1) Collect all input elements
		2) Select all text in a textbox on focus 
			(by element id)

	 B) Reports
		1) Main analyzer
			a) Reset form if blank
			b) Total number of characters
			c) Number of words
			d) Number of special characters
			e) Number of lines
			f) Number of tabs
		2) Grab current string value

	*/

// *****************************************************
// A) Global functions, used by all forms
// *****************************************************
	//1) Collect all input elements
		var elements = document.getElementsByTagName("input");

	// 2) Select all text in textbox on focus
		function setfocus(id) {
			document.getElementById(id).focus();
			document.getElementById(id).select();
			}

// *****************************************************
// B) Reports
// *****************************************************
	// 1) Main analyzer - This is the main function to fire analysis
		function analyzeString() {
		// Grab new value
			var mainString = grabString();

		// a) Reset form if blank
			if (mainString === null || mainString === "") {
				frmSA.txtCharacters.value = "";
				frmSA.txtWords.value = "";
				frmSA.txtSpecialCharacters.value = "";
				frmSA.txtLines.value = "";
				frmSA.txtTabs.value = "";
				frmSA.txtCustom.value = "";
			} else {
			    // b) Total number of characters
			    frmSA.txtCharacters.value = mainString.length;

			    // c) Number of words
			    if (mainString.match(/(\w+)/g) === null) {
			        frmSA.txtWords.value = "";
			    } else {
			        frmSA.txtWords.value = mainString.match(/(\w+)/g).length;
			    }

			    // d) Number of special characters
			    if (mainString.match(/[^a-z ^A-Z ^0-9 ]/g) === null) {
			        frmSA.txtSpecialCharacters.value = "";
			    } else {
			        frmSA.txtSpecialCharacters.value = mainString.match(/[^a-z ^A-Z ^0-9 ]/g).length;
			    }

			    // e) Number of lines
			    if (mainString.match(/\n/g) === null) {
			        frmSA.txtLines.value = "";
			    } else {
			        frmSA.txtLines.value = (mainString.match(/\n/g).length) + 1;
			    }

			    // f) Number of tabs
			    if (mainString.match(/\t/g) === null) {
			        frmSA.txtTabs.value = "";
			    } else {
			        frmSA.txtTabs.value = mainString.match(/\t/g).length;
			    }

			    // Search specific character/string
			    // (Future functionality)

			    // Number of numeric characters
			    // (Future functionality)
			    // frmSA.txtNumeric.value = mainString.match(/[0-9]/g).length;
			}
			
		    }

	// 2) Grab current string value
		function grabString() {
			return frmSA.txtareaMain.value;
		}