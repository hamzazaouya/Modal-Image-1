/*global document*/

var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById('img01');
var caption = document.getElementById('caption');
var closer = document.getElementById('close');

function openModal() {
    'use strict';
    modal.style.display = 'block';
    modalImg.src = img.src;
    caption.innerHTML = img.alt;
}

function closeModal() {
  'use strict';
  modal.style.display = 'none';
}

img.onclick = function () {
    'use strict';
    openModal();
};

closer.onclick = function () {
    'use strict';
    closeModal();
}
