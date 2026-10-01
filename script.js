document.addEventListener("DOMContentLoaded", () => {

  const providers = document.querySelectorAll(".provider");
  const selectedProvider = document.getElementById("selectedProvider");
  const providerInput = document.getElementById("providerInput");

  providers.forEach(button => {

    button.addEventListener("click", () => {

      providers.forEach(item => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      const provider = button.dataset.provider;

      selectedProvider.textContent = provider;
      providerInput.value = provider;
    });

  });

});
