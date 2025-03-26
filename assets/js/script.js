window.addEventListener('load', function() {
    document.getElementById('slide-item-5').classList.add('active');
    document.getElementById('slide-item-6').classList.add('active');
    document.getElementById('slide-item-7').classList.add('active');
    document.getElementById('slide-item-8').classList.add('active');
    document.getElementById('slide-item-9').classList.add('active');
    document.getElementById('slide-item-10').classList.add('active');
    document.getElementById('slide-item-11').classList.add('active');
    document.getElementById('slide-item-12').classList.add('active');
    document.getElementById('slide-item-13').classList.add('active');
    document.getElementById('slide-item-14').classList.add('active');
    document.getElementById('slide-item-19').classList.add('active');
    document.getElementById('slide-item-15').classList.add('active');
    document.getElementById('slide-item-16').classList.add('active');
    document.getElementById('slide-item-17').classList.add('active');
    document.getElementById('slide-item-18').classList.add('active');
  });
  document.getElementById('slide-item-18').addEventListener('click', function() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });