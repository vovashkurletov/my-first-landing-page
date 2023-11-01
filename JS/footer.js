var footerText = `
<div>
<!--<div class="foot_div">
<p class="footer_inl">Fish</p>
<p class="footer_inl">Fishes' rights reserved maybe.</p>
</div> -->

<div class="foot_div">
<a class="" href="/" >
<img class='foot_img' src="/images/logo-inv.svg">
</a>
</div>
</div>
<div>
<div class="foot_div">
<p class="foot_p">Contacts</p>
<a class="foot_a" href="">+7(---)-------</a>
<a class="foot_a" href=" ">---@mail.ru</a>
<p>ул. ---, д. ---</p>
</div>
</div>
<div class="foot_div">
<a href="">
<img class="footer_logo-vk" src="/images/vk-logo.svg" alt="">
</a>
</div>
`;

function setFooter() {
  var footer =  document.createElement("footer");
  footer.innerHTML = footerText;
  document.body.children[0].insertAdjacentElement('beforeend', footer );
}

setFooter();