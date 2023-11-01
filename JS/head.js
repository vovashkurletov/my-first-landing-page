var headerText = `  <header class="mob">
<img class='hamb' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png'>
<!-- <span class='hamb'>&#9776;</span>-->
</header>


<div class="head_info">
<h1 class='head_item head_text desk'>Official website of the fish text</h1>
<h1 class='head_item head_text mob'>Official website</h1>
<img class='head_item logo' src="images/лого.svg">
<h1 class='head_item head_text desk'>Official website of the fish text</h1>
<h1 class='head_item head_text mob'>of the fish text</h1>
</div>

<hr class="line">

<nav class="top_menu desk">
<div class="menu_main">
<ul>
<li><a href="/pps36.ru/">PAGE</a></li>
<li><a href="/pps36.ru/pages/1sport.php">PAGE</a></li>
<li><a href="/pps36.ru/pages/2tr-sostav.php">PAGE</a></li>
<li><a href="/pps36.ru/pages/3sorevy.php">PAGE</a></li>
<li><a href="/pps36.ru/pages/4contacts.php">PAGE</a></li>
</ul>
<div>
</nav>

<hr class="line">
`;

function setHeader() {
  var header =  document.createElement("div");
  header.classList.add('head');
  header.innerHTML = headerText ;
  document.body.children[0].insertAdjacentElement('afterbegin', header );
}

setHeader();
