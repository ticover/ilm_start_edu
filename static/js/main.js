(function(){
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');
    const setSidebar = (open) => {
        if(!sidebar) return;
        sidebar.classList.toggle('open', open);
        document.body.classList.toggle('nav-open', open);
    };
    if(menuToggle && sidebar){
        menuToggle.addEventListener('click', () => setSidebar(!sidebar.classList.contains('open')));
    }
    if(sidebarBackdrop){
        sidebarBackdrop.addEventListener('click', () => setSidebar(false));
    }
    if(sidebar){
        sidebar.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setSidebar(false)));
    }
    document.addEventListener('keydown', (event) => {
        if(event.key === 'Escape') setSidebar(false);
    });
    const clock = document.getElementById('clock');
    if(clock){
        const updateClock = () => {
            const now = new Date();
            const date = now.toLocaleDateString('ru-RU');
            const time = now.toLocaleTimeString('ru-RU', {hour:'2-digit', minute:'2-digit', second:'2-digit'});
            clock.textContent = `${date} | ${time}`;
        };
        updateClock();
        setInterval(updateClock, 1000);
    }
    const passwordInput = document.getElementById('passwordInput');
    const togglePassword = document.getElementById('togglePassword');
    if(passwordInput && togglePassword){
        togglePassword.addEventListener('click', () => {
            passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
        });
    }
    const mobilePasswordInput = document.getElementById('mobilePassword');
    const mobileTogglePassword = document.getElementById('mobileTogglePassword');
    if(mobilePasswordInput && mobileTogglePassword){
        mobileTogglePassword.addEventListener('click', () => {
            const isHidden = mobilePasswordInput.type === 'password';
            mobilePasswordInput.type = isHidden ? 'text' : 'password';
            mobileTogglePassword.textContent = isHidden ? '🙈' : '👁';
        });
    }
    if('serviceWorker' in navigator){
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/static/js/service-worker.js').catch(() => {});
        });
    }
})();
