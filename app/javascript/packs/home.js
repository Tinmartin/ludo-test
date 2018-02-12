function refreshTriggers() {
  fetch("https://ludo-test-rails.herokuapp.com/test")
  .then(response => response.json())
  .then((data) => {
    data.forEach(function(trigger) {
      const trigId = `trig-${trigger.id}`;
      const btn = document.getElementById(trigId);
      if (trigger.id === 1) {
        if (trigger.state === 1) {
          char.style.backgroundImage = "url('https://res.cloudinary.com/coryandre/image/upload/v1518258450/walk_color_512_uxmwpn.gif')"
        } else {
          char.style.backgroundImage = "url('https://res.cloudinary.com/coryandre/image/upload/v1518258433/idle_color_512_vw3eud.gif')"
        }
      }
      if (trigger.state === 1) {
        btn.classList.add('green')
        btn.classList.remove('materialize-red')
      } else {
        btn.classList.add('materialize-red')
        btn.classList.remove('green')
      }
    });
  });
}

const triggers = document.querySelectorAll('.trigger')
triggers.forEach(function(trigger) {
  trigger.addEventListener('click', function(event) {
    trigger.classList.toggle('green');
    trigger.classList.toggle('materialize-red');
  });
});

const char = document.getElementById('char');


setInterval(refreshTriggers, 50);
