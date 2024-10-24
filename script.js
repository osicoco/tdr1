let innocenceLevel = 100;

function reduceInnocence(damage, activity) {
    innocenceLevel -= damage;
    if (innocenceLevel < 0) {
        innocenceLevel = 0;
    }

    // Actualizar la barra de inocencia
    let innocenceBar = document.getElementById("innocenceBar");
    innocenceBar.style.width = innocenceLevel + "%";

    // Actualizar el nivel de inocencia mostrado
    document.getElementById("innocenceLevel").textContent = innocenceLevel;

    // Registrar la actividad realizada
    let activityLog = document.getElementById("activityLog");
    activityLog.textContent = `El niño ha realizado la actividad: ${activity}. El nivel de inocencia es ahora ${innocenceLevel}%.`;

    // Mostrar retroalimentación emocional
    let emotionalFeedback = document.getElementById("emotionalFeedback");
    if (innocenceLevel > 70) {
        emotionalFeedback.textContent = "El niño aún se siente curioso y seguro, disfrutando de la tecnología.";
    } else if (innocenceLevel > 40) {
        emotionalFeedback.textContent = "El niño comienza a sentirse más ansioso e inseguro al ver contenidos perturbadores.";
    } else if (innocenceLevel > 10) {
        emotionalFeedback.textContent = "El niño muestra signos de estrés emocional. La exposición excesiva afecta su visión del mundo.";
    } else {
        emotionalFeedback.textContent = "El niño ha perdido la inocencia. Se siente abrumado, confundido y desconfiado.";
    }
}

