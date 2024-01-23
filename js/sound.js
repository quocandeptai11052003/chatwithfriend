  // Lấy tham chiếu đến âm thanh và nút
  var audio = document.getElementById("audioStart");
  var playButton = document.getElementById("start");
  
  // Gắn sự kiện click vào nút
  playButton.addEventListener("click", function() {
    // Kiểm tra xem âm thanh đã hoàn thành chưa, nếu chưa thì phát nó
    if (audio.paused) {
      audio.play();
    } else {
      // Nếu đang phát, tua về đầu và phát lại
      audio.currentTime = 0;
    }
  });