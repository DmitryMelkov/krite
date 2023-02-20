export function saleTab() {
  const tabsBtn = document.querySelectorAll('.sale__tabs-btn');
  const tabsItems = document.querySelectorAll('.sale__tabs-item');

  if (tabsBtn) {
    tabsBtn.forEach(function (item) {
      item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
          tabsBtn.forEach(function (item) {
            item.classList.remove('active');
          });
          tabsItems.forEach(function (item) {
            item.classList.remove('active');
          });

          currentBtn.classList.add('active');
          currentTab.classList.add('active');
        }
      });
    });
  }
}
