import {posts} from './data.js'


document.addEventListener('click', function(e){
    if(e.target.dataset.like){
       handleLikeClick(e.target.dataset.like)
       console.log(e.target.dataset.like)
    }
})



function handleLikeClick(instaPost){
   const targetInstaObject = posts.filter(function(insta){
        return insta.id === instaPost
   })[0]
   console.log(targetInstaObject)
    
    if(targetInstaObject.isLiked){
        targetInstaObject.likes--
        
    }else{
        targetInstaObject.likes++      
    }
    targetInstaObject.isLiked = !targetInstaObject.isLiked
    render()
}



function getFeedHtml(){
    let strOfHtml = ''
posts.forEach(function(post){

    let likeIconClass = ''
    if(post.isLiked){
        likeIconClass = 'liked'
    }
    
    strOfHtml +=
    `             
                <div class="profile-container">                       
                    <img class="profile-img" src="${post.avatar}">
                    <h3 class="profile-detail">${post.name}<span>${post.location}</h3>                                                 
                </div>

                <div class="main-img-container">
                    <img class="main-img" src="${post.post}">
                </div>
                <div class="footer-container">
                    <div class="icon-continer">
                        <img src="images/like.svg" data-like="${post.id}" class="${likeIconClass}">
                        <img src="images/comment.svg">
                        <img src="images/share.svg">
                    </div>
                    <div class="comments-container">
                        <h3>${post.likes} likes<span><b>${post.username}</b> ${post.comment}</span></h3>                      
                    </div>
                </div>         
            
    `
    
})
return strOfHtml
}

function render(){
    document.getElementById('oldagram').innerHTML = getFeedHtml()
}
render()