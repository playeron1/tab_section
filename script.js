const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

function activateTab(selectedButton) {
  const selectedTab = selectedButton.dataset.tab;

  tabButtons.forEach((button) => {
    const isSelected = button === selectedButton;
    button.classList.toggle('is-active', isSelected);
    button.setAttribute('aria-selected', String(isSelected));
    button.tabIndex = isSelected ? 0 : -1;
  });

  tabPanels.forEach((panel) => {
    const isVisible = panel.dataset.panel === selectedTab;
    panel.hidden = !isVisible;
  });
}

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => activateTab(button));

  button.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
      return;
    }

    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (index + direction + tabButtons.length) % tabButtons.length;
    tabButtons[nextIndex].focus();
    activateTab(tabButtons[nextIndex]);
  });
});
