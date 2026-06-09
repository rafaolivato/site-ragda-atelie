import React from 'react';
import './index.css';

export default function App() {
  const whatsappNumber = "5519999999999"; // Altere depois para o seu número real com DDD
  const message = encodeURIComponent("Olá! Visitei o site da Ragda e gostaria de fazer um orçamento.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* HEADER / NAV */}
      <header style={{
        padding: '20px 5%', display: 'flex', justifyContent: 'space-between', 
        alignItems: 'center', backgroundColor: 'white', borderBottom: '1px solid #EEE',
        position: 'sticky', top: 0, zIndex: 100
      }}>
        <div className="brand-logo" style={{ fontSize: '24px', fontWeight: '600', letterSpacing: '2px' }}>
          RAGDA
          <span style={{ display: 'block', fontSize: '10px', fontFamily: 'Montserrat', fontWeight: '300', letterSpacing: '1px', color: 'var(--accent)' }}>
            CONFECÇÕES & CRIATIVIDADES
          </span>
        </div>
        <nav style={{ display: 'flex', gap: '32px' }}>
          <a href="#sobre" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontSize: '14px', fontWeight: '500' }}>O Ateliê</a>
          <a href="#servicos" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontSize: '14px', fontWeight: '500' }}>Serviços</a>
          <a href="#localizacao" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontSize: '14px', fontWeight: '500' }}>Localização</a>
        </nav>
      </header>

      {/* HERO BANNER COMMERCIAL */}
      <section id="sobre" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '70vh', backgroundColor: 'var(--bg-secondary)'
      }}>
        <div style={{ padding: '8% 12%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
          <span style={{ fontSize: '12px', letterSpacing: '3px', color: 'var(--accent)', fontWeight: '600' }}>ALTA COSTURA & CONFORTO</span>
          <h1 style={{ fontSize: '46px', lineHeight: '1.2', fontWeight: '400' }}>Sua roupa com o caimento perfeito.</h1>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '15px' }}>
            Do aconchego dos pijamas premium à performance e estilo da moda esportiva. No Ateliê Ragda, combinamos ajustes impecáveis e criatividade em cada costura.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{
            backgroundColor: 'var(--text-dark)', color: 'white', padding: '14px 28px', textDecoration: 'none',
            fontSize: '13px', letterSpacing: '1px', width: 'fit-content', marginTop: '10px', fontWeight: '500'
          }}>
            FAZER ORÇAMENTO
          </a>
        </div>
        
        {/* Imagens de exibição (Banners de Pijamas e Roupas Esportivas) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', padding: '30px' }}>
          <div style={{ 
            backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1755534537492-931baf15863a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm91cGFzJTIwcGlqYW1hc3xlbnwwfHwwfHx8MA%3D%3D=600")', 
            backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px' , marginTop: '40px'
          }} title="Pijamas Premium"></div>
          <div style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600")', 
            backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px', marginTop: '40px'
          }} title="Moda Esportiva / Leggings"></div>
        </div>
      </section>

      {/* SEÇÃO SERVIÇOS */}
      <section id="servicos" style={{ padding: '80px 10%' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '400', marginBottom: '10px' }}>Nossas Especialidades</h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: 'var(--accent)', margin: '0 auto' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px' }}>
          {/* Card 1: Consertos */}
          <div style={{ background: 'white', padding: '40px 30px', textAlign: 'center', border: '1px solid #EAEAEA', borderRadius: '4px' }}>
            <i class="fa-solid fa-scissors" style={{ fontSize: '28px', color: 'var(--accent)', marginBottom: '20px' }}></i>
            <h3 style={{ fontSize: '20px', fontWeight: '400', marginBottom: '15px' }}>Consertos & Ajustes</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
              Barras, ajustes finos, reformas de roupas e adaptações para que suas peças fiquem sob medida e confortáveis no corpo.
            </p>
          </div>

          {/* Card 2: Pijamas */}
          <div style={{ background: 'white', padding: '40px 30px', textAlign: 'center', border: '1px solid #EAEAEA', borderRadius: '4px' }}>
            <i class="fa-solid fa-shirt" style={{ fontSize: '28px', color: 'var(--accent)', marginBottom: '20px' }}></i>
            <h3 style={{ fontSize: '20px', fontWeight: '400', marginBottom: '15px' }}>Pijamas Premium</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
              Confecção própria de pijamas elegantes com tecidos leves, frescos e de toque extremamente macio para o seu descanso.
            </p>
          </div>

          {/* Card 3: Roupas Esportivas */}
          <div style={{ background: 'white', padding: '40px 30px', textAlign: 'center', border: '1px solid #EAEAEA', borderRadius: '4px' }}>
            <i class="fa-solid fa-person-running" style={{ fontSize: '28px', color: 'var(--accent)', marginBottom: '20px' }}></i>
            <h3 style={{ fontSize: '20px', fontWeight: '400', marginBottom: '15px' }}>Moda Esportiva</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
              Blusinhas leves e calças legging com modelagem tecnológica, excelente elasticidade e compressão para as suas atividades físicas.
            </p>
          </div>
        </div>
      </section>

      {/* GEOLOCALIZAÇÃO COM MAPA */}
      <section id="localizacao" style={{ 
        padding: '80px 10%', backgroundColor: 'var(--bg-secondary)', 
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' 
      }}>
        <div>
          <span style={{ fontSize: '12px', letterSpacing: '2px', color: 'var(--accent)', fontWeight: '600' }}>VENHA NOS VISITAR</span>
          <h2 style={{ fontSize: '32px', fontWeight: '400', margin: '15px 0' }}>Nosso Espaço em Limeira</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.6' }}>
            Venha fazer uma visita para tirar suas medidas ou trazer suas roupas para ajustes. Atendimento com o carinho e o cuidado que você merece.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '14px' }}>
              <i class="fa-solid fa-map-pin" style={{ fontSize: '18px', color: 'var(--accent)', width: '20px' }}></i>
              <span>Avenida Dr. Fabrício Vampre, 1822 – Limeira – SP</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '14px' }}>
              <i class="fa-solid fa-clock" style={{ fontSize: '18px', color: 'var(--accent)', width: '20px' }}></i>
              <span>Segunda a Sexta: Horário Comercial</span>
            </div>
          </div>
        </div>

        {/* Google Maps Iframe Real */}
        <div style={{ height: '350px', width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <iframe 
            title="Mapa Ragda Ateliê"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.8770178499256!2d-47.4253166!3d-22.5463137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c87e28988ffeb9%3A0x7d6a5da792f026a2!2sAv.%20Dr.%20Fabr%C3%ADcio%20Vampre%2C%201822%20-%20Jardim%20Saito%2C%20Limeira%20-%20SP%2C%2013485-005!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* FOOTER & REDES SOCIAIS */}
      <footer style={{ padding: '40px 10%', backgroundColor: 'var(--text-dark)', color: 'white', marginTop: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span style={{ fontFamily: 'Playfair Display', fontSize: '20px', letterSpacing: '1px' }}>RAGDA</span>
            <p style={{ fontSize: '11px', color: '#888', marginTop: '6px' }}>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
          
          {/* Links Redes Sociais */}
          <div style={{ display: 'flex', gap: '25px' }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
              <i class="fa-brands fa-instagram" style={{ fontSize: '18px' }}></i> Instagram
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
              <i class="fa-brands fa-tiktok" style={{ fontSize: '16px' }}></i> Tik Tok
            </a>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DO WHATSAPP */}
      <a 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          position: 'fixed', bottom: '25px', right: '25px',
          backgroundColor: 'var(--whatsapp)', color: 'white',
          width: '56px', height: '56px', borderRadius: '50%', 
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
          textDecoration: 'none', fontSize: '26px'
        }}
      >
        <i class="fa-brands fa-whatsapp"></i>
      </a>

    </div>
  );
}