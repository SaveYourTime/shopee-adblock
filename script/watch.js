(() => {
  let loading = false;

  const getElementsBySelectors = (selectors) => {
    return new Promise((reslove, reject) => {
      let times = 0;
      const interval = setInterval(() => {
        times++;
        if (times >= 100) clearInterval(interval);
        const items = [...document.querySelectorAll(selectors)];
        if (!items.length) return;
        clearInterval(interval);
        loading = false;
        reslove(items);
      }, 100);
    });
  }

  const removeAds = () => {
    setTimeout(() => {
      const validPage = location.pathname.includes('search');
      if (loading || !validPage) return;
      loading = true;
      const selectors = '.shopee-search-item-result__item a > div > :first-child';
      getElementsBySelectors(selectors)
        .then((items) => {
          items.filter((item) => item.childElementCount > 1)
            .forEach((item) => item.closest('.shopee-search-item-result__item').remove());
        });
    }, 10);
  }

  document.addEventListener('click', removeAds);
  document.addEventListener('scroll', removeAds);
  window.onpopstate = removeAds;
  removeAds();
})();