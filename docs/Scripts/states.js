document.addEventListener('DOMContentLoaded', function() {
    const stateButtons = document.querySelectorAll('.state-button');
    let hoverTimer = null;
    
    // Данные для каждого государства: путь к изображению и информационный текст
    const stateData = {
      'imperial': {
        image: 'Source/1.png',
        info: 'Объединённая Империя – величайшая держава, объединяющая лучшие традиции и новейшие технологии для покорения космоса.'
      },
      'pozhirately': {
        image: 'pozhirately.jpg',
        info: 'Пожиратели – таинственная фракция, питающаяся энергией разрушенных цивилизаций, оставляя за собой лишь тьму.'
      },
      'lumeris': {
        image: 'lumeris.jpg',
        info: 'Семьи Люмерис – древние роды, чьи традиции и мудрость передаются из поколения в поколение, сохраняя секреты прошлого.'
      },
      'sofons': {
        image: 'sofons.jpg',
        info: 'Софоны – загадочная сила, известная своим технологическим превосходством и умением скрываться в тенях галактики.'
      }
    };
    
    const modalOverlay = document.getElementById('modal-overlay');
    const modalWindow = document.getElementById('modal-window');
    const modalImage = document.getElementById('modal-image');
    const modalInfo = document.getElementById('modal-info');
    const statesList = document.querySelector('.states-list');
    
    stateButtons.forEach(button => {
      button.addEventListener('mouseenter', function(e) {
        // Запускаем таймер: если курсор задержится 500мс – открываем окно
        hoverTimer = setTimeout(() => {
          const stateKey = button.getAttribute('data-state');
          const data = stateData[stateKey];
          if (!data) return;
          
          // Получаем координаты и размеры кнопки
          const rect = button.getBoundingClientRect();
          
          // Устанавливаем начальные параметры модального окна, совпадающие с кнопкой
          modalWindow.style.width = rect.width + 'px';
          modalWindow.style.height = rect.height + 'px';
          modalWindow.style.left = rect.left + 'px';
          modalWindow.style.top = rect.top + 'px';
          
          // Заполняем окно данными о государстве
          modalImage.src = data.image;
          modalInfo.textContent = data.info;
          
          // Показываем затемняющий фон (удаляем класс hidden)
          modalOverlay.classList.remove('hidden');
          
          // Скрываем остальные кнопки
          statesList.classList.add('hidden');
          
          // Принудительный reflow для корректного старта анимации
          modalWindow.offsetWidth;
          
          // Добавляем класс active – модальное окно расширится и сместится в центр
          modalWindow.classList.add('active');
          
        }, 500); // задержка 500 мс
      });
      
      button.addEventListener('mouseleave', function(e) {
        clearTimeout(hoverTimer);
      });
    });
    
    // Закрытие модального окна при клике вне его области
    modalOverlay.addEventListener('click', function(e) {
      if (!modalWindow.contains(e.target)) {
        closeModal();
      }
    });
    
    function closeModal() {
      // Убираем класс active для обратной анимации
      modalWindow.classList.remove('active');
      // После завершения анимации возвращаем исходное состояние
      setTimeout(() => {
        modalOverlay.classList.add('hidden');
        statesList.classList.remove('hidden');
      }, 300); // длительность анимации соответствует transition (0.3s)
    }
  });
  