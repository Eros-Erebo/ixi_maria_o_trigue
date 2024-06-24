document.getElementById('startButton').addEventListener('click', function() {
    const items = [
        { name: 'Arma', file: 'arma.png' },
        { name: 'Item', file: 'item.png' },
        { name: 'Pergaminho', file: 'pergaminho.png' },
        { name: 'Akuma', file: 'akuma.png' }
    ];

    const slots = [
        document.getElementById('slot1').querySelector('img'),
        document.getElementById('slot2').querySelector('img'),
        document.getElementById('slot3').querySelector('img'),
        document.getElementById('slot4').querySelector('img'),
        document.getElementById('slot5').querySelector('img'),
        document.getElementById('slot6').querySelector('img'),
        document.getElementById('slot7').querySelector('img'),
        document.getElementById('slot8').querySelector('img'),
        document.getElementById('slot9').querySelector('img')
    ];

    function updateSlot(slot) {
        const randomItem = items[Math.floor(Math.random() * items.length)];
        slot.src = `images/${randomItem.file}`;
        slot.dataset.name = randomItem.name;
    }

    function stopSlot(slot, finalItem) {
        clearInterval(slot.interval);
        slot.src = `images/${finalItem.file}`;
        slot.dataset.name = finalItem.name;
    }

    slots.forEach(slot => {
        slot.interval = setInterval(() => updateSlot(slot), 100);
    });

    setTimeout(() => {
        const finalItems = slots.map(slot => items[Math.floor(Math.random() * items.length)]);

        slots.forEach((slot, index) => {
            stopSlot(slot, finalItems[index]);
        });

        const resultMessage = document.getElementById('resultMessage');
        if (
            finalItems[3].file === finalItems[4].file &&
            finalItems[4].file === finalItems[5].file
        ) {
            resultMessage.innerHTML = `Você ganhou! <span id="winner">${finalItems[4].name}</span>`;
        } else {
            resultMessage.textContent = 'Tente novamente!';
        }
    }, 1500);
});
