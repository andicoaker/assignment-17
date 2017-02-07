console.log("WIRED UP");

$.getJSON("https://congress.api.sunlightfoundation.com/legislators?callback=?", function(serverRes){
 console.log(serverRes)

 var legislatorsContainerEl = document.querySelector('.legislators-container')
 var legislatorsObjectsList = serverRes.results


 var bigHtmlLegislatorStr = ''
    forEach(legislatorsObjectsList, function(legislatorsObj){
        // console.log( legislatorsObj.multimedia[0])
        //
        // var imgUrl = ''
        // if( typeof legislatorsObj.multimedia[0] !== 'undefined'){
        //     imgUrl = legislatorsObj.multimedia[0].url
        // }

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

        var legislatorsDiv =  '<div class="legislators">'
            legislatorsDiv +=   '<h2>' + firstName + ' ' + lastName '</h2>'
            legislatorsDiv +=   '<h3>' + title + ' -- ' + party + '-' + stateName + '</h3>'
            legislatorsDiv +=   '<ul>'
            legislatorsDiv +=     '<li>' + 'email: ' + email + '</li>'
            legislatorsDiv +=     '<li>' + 'website: ' + website + '</li>'
            legislatorsDiv +=     '<li>' + 'facebook: ' + facebook +'</li>'
            legislatorsDiv +=     '<li>' + 'twitter: ' + twitter + '</li>'
            legislatorsDiv +=   '</ul>'
            legislatorsDiv +=   '<p>' + 'Term End ' + termEnd + '</p>'
            legislatorsDiv += '</div>'

        bigHtmlLegislatorStr += legislatorsDiv
    })

    legislatorsContainerEl.innerHTML = bigHtmlLegislatorStr
})
