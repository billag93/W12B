// Make A Post

function sendTweet(){
    let tweetTitle = document.getElementById('title-input').value;
    let tweetBody = document.getElementById('body-input').value;

    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1
    };
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 201){
            console.log(JSON.parse(this.responseText));
            document.getElementById('great-success').innerHTML = '<h3>Tweet was successfuly sent</h3>'
        }
        else if(this.readyState != 4){ console.log("Loading")}
        else{
            console.log("something went wrong")
        }
    }
    ajax.open("POST", 'https://jsonplaceholder.typicode.com/posts', true)
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(tweetData));
}



let tweetButton = document.getElementById('tweet-submit');
tweetButton.addEventListener('click', sendTweet)

// Send a Patch Update

function sendPatch(){
    let tweetTitle = document.getElementById('title-input').value;
    let tweetBody = document.getElementById('body-input').value;

    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1
    };
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            console.log(JSON.parse(this.responseText));
            console.log(this.responseText)
            console.log('Update was succesful')
        }
        else if(this.readyState != 4){ console.log("Loading")}

        else{
            console.log("something went wrong")
            console.log(this.status)
        }
    }
    ajax.open("PATCH", 'https://jsonplaceholder.typicode.com/posts/1', true)
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(tweetData));
}

sendPatch();

// Deletes A Post 


function sendDelete(){
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            console.log(JSON.parse(this.responseText));
            console.log(this.responseText)
            console.log('Delete was succesful')
        }
        else if(this.readyState != 4){ console.log("Loading")}

        else{
            console.log("something went wrong")
            console.log(this.status)
        }
    }
    ajax.open("DELETE", 'https://jsonplaceholder.typicode.com/posts/1', true)
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();
}

sendDelete();

// GET ALL TWEETs

function AllTweets(){

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
           
        alltweets = JSON.parse(this.responseText)
        console.log(alltweets);
         
          for(var index=0; index<alltweets.length; index++){
            let posts = document.getElementById('All-Tweets');
            posts.innerHTML += '<h1>' + alltweets[index].userId + '</h1>';
            posts.innerHTML += '<p>' + alltweets[index].title + '</p>';
            posts.innerHTML += '<p>' + alltweets[index].body+ '</p>' ; 
          }
        }
        else if(this.readyState != 4){ console.log("Loading")}

        else{
            console.log("something went wrong")
            console.log(this.status)
        }
    }
    ajax.open("GET", 'https://jsonplaceholder.typicode.com/posts', true)
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();
}

AllTweets();