console.log("WIRED UP");

$.getJSON('https://congress.api.sunlightfoundation.com/legislators?callback=?').then(function(serverRes){
 // console.log(serverRes)

 var legislatorsContainerEl = document.querySelector('.legislators-container')
 var legislatorsObjectsList = serverRes.results

 var bigHtmlLegislatorStr = ''

    forEach(legislatorsObjectsList, function(legislatorsObj){

        var firstName = legislatorsObj.first_name
        var lastName = legislatorsObj.last_name
        var title = legislatorsObj.title
        var party = legislatorsObj.party
        var stateName = legislatorsObj.state_name
        var email = legislatorsObj.oc_email
        var website = legislatorsObj.website
        var facebook = legislatorsObj.facebook_id
        var twitter = legislatorsObj.twitter_id
        var termEnd = legislatorsObj.term_end

        // var legislatorsDiv =  '<div class = row>'
        var legislatorsDiv =   '<div class="col-md-4 legislators">'
            legislatorsDiv +=     '<h3>' + firstName + ' ' + lastName + '</h3>'
            legislatorsDiv +=     '<h4>' + title + ' -- ' + party + '-' + stateName + '</h4>'
            legislatorsDiv +=     '<ul>'
            legislatorsDiv +=       '<li>' + 'email: ' + email + '</li>'
            legislatorsDiv +=       '<li>' + 'website: ' + website + '</li>'
            legislatorsDiv +=       '<li>' + 'facebook: ' + facebook +'</li>'
            legislatorsDiv +=       '<li>' + 'twitter: ' + twitter + '</li>'
            legislatorsDiv +=     '</ul>'
            legislatorsDiv +=     '<p>' + 'Term End ' + termEnd + '</p>'
            legislatorsDiv +=   '</div>'
            // legislatorsDiv += '</div>'


        bigHtmlLegislatorStr += legislatorsDiv
    })

    legislatorsContainerEl.innerHTML = bigHtmlLegislatorStr
})
