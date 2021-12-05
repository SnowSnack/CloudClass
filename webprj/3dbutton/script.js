const boxes = document.getElementById("boxes");
const btn = document.getElementById("btn");
var boxarr = [];
var a = 0;
btn.addEventListener("click", () =>
{
    boxes.classList.toggle("big");
    boxarr.forEach
        (ele =>
            {
                ele.classList.toggle("rotateZ");
            }
        );
    if(a==0)
    {
        
        
    }
    a=(a+1)%2;
})

function createBoxes()
{
    for(let y =0; y<4; y++)
    {
        for(let x=0; x<4; x++)
        {
            const box = document.createElement("div");
            box.classList.add("box");
            box.classList.add("rotateZ");
            boxarr[x+y*4]=box;
            // box.style.backgroundPosition =
            // x*-125 + 'px ' +  y*-125 + "px ";

            box.style.backgroundPosition = `${-125*x}px ${-125*y}px`;

            boxes.appendChild(box);
        }
    }
}

createBoxes();

