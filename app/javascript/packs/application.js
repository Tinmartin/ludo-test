  /* eslint no-console:0 */
  // This file is automatically compiled by Webpack, along with any other files
  // present in this directory. You're encouraged to place your actual application logic in
  // a relevant structure within app/javascript and only use these pack files to reference
  // that code so it'll be compiled.
  //
  // To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
  // layout file, like app/views/layouts/application.html.erb

  document.addEventListener("DOMContentLoaded", (event) => {
    // puts your Materialize initializers here!
    // M.toast({html: "Exemple of Materialize component", displayLength: 5000});
  });
function refresh() {
  fetch("https://ludo-test-rails.herokuapp.com/test")
  .then(response => response.json())
  .then((data) => {
    data.forEach(function(trigger) {
      const trigId = `trig-${trigger.id}`;
      const btn = document.getElementById(trigId);
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

setInterval(refresh, 250);
