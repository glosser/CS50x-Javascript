<h1>JSONP</h1>
<div id="badge"></div>

$.ajax({
    type: 'GET',
    url: 'http://githubbadge.appspot.com/badge/glosser',
    dataType: 'jsonp',
    success: function(json) {
        var result = '<h3>' + json.user.login + '</h3>' +
                     '<p>Languages: ' + json.languages + '</p>' +
                     '<p>Last Project: ' + json.last_project + '</p>' + 
                     '<p>Last Project URL: ' + json.last_project_url + '</p>' +
                     '<p>Reposition: ' + json.repo + '</p>' +  
                     '<p>Followers: ' + json.user.followers + '</p>';
        $('#badge').append(result);
    }
});
