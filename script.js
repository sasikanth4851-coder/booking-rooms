const today = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type="date"]').forEach(el => el.min = today);
  document.getElementById('quick-search').addEventListener('submit', e => {
    e.preventDefault();
    const arrival = document.getElementById('arrival').value;
    const departure = document.getElementById('departure').value;
    if (departure <= arrival) { alert('Check-out date must be after check-in date.'); return; }
    document.getElementById('checkin').value = arrival;
    document.getElementById('checkout').value = departure;
    document.getElementById('booking-room').value = document.getElementById('room-type').value === 'Any room' ? 'Classic Room' : document.getElementById('room-type').value;
    document.getElementById('booking-guests').value = document.getElementById('guests').value.charAt(0);
    document.getElementById('booking').scrollIntoView({behavior:'smooth'});
  });
  document.getElementById('reservation').addEventListener('submit', e => {
    e.preventDefault();
    if (document.getElementById('checkout').value <= document.getElementById('checkin').value) {
      alert('Check-out date must be after check-in date.'); return;
    }
    document.getElementById('success').style.display = 'block';
  });
