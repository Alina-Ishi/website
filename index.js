function changeColor() {
    const colors = [
        '#ff6b6b',
        '#474389',
        '#713374ff',
        '#1dd1a1',
        '#97cbe9ff',
        '#0e1844ff',
    ];

    const color1 = colors[Math.floor
    (Math.random() * colors.length)];
    const color2 = colors[Math.floor
    (Math.random()* colors.length)];

    document.body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
}
