function show_search()  {

    if (document.getElementById('query').value != "") {
        run_search();
    } else {
        document.getElementById('query').value = "";
        document.getElementById('query').style.display='block';
        document.getElementById('query').focus();    
    }

}

function run_search() {
    let query = document.getElementById('query').value;
    document.getElementById('query').value = "";
    document.getElementById('query').style.display='none';
    if (confirm(`If you click "OK," you'll be redirected to a Google Site Search. FWIW, it can take a while for new content to show up in the results.`) == true) {
        window.open('https://www.google.com/search?q='+query+'+site:sadlynothavocdinosaur.com');
    }
}

function submitSearch(event) {
    if (event.which === 13) {
        if (!event.repeat) {
            run_search();
        }
        event.preventDefault(); // Prevents the addition of a new line in the text field
    }
}

document.addEventListener('DOMContentLoaded', function () {

    var myQuery = document.getElementById('query');
    myQuery.addEventListener('focusout', function() {
        document.getElementById('query').style.display='none';
    });  
    myQuery.addEventListener('keydown', submitSearch);  

});  


function saveTextAsFile(tosave,name) {
    // Handle vendor prefixes.
    window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
  
    // tosave = ID of textarea to save
    // name = name to save file as, including file extension     
    // grab the content of the form field and place it into a variable
    var textToWrite = tosave //document.getElementById(tosave).value;
    //  create a new Blob (html5 magic) that conatins the data from your form feild
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
        
    // Specify the name of the file to be saved
    var fileNameToSaveAs = name;
        
    // Optionally allow the user to choose a file name by providing 
    // an imput field in the HTML and using the collected data here
    // var fileNameToSaveAs = txtFileName.text;
  
    // create a link for our script to 'click'
    var downloadLink = document.createElement("a");
    // supply the name of the file (from the var above).
    // you could create the name here but using a var
    // allows more flexability later.
    downloadLink.download = fileNameToSaveAs;
    // provide text for the link. This will be hidden so you
    // can actually use anything you want.
    downloadLink.innerHTML = "My Hidden Link";
        
    // allow our code to work in webkit & Gecko based browsers
    // without the need for a if / else block.
    window.URL = window.URL || window.webkitURL;
            
    // Create the link Object.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    // when link is clicked call a function to remove it from
    // the DOM in case user wants to save a second file.
    downloadLink.onclick = destroyClickedElement;
    // make sure the link is hidden.
    downloadLink.style.display = "none";
    // add the link to the DOM
    document.body.appendChild(downloadLink);
        
    // click the new link
    downloadLink.click();
}
  
function destroyClickedElement(event) {
    // remove the link from the DOM
    document.body.removeChild(event.target);
}

function loadFile(filePath) {
    return fetch(filePath)
    .then(response => response.text())
    .then(data => {
        return data
    })
};

const previews_arr = [
    [
        `\n<div class="preview" onClick="window.location='projects/#litprompts'">
        <img src="images/myrssalgo.png" class="preview_img"/>
        <b>Make AI work for you</b>
        <p>This extenion...</p></div>`,
    ],
    [
        `\n<div class="preview" onClick="window.location='projects/#partisanfail'">
        <img src="images/partisan_fail.jpg" class="preview_img"/>
        Play AI work for you</div>`,
    ]
]

function load_previews() {
    let html = "<h3>Random Projects <a href='javascript:load_previews();' style='text-decoration:none;'>⟳</a></h3>"
    html += previews_arr[0][Math.floor(Math.random() * (previews_arr[0].length))]
    html += previews_arr[1][Math.floor(Math.random() * (previews_arr[1].length))]
    html += `\n<div class="button_row"><a href="projects" class="button">See all projects</a></div>`;
    document.getElementById('previews').innerHTML = html ;
}

function expand_setup() {
    document.getElementById('setup_extension').style.display='block';
    document.getElementById('collapse_setup').style.display='block';
    document.getElementById('expand_setup').style.display='none';
}

function collapse_setup() {
    document.getElementById('setup_extension').style.display='none';
    document.getElementById('collapse_setup').style.display='none';
    document.getElementById('expand_setup').style.display='block';
}

var msg = `David's lab is hosting a <a href="https://suffolklitlab.org/LITCon/2024/" target="_blank">hybrid event at Suffolk Law</a> on April 8th on AI and law practice. Join us!`

function close_msg() {
    document.getElementById('msg_bar').style.display='none';
    localStorage.setItem('msg',msg)
}

document.addEventListener('DOMContentLoaded', function () {

    if (localStorage.msg != msg) {
        document.getElementById('msg_bar').innerHTML = `<a href="javascript:close_msg();" class="ex">X</a>`+ msg;
        document.getElementById('msg_bar').style.display='block';    
    }

    if ((window.location.hash!="#setup") & (window.location.hash!="#install") & (window.location.hash!="#point")) {
        try {
            collapse_setup();            
        } catch (error) {}    
    }
    
    //try {
    //    load_previews();        
    //} catch (error) {}
});
