function validateImage(category, size) {
    if ((category === ("JPEG" || "PNG")) && (size <= 4000000)) {
        return "success";
    }
    else {
        return "Not a proper format of image or size is too large";
    }
}
function validateVideo(type, category, size, e) {
    if ((category === "MP4") && size <= 20000000) {
        let rd = new FileReader();
        rd.onload = function (e) {
            console.log('Onload function');
            var blob = new Blob([e.target.result], { type: type + "/" + category }), // create a blob of buffer
                url = URL.createObjectURL(blob), // create o-URL of blob
                video = document.createElement('video');
            video.preload = 'metadata';
            video.addEventListener('loadedmetadata', function () {
                // when enough data loads
                console.log(Math.round(video.duration) + 's');
            });
            video.src = url;
            // console.log(video.src);
        };
        rd.readAsArrayBuffer(e.target.files[0]);
        return "success";
    }
    else {
        return "Not a proper format or size is too large";
    }
}
export function validateFile(e) {
    const mimeType = e.target.files[0].type.split('/');
    let type = mimeType[0].toUpperCase();
    let category = mimeType[1].toUpperCase();
    let size = e.target.files[0].size;
    console.log(type, size);
    let mssg = " ", image = "IMAGE", video = "VIDEO"
    switch (type) {
        case image:
            mssg = validateImage(category, size);
            break;
        case video:
            mssg = validateVideo(type, category, size, e);
            break;
        default:
            mssg = "Not a proper format";
    }
    if (mssg === "success") {
        return mssg;
    } else {
        return mssg;
    }
}
