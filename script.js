//your JS code here. If required.
let box = document.getElementById('browser-info');
let Agent = navigator.userAgent;
let Name = navigator.appName;
let Version = navigator.appVersion;
box.innerHTML = `You are using ${Name} version ${Version}`;