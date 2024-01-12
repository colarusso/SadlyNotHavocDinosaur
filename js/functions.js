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
    if (confirm(`Until I get around to building a custom search tool I'm using Google Site Search. FYI, they're still in the process of indexing this site. So don't expext much. That being said, should we contine?`) == true) {
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

const previews_arr = [
    [
        `\n<div class="preview" onClick="window.location='projects/#myrssalgo'">
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
    document.getElementById('previews').innerHTML = html ;
}

//document.addEventListener('DOMContentLoaded', function () {
//    load_previews();
//});
