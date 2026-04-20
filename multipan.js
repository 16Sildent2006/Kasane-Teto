function multipan(event) {
    event.stopPropagation();

    const nuevopan = document.createElement('span');
    nuevopan.innerText = '🥖';
    nuevopan.classList.add('aleatoriopan');
    //2 posiciones aleatorias dentro del contenedor
    const x = Math.random() * (window.innerWidth - 80);
    const y = Math.random() * (window.innerHeight - 80);

    nuevopan.style.left = x + 'px';
    nuevopan.style.top = y + 'px';
    nuevopan.style.position = 'fixed';
    nuevopan.style.fontSize = 'pointer';

    event.target.style.transform = 'scale(1.5)';
    setTimeout(() => {
        event.target.style.transform = 'scale(1)';
    }, 1000);
    document.querySelector('.texts').appendChild(nuevopan);
    nuevopan.oneclick = multipan;
    document.body.appendChild(nuevopan);
}