const { useState } = React;

// Preguntas y respuestas
const tarjetas = [
    {
        pregunta: "¿Qué son las nutrias?",
        respuesta: "Son mamíferos carnívoros que viven en ambientes acuáticos o cerca del agua."
    },
    {
        pregunta: "¿Dónde viven las nutrias?",
        respuesta: "Viven en ríos, lagos, humedales y zonas costeras."
    },
    {
        pregunta: "¿Qué comen las nutrias?",
        respuesta: "Se alimentan principalmente de peces, crustáceos y otros animales acuáticos."
    },
    {
        pregunta: "¿Las nutrias son mamíferos?",
        respuesta: "Sí, respiran aire y alimentan a sus crías con leche."
    },
    {
        pregunta: "¿Cómo nadan las nutrias?",
        respuesta: "Utilizan sus patas y su cola para desplazarse por el agua."
    },
    {
        pregunta: "¿Cómo se llama una cría de nutria?",
        respuesta: "Se conoce como cachorro de nutria."
    },
    {
        pregunta: "¿Las nutrias pueden caminar en tierra?",
        respuesta: "Sí, pueden caminar y descansar fuera del agua."
    },
    {
        pregunta: "¿Para qué sirve el pelaje de las nutrias?",
        respuesta: "Les ayuda a conservar el calor y protegerse del frío."
    },
    {
        pregunta: "¿Las nutrias tienen bigotes?",
        respuesta: "Sí, sus bigotes les ayudan a detectar movimientos en el agua."
    },
    {
        pregunta: "¿Todas las nutrias viven en grupos?",
        respuesta: "No, algunas especies viven en grupos y otras prefieren estar solas."
    },
    {
        pregunta: "¿Cómo respiran las nutrias?",
        respuesta: "Respiran mediante pulmones y necesitan salir a la superficie."
    },
    {
        pregunta: "¿Las nutrias pueden bucear?",
        respuesta: "Sí, pueden sumergirse para buscar alimento."
    },
    {
        pregunta: "¿Qué es una nutria marina?",
        respuesta: "Es una especie de nutria que vive en las costas del océano Pacífico."
    },
    {
        pregunta: "¿Las nutrias utilizan herramientas?",
        respuesta: "Sí, algunas nutrias marinas utilizan piedras para abrir alimentos."
    },
    {
        pregunta: "¿Cómo cuidan las nutrias a sus crías?",
        respuesta: "Las madres las protegen, alimentan y enseñan a sobrevivir."
    },
    {
        pregunta: "¿Las nutrias tienen depredadores?",
        respuesta: "Sí, dependiendo de la especie, pueden ser atacadas por grandes depredadores."
    },
    {
        pregunta: "¿Por qué son importantes las nutrias?",
        respuesta: "Ayudan a mantener el equilibrio de los ecosistemas acuáticos."
    },
    {
        pregunta: "¿Las nutrias están en peligro?",
        respuesta: "Algunas especies están amenazadas por la contaminación y la pérdida de hábitat."
    },
    {
        pregunta: "¿Cuánto tiempo pueden permanecer bajo el agua?",
        respuesta: "Depende de la especie; algunas pueden permanecer sumergidas varios minutos."
    },
    {
        pregunta: "¿Cómo podemos proteger a las nutrias?",
        respuesta: "Cuidando los ríos, evitando la contaminación y protegiendo sus hábitats."
    }
];

// Componente reutilizable
function FlashCard({ pregunta, respuesta, mostrarRespuesta, voltear }) {

    return (
        <article
            className="tarjeta"
            onClick={voltear}
            role="button"
            tabIndex="0"
            onKeyDown={(evento) => {
                if (evento.key === "Enter" || evento.key === " ") {
                    evento.preventDefault();
                    voltear();
                }
            }}
        >
            <p>
                {mostrarRespuesta ? respuesta : pregunta}
            </p>
        </article>
    );
}

// Componente principal
function App() {

    const [actual, setActual] = useState(0);
    const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

    // Mostrar u ocultar respuesta
    function voltear() {
        setMostrarRespuesta(!mostrarRespuesta);
    }

    // Siguiente tarjeta
    function siguiente() {
        if (actual < tarjetas.length - 1) {
            setActual(actual + 1);
            setMostrarRespuesta(false);
        }
    }

    // Tarjeta anterior
    function anterior() {
        if (actual > 0) {
            setActual(actual - 1);
            setMostrarRespuesta(false);
        }
    }

    // Porcentaje de progreso
    const progreso = ((actual + 1) / tarjetas.length) * 100;

    return (
        <section className="contenedor">

            <h1>Flash Cards de Nutrias 🦦</h1>

            <section className="informacion">

                <progress
                    value={actual + 1}
                    max={tarjetas.length}
                ></progress>

                <p>
                    <span>{Math.round(progreso)}%</span>
                    <span>{actual + 1} de {tarjetas.length}</span>
                </p>

            </section>

            <FlashCard
                pregunta={tarjetas[actual].pregunta}
                respuesta={tarjetas[actual].respuesta}
                mostrarRespuesta={mostrarRespuesta}
                voltear={voltear}
            />

            <nav className="botones" aria-label="Navegación de tarjetas">

                <button
                    onClick={anterior}
                    disabled={actual === 0}
                >
                    ‹ Anterior
                </button>

                <button onClick={voltear}>
                    {mostrarRespuesta ? "Ocultar respuesta" : "Mostrar respuesta"}
                </button>

                <button
                    onClick={siguiente}
                    disabled={actual === tarjetas.length - 1}
                >
                    Siguiente ›
                </button>

            </nav>

        </section>
    );
}

// Mostrar React en la página
ReactDOM.createRoot(document.getElementById("root")).render(<App />);