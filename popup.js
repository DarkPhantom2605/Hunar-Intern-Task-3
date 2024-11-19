document.addEventListener('DOMContentLoaded', () => {
    var modal = document.getElementById("popup-modal");
    var closeBtn = document.getElementsByClassName("close-btn")[0];
    var playButton = document.getElementById("play-button");
    var videoThumbnail = document.getElementById("popup-thumbnail");
    var popupVideo = document.getElementById("popup-video");

    if (!modal) {
        console.error('Popup modal element not found!');
        return;
    }

    var movies = {
        card1: {
            videoUrl: "https://www.youtube.com/watch?v=iP-l9zQEL3U",
            title: "KhelKhel Mein",
            description: "An unhappily married couple and five friends decide to share every call or text they get over one night with each other. There's nothing to hide — right?",
            tags: ["2024", "U/A", "16+", "Movie", "Comedies", "Dramas"],
            thumbnailUrl: "https://img.youtube.com/vi/iP-l9zQEL3U/hqdefault.jpg"
        },
        card2: {
            videoUrl: "https://www.youtube.com/watch?v=KEfeMPGj-Dw",
            title: "CTRL",
            description: "Nella and Joe are the perfect influencer couple. But when he cheats on her, she turns to an AI app to erase him from her life — until it takes control.",
            tags: ["2024", "U/A", "18+", "Movie", "Sci-Fi", "Dramas"],
            thumbnailUrl: "https://img.youtube.com/vi/KEfeMPGj-Dw/hqdefault.jpg"
        },
        card3: {
            videoUrl: "https://www.youtube.com/watch?v=tb37SwBvRoQ",
            title: "GOAT - The Greatest of All Time",
            description: "He was his agency's top hostage negotiator, field agent and spy — but years after retiring, one mission brings his past back to haunt him and his family.",
            tags: ["2024", "U", "13+", "Movie", "Action", "Thrillers"],
            thumbnailUrl: "https://img.youtube.com/vi/tb37SwBvRoQ/hqdefault.jpg"
        },
        card4: {
            videoUrl: "https://www.youtube.com/watch?v=dvLV5xPujMA",
            title: "Kondal",
            description: "Trouble in his village forces Manuel to begin working on a fishing boat. But when tragedy divides the crew, violence erupts on the high seas.",
            tags: ["2024", "U/A", "16+", "Movie", "Action", "Drama"],
            thumbnailUrl: "https://img.youtube.com/vi/dvLV5xPujMA/hqdefault.jpg"
        },
        card5: {
            videoUrl: "https://www.youtube.com/watch?v=eES65pr2POM",
            title: "Sector 36",
            description: "When several children disappear at the hands of a serial killer in Sector 36, a corrupt cop is forced to pursue the chilling case at all costs.",
            tags: ["2024", "A", "18+", "Movie", "Thriller", "Drama"],
            thumbnailUrl: "https://img.youtube.com/vi/eES65pr2POM/hqdefault.jpg"
        }
    };

    function openPopup(movie) {
        if (!modal) {
            console.error('Modal not found');
            return;
        }

        modal.style.display = "block";

        videoThumbnail.src = movie.thumbnailUrl;

        playButton.style.display = "block";

        popupVideo.src = "";
        popupVideo.style.display = "none";

        document.getElementById("popup-title").innerText = movie.title;
        document.getElementById("popup-description").innerText = movie.description;

        var tagsContainer = document.querySelector(".tags");
        tagsContainer.innerHTML = "";
        movie.tags.forEach(tag => {
            var tagElement = document.createElement("span");
            tagElement.className = "tag";
            tagElement.innerText = tag;
            tagsContainer.appendChild(tagElement);
        });

        playButton.onclick = function () {
            var videoId = extractYouTubeID(movie.videoUrl);
            popupVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            popupVideo.style.display = "block";
            playButton.style.display = "none";
            videoThumbnail.style.display = "none";
        };
    }

    var card1 = document.getElementById("card-1");
    var card2 = document.getElementById("card-2");
    var card3 = document.getElementById("card-3");
    var card4 = document.getElementById("card-4");
    var card5 = document.getElementById("card-5");

    if (card1) card1.onclick = function () { openPopup(movies.card1); };
    if (card2) card2.onclick = function () { openPopup(movies.card2); };
    if (card3) card3.onclick = function () { openPopup(movies.card3); };
    if (card4) card4.onclick = function () { openPopup(movies.card4); };
    if (card5) card5.onclick = function () { openPopup(movies.card5); };
    
    closeBtn.onclick = function () {
        modal.style.display = "none";
        popupVideo.src = "";
        popupVideo.style.display = "none";
        videoThumbnail.style.display = "block";
        playButton.style.display = "block";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            popupVideo.src = "";
            popupVideo.style.display = "none";
            videoThumbnail.style.display = "block";
            playButton.style.display = "block";
        }
    };

    function extractYouTubeID(url) {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }
});
