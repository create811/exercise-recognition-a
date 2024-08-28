// script.js

document.getElementById('start-button').addEventListener('click', () => {
    const exercise = document.getElementById('exercise-select').value;
    document.getElementById('feedback-text').textContent = `Starting ${exercise}...`;

    // Simulate feedback for now
    setTimeout(() => {
        document.getElementById('feedback-text').textContent = `Good form! Keep going with those ${exercise}!`;
    }, 3000);
});

// Function to start webcam
function startWebcam() {
    const video = document.getElementById('webcam');

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                video.srcObject = stream;
            })
            .catch((error) => {
                console.error("Error accessing webcam: ", error);
            });
    }
}

startWebcam();
