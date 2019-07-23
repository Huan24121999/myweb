var mangdl=[
    {
        id:1,
        ten:"Nguyen Trong Huan",
        img:'http://kenh14cdn.com/zoom/460_289/2019/7/15/ava-ngang-1-15631863692571026074663-crop-15631864216241879471895.jpg',
        noi_dung:'Sao em vô tingh quá em ơi'
    },
    {
        id:1,
        ten:"Nguyen Trong Huan",
        img:'http://kenh14cdn.com/zoom/460_289/2019/7/15/ava-ngang-1-15631863692571026074663-crop-15631864216241879471895.jpg',
        noi_dung:'Sao em vô tingh quá em ơi'
    },
    {
        id:1,
        ten:"Nguyen Trong Huan",
        img:'http://kenh14cdn.com/zoom/460_289/2019/7/15/ava-ngang-1-15631863692571026074663-crop-15631864216241879471895.jpg',
        noi_dung:'Sao em vô tingh quá em ơi'
    },
    {
        id:1,
        ten:"Nguyen Trong Huan",
        img:'http://kenh14cdn.com/zoom/460_289/2019/7/15/ava-ngang-1-15631863692571026074663-crop-15631864216241879471895.jpg',
        noi_dung:'Sao em vô tingh quá em ơi'
    },
    {
        id:1,
        ten:"Nguyen Trong Huan",
        img:'http://kenh14cdn.com/zoom/460_289/2019/7/15/ava-ngang-1-15631863692571026074663-crop-15631864216241879471895.jpg',
        noi_dung:'Sao em vô tingh quá em ơi'
    },
    {
        id:1,
        ten:"Nguyen Trong Huan",
        img:'http://kenh14cdn.com/zoom/460_289/2019/7/15/ava-ngang-1-15631863692571026074663-crop-15631864216241879471895.jpg',
        noi_dung:'Sao em vô tingh quá em ơi'
    },
    {
        id:2,
        ten:'Nguyễn Trần Lê Khoa',
        img:'http://kenh14cdn.com/zoom/460_289/2019/7/15/ava-ngang-1-15631863692571026074663-crop-15631864216241879471895.jpg',
        noi_dung:'con đĩ mẹ  mày',
    }

]
for(var i=0; i<mangdl.length ;i++){
   var noidung1khoi=` 

   <div class="comment">
<img src="${mangdl[i].img}" alt="">
<b>${mangdl[i].ten}</b>
<span>${mangdl[i].noi_dung}</span>
</div>
    `
    var themoi=document.createElement('div');
    console.log(themoi);

    themoi.innerHTML=noidung1khoi;
    console.log(themoi.innerHTML);

    var huan =document.getElementById('haha');
    console.log(huan);

    huan.appendChild(themoi);
   
   console.log(noidung1khoi);
}

var x1=document.getElementsByTagName('h1');
x1[0].innerHTML="Web đã bị hack";

console.log(x1[0].innerHTML);