import './style.css';
import { setupVideo, takePhoto } from './src/camera';

(async function run() {
   const video = await setupVideo();
   const canvas = document.querySelector('canvas');
   const button = document.getElementById('camera');

   let showingPhoto = false;

   button.addEventListener('click', () => {
      if (!showingPhoto) {
         takePhoto(video, canvas);

         video.classList.add('is-hidden');
         canvas.classList.remove('is-hidden');
         button.textContent = 'Retake';

         showingPhoto = true;
      } else {
         canvas.classList.add('is-hidden');
         video.classList.remove('is-hidden');
         button.textContent = 'Take Selfie';

         showingPhoto = false;
      }
   });
})();
