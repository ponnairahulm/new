const textEl = document.querySelector('#data');
const sizeEl = document.querySelector('#size');
const logotEl = document.querySelector('#logo');
const clearEl = document.querySelector('#clear');
const marginEl = document.querySelector('#margin');
const dotEl = document.querySelector('#dot');
const dotColorEl1 = document.querySelector('#dot-color-1');
const dotColorEl2 = document.querySelector('#dot-color-2');
const bgEl = document.querySelector('#bg-color');
const dlEl = document.querySelector('#btn-dl');
    let op={
        width: 100,
        height: 100,
        type: "png",
        data: textEl.value,
        image: "https://edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-white-f.png",
        dotsOptions: {
            color: "#4267b2",
            type: "rounded",
            gradient:{
                "type":"linear",
                "colorStops":[
                    {
                        "offset": 0,
                        "color": "#000000"
                    },
                    {
                        "offset": 1,
                        "color": "000"
                    }
                ]
            }
        },
        backgroundOptions: {
            color: "#fff"
        }
    };
render();
sizeEl.addEventListener('input', e=>{
    op.width = e.target.value * 10;
    op.height = e.target.value * 10;
    render();
});

textEl.addEventListener('keyup', e=>{
    op.data = e.target.value;
    render();
});

marginEl.addEventListener('input', e=>{
    op.imageOptions = {margin: e.target.value};
    render();
});

dotEl.addEventListener('change', e=>{
    op.dotsOptions.type = e.target.value;
    render();
});
dotColorEl1.addEventListener('input', e=>{
    op.dotsOptions.gradient.colorStops[0].color = e.target.value;
    render();
});
dotColorEl2.addEventListener('input', e=>{
    op.dotsOptions.gradient.colorStops[1].color = e.target.value;
    render();
});
bgEl.addEventListener('input', e=>{
    op.backgroundOptions.color = e.target.value;
    render();
})
var qrCode;
function render()
{
        qrCode = new QRCodeStyling(op);
        let canvasEl = document.querySelector('#canvas');
        canvasEl.innerHTML='';
        qrCode.append(canvasEl);
        canvasEl.nextElementSibling.innerHTML = `${op.width}px x ${op.height}px`;


}
function browse(){
    logotEl.click();
}
logotEl.addEventListener('change', e=>{
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = ()=>{
        op.image = reader.result;
        reader();
    };
    reader.readAsDataURL(file);
});

clearEl.addEventListener('click', e=>{
    delete op.image;
    render();
})
dlEl.addEventListener('click', e=>{
    qrCode.download({name:'qr', extension:'svg'});

})
