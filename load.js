if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").then(reg => console.log("Registro exitoso")
    ).catch(err => console.log(err));
}