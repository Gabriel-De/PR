const video = document.getElementById('video');

const constraints ={
audio: true,
video: {
    width: 250,
    height:250
    }
};

async function init(){
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        window.strean = stream;
        video.srcObject = stream;
    } catch(e){
        console.log('error: ${e.toString()}');
    }
}

init();
