var backgroundImage = "";

function addpost() {
    var title = document.getElementById("title");
    var description = document.getElementById("description");
    var posts = document.getElementById("posts");
    // console.log("bgImage", backImage)
    if (title.value.trim() && description.value.trim()) {
        posts.innerHTML += `<div class="card mb-2">
<div class="card-header">
    @POST
</div>
<div  class="card-body">
    <blockquote class="blockquote mb-0">
        <p>${title.value}</p>
        <footer class="blockquote-footer">${description.value}</cite></footer>
    </blockquote>
</div>
</div>
`
        title.value = "";
        description.value = "";

    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'add description and title!',
        })
    }
}

// function selectimage(src) {
//     backgroundImage = src;
//     var bgImage = document.getElementsByClassName("bg-image");
//     for (var i = 0; i < bgImage.length; i++) {
//         bgImage[i].className = "bg-image";
//     }
//     event.target.className += " images-list-selected";
// }
