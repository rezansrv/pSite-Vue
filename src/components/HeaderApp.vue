<template>
  <div class="nav">
    <a href="/">REZA NASERIVAND</a>
    <ul class="links">
      <li>
        <a href="https://github.com/Rezansrv" target="_blank" rel="noopener noreferrer">
          <img src="../assets/git2.png" alt="GitHub" style="width: 24px; height: 24px; margin-bottom: 10px;" />
        </a>
      </li>
      <li>writing</li>
      <li>speaking</li>
      <li>projects</li>
    </ul>
  </div>
</template>

<style>
.nav {
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px;
  background-color: #111827;
  color: #ededed;
  font-family: Barlow, Barlow fallback, sans-serif;
}

.nav a {
  text-decoration: none;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
}

.links {
  list-style-type: none;
  display: flex;
  gap: 20px;
  margin: 0;
}

.links li {
  cursor: pointer;
  font-size: 18px;
}

.links li:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .nav {
    flex-direction: column;
    text-align: center;
  }

  .links {
    margin-top: 10px;
  }
}
</style>
