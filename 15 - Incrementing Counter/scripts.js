const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = Number(counter.getAttribute("data-target"));

    const c = +counter.innerText;

    const increment = target / 170; // aby vsechny county skoncily ve stejny cas bez ohledu na velikost cisla (cim mensi jmenovatel, tim rychlejsi count)

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
