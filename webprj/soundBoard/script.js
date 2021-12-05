const sounds =
[
    "wcl"
];

sounds.forEach(sound =>
{
    const btn = document.createElement("button");
    btn.innerText = sound;

    btn.addEventListener('click',()=>
    {
        stopMusics();
        document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(btn);
});

function stopMusics()
{
    sounds.forEach(sound =>
    {
        document.getElementById(sound).pause();
        document.getElementById(sound).currentTime = 0;
    });
}