// Esperar a que cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    // ---------- MODAL PANTALLA COMPLETA ----------
    const modal = document.getElementById('fullscreenModal');
    const modalImg = document.getElementById('fullscreenImage');
    let currentFullImg = null;

    // Función para abrir imagen a pantalla completa
    function openFullscreen(imgSrc) {
        modalImg.src = imgSrc;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeFullscreen() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        modalImg.src = '';
    }

    // Asignar evento a todas las imágenes con clase 'fullscreen-img' o data-full
    const fullscreenImgs = document.querySelectorAll('.fullscreen-img, [data-full="true"]');
    fullscreenImgs.forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            openFullscreen(img.src);
        });
    });

    // Cerrar modal al hacer clic en cualquier lugar del fondo
    modal.addEventListener('click', closeFullscreen);
    // Evitar que el clic sobre la imagen cierre el modal (para no interferir)
    modalImg.addEventListener('click', (e) => e.stopPropagation());

    // ---------- BOTÓN ACCESORIOS Y MÁS (CATÁLOGO COMPLETO) ----------
    const accesoriosBtn = document.getElementById('accesoriosBtn');
    if (accesoriosBtn) {
        accesoriosBtn.addEventListener('click', () => {
            openProductCatalog();
        });
    }

    // Catálogo de productos con descripción, precio y botón WhatsApp
    function openProductCatalog() {
        const catalogWindow = window.open('', '_blank');
        if (!catalogWindow) {
            alert('Por favor, permite ventanas emergentes para ver el catálogo');
            return;
        }

        // Lista de productos con todos los detalles
        const productos = [
            { 
                nombre: "Collar Punk con Picos", 
                img: "producto1.jpg", 
                ref: "COLLAR-PUNK-01", 
                precio: "$189",
                descripcion: "Collar ajustable con picos metálicos, ideal para perros medianos y grandes. Resistente y con estilo punk."
            },
            { 
                nombre: "Chaleco Reflectivo Seguridad", 
                img: "producto2.jpg", 
                ref: "CHALECO-REF", 
                precio: "$320",
                descripcion: "Chaleco con bandas reflectantes, ajustable. Perfecto para paseos nocturnos. Tallas S/M/L."
            },
            { 
                nombre: "Juguete Hueso de Nylon", 
                img: "producto3.jpg", 
                ref: "HUESO-NYL", 
                precio: "$150",
                descripcion: "Hueso duradero de nylon, ayuda a limpiar dientes y combatir el aburrimiento. Sabor a pollo."
            },
            { 
                nombre: "Cama Estilo Dóberman", 
                img: "producto4.jpg", 
                ref: "CAMA-PUNK", 
                precio: "$650",
                descripcion: "Cama acolchada con diseño de huellas y estampado rockero. Lavable y resistente. Medida 70x50cm."
            },
            { 
                nombre: "Cepillo Deslanador Profesional", 
                img: "producto5.jpg", 
                ref: "CEPILLO-DES", 
                precio: "$210",
                descripcion: "Cepillo de acero inoxidable, elimina pelo muerto sin dañar la piel. Ideal para razas de doble capa."
            },
            { 
                nombre: "Perfume Canino Fresh", 
                img: "producto6.jpg", 
                ref: "PERFUME-PAW", 
                precio: "$175",
                descripcion: "Perfume en spray con aroma a manzanilla y coco. Neutraliza olores, seguro para mascotas."
            },
            { 
                nombre: "Corbata Elegante para Perro", 
                img: "producto7.jpg", 
                ref: "CORBATA-PUNK", 
                precio: "$99",
                descripcion: "Corbata pre-atada con clip, diseño a cuadros rojos y negros. Para ocasiones especiales."
            },
            { 
                nombre: "Comedero Elevado Ajustable", 
                img: "producto8.jpg", 
                ref: "COMEDOR-01", 
                precio: "$450",
                descripcion: "Comedero de madera con dos bowls de acero inoxidable. Altura ajustable para evitar problemas cervicales."
            }
        ];

        const htmlContent = `<!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Catálogo - Accesorios y Más | Peluquería Canina</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    background: #0a0a0a;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                    color: #eee;
                    padding: 2rem;
                }
                
                .catalogo-container {
                    max-width: 1400px;
                    margin: 0 auto;
                }
                
                .catalogo-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                    margin-bottom: 2rem;
                    border-bottom: 3px solid #ff3b3b;
                    padding-bottom: 1.2rem;
                }
                
                h1 {
                    font-size: 2.2rem;
                    background: linear-gradient(135deg, #ff3b3b, #ff9f4a);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                }
                
                .btn-back {
                    background: #ff3b3b;
                    padding: 10px 24px;
                    border: none;
                    border-radius: 40px;
                    color: white;
                    font-weight: bold;
                    cursor: pointer;
                    transition: all 0.2s;
                    font-size: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                
                .btn-back:hover {
                    background: #e62e2e;
                    transform: scale(1.02);
                    box-shadow: 0 0 12px #ff3b3b;
                }
                
                .catalogo-subtitle {
                    color: #ffb347;
                    margin-bottom: 2rem;
                    font-size: 1rem;
                    text-align: center;
                    padding: 0.5rem;
                    background: #111;
                    border-radius: 30px;
                    display: inline-block;
                    width: auto;
                }
                
                .productos-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 2rem;
                    margin-top: 2rem;
                }
                
                .producto-card {
                    background: #141414;
                    border-radius: 28px;
                    overflow: hidden;
                    border: 1px solid #2a2a2a;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                }
                
                .producto-card:hover {
                    transform: translateY(-8px);
                    border-color: #ff3b3b;
                    box-shadow: 0 12px 24px rgba(255,59,59,0.2);
                }
                
                .producto-img {
                    width: 100%;
                    height: 250px;
                    object-fit: cover;
                    cursor: pointer;
                    transition: transform 0.3s;
                    border-bottom: 1px solid #2a2a2a;
                }
                
                .producto-img:hover {
                    transform: scale(1.02);
                }
                
                .producto-info {
                    padding: 1.2rem;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                
                .producto-nombre {
                    font-size: 1.3rem;
                    font-weight: 800;
                    color: #ff5e5e;
                }
                
                .producto-descripcion {
                    font-size: 0.85rem;
                    color: #bbb;
                    line-height: 1.4;
                    margin: 5px 0;
                }
                
                .producto-precio {
                    font-size: 1.4rem;
                    font-weight: bold;
                    color: #ff9f4a;
                    margin: 5px 0;
                }
                
                .producto-ref {
                    font-size: 0.7rem;
                    color: #777;
                    letter-spacing: 0.5px;
                }
                
                .btn-whatsapp-producto {
                    background: #25D366;
                    border: none;
                    padding: 10px 0;
                    width: 100%;
                    border-radius: 40px;
                    font-weight: bold;
                    color: white;
                    margin-top: 12px;
                    cursor: pointer;
                    transition: all 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    font-size: 0.9rem;
                }
                
                .btn-whatsapp-producto:hover {
                    background: #128C7E;
                    transform: scale(0.98);
                }
                
                .modal-fullscreen-cat {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.96);
                    z-index: 2000;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    backdrop-filter: blur(8px);
                }
                
                .modal-fullscreen-cat img {
                    max-width: 90vw;
                    max-height: 90vh;
                    object-fit: contain;
                    border-radius: 20px;
                    box-shadow: 0 0 30px #ff3b3b;
                    animation: zoomFadeCat 0.2s ease;
                }
                
                @keyframes zoomFadeCat {
                    from { transform: scale(0.8); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                
                @media (max-width: 768px) {
                    body { padding: 1rem; }
                    h1 { font-size: 1.5rem; }
                    .productos-grid { grid-template-columns: 1fr; gap: 1.2rem; }
                    .producto-img { height: 200px; }
                }
                
                .footer-cat {
                    margin-top: 3rem;
                    text-align: center;
                    padding: 1.5rem;
                    border-top: 1px solid #2a2a2a;
                    color: #666;
                    font-size: 0.8rem;
                }
            </style>
        </head>
        <body>
            <div class="catalogo-container">
                <div class="catalogo-header">
                    <h1><i class="fas fa-paw"></i> Accesorios & Más <i class="fas fa-store"></i></h1>
                    <button class="btn-back" onclick="window.close()"><i class="fas fa-arrow-left"></i> Regresar a tienda</button>
                </div>
                <div style="text-align: center;">
                    <div class="catalogo-subtitle">
                        <i class="fas fa-tag"></i> Los mejores productos para tu mascota | Envíos disponibles
                    </div>
                </div>
                
                <div class="productos-grid" id="productosGrid"></div>
                <div class="footer-cat">
                    <i class="fas fa-dog"></i> ¿Necesitas ayuda? Escríbenos por WhatsApp <i class="fab fa-whatsapp"></i>
                </div>
            </div>
            
            <div id="modalFullCat" class="modal-fullscreen-cat">
                <img id="modalCatImg" src="" alt="Producto">
            </div>
            
            <script>
                const productosData = ${JSON.stringify(productos)};
                const container = document.getElementById('productosGrid');
                const modalCat = document.getElementById('modalFullCat');
                const modalCatImg = document.getElementById('modalCatImg');
                
                function closeModal() { 
                    modalCat.style.display = 'none'; 
                }
                modalCat.addEventListener('click', closeModal);
                modalCatImg.addEventListener('click', (e) => e.stopPropagation());
                
                function openFull(imgSrc) {
                    modalCatImg.src = imgSrc;
                    modalCat.style.display = 'flex';
                }
                
                productosData.forEach(prod => {
                    const card = document.createElement('div');
                    card.className = 'producto-card';
                    card.innerHTML = \`
                        <img src="imagenes/\${prod.img}" class="producto-img" alt="\${prod.nombre}" 
                             onerror="this.src='https://placehold.co/400x300/222/ff3b3b?text=Imagen+no+disponible'">
                        <div class="producto-info">
                            <div class="producto-nombre">\${prod.nombre}</div>
                            <div class="producto-descripcion">\${prod.descripcion}</div>
                            <div class="producto-precio">\${prod.precio} MXN</div>
                            <div class="producto-ref"><i class="fas fa-barcode"></i> Referencia: \${prod.ref}</div>
                            <button class="btn-whatsapp-producto" data-ref="\${prod.ref}" data-name="\${prod.nombre}" data-price="\${prod.precio}">
                                <i class="fab fa-whatsapp"></i> Comprar por WhatsApp
                            </button>
                        </div>
                    \`;
                    
                    const imgElem = card.querySelector('.producto-img');
                    imgElem.addEventListener('click', (e) => {
                        e.stopPropagation();
                        openFull(imgElem.src);
                    });
                    
                    const btnWP = card.querySelector('.btn-whatsapp-producto');
                    btnWP.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const nombreProd = btnWP.getAttribute('data-name');
                        const refProd = btnWP.getAttribute('data-ref');
                        const precioProd = btnWP.getAttribute('data-price');
                        const mensaje = encodeURIComponent(\`🐾 *¡Me interesa este producto!* 🐾\\n\\n📦 *Producto:* \${nombreProd}\\n🔖 *Referencia:* \${refProd}\\n💰 *Precio:* \${precioProd}\\n\\n📌 Me gustaría saber si tienen disponibilidad y formas de pago. ¡Gracias!\`);
                        window.open(\`https://wa.me/5259959068936?text=\${mensaje}\`, '_blank');
                    });
                    
                    container.appendChild(card);
                });
            <\/script>
        </body>
        </html>`;
        
        catalogWindow.document.write(htmlContent);
        catalogWindow.document.close();
    }

    // ---------- BOTONES REDES SOCIALES (EDITA AQUÍ TUS ENLACES) ----------
    const fbLink = document.getElementById('fbLink');
    const igLink = document.getElementById('igLink');
    const ttLink = document.getElementById('ttLink');
    
    // ========== ZONA PARA CAMBIAR ENLACES (MODIFICA AQUÍ) ==========
    fbLink.href = "https://www.facebook.com/profile.php?id=61564962306913&mibextid=wwXIfr&rdid=PrmsUZAMrEsUAl5P&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FmXZLwELK6Md8LPnP%2F%3Fmibextid%3DwwXIfr#";   // CAMBIA A TU LINK DE FACEBOOK
    igLink.href = "https://www.instagram.com/punkdog.mx/?fbclid=IwY2xjawRLsahleHRuA2FlbQIxMABicmlkETFkeERoQWdRZm1WVjFMdnNOc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHg0EKV9z9wtZpyiST95CBoHtovyzOurVAckT2HPvaXAKFBMQUOZCIONN1McN_aem_sLMQTDoXNqwlrvKly7iDgw";  // CAMBIA A TU LINK DE INSTAGRAM
    ttLink.href = "https://www.tiktok.com/@punkdog.mx?_t=8simycFoqlq&_r=1";    // CAMBIA A TU LINK DE TIKTOK
    // ===============================================================


    // EFECTOS VISUALES ADICIONALES
    const cards = document.querySelectorAll('.servicio-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.98)';
            setTimeout(() => { card.style.transform = ''; }, 150);
        });
    });
    
    // Animación de entrada sutil para secciones
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(sec => {
        sec.style.opacity = '0';
        sec.style.transform = 'translateY(20px)';
        sec.style.transition = 'opacity 0.6s ease, transform 0.5s ease';
        observer.observe(sec);
    });
    
    console.log("🚀 Página lista - Peluquería Canina & SPA | Estilo Punk Mascotas");
});
