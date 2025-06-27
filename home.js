        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(15, 15, 35, 0.98)';
            } else {
                header.style.background = 'rgba(15, 15, 35, 0.95)';
            }
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

     function startDemo() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease;
    `;

   overlay.innerHTML = `
    <div style="background: linear-gradient(135deg, #1A1A2E, #16213E); padding: 3rem; border-radius: 20px; text-align: center; max-width: 500px; border: 1px solid rgba(0, 212, 255, 0.3);">
        <h2 style="color: #00D4FF; margin-bottom: 1rem;"> Mode</h2>
        <p style="color: rgba(255,255,255,0.8); margin-bottom: 2rem;">Camera access required for movement analysis.</p>
        <div style="background: #0F0F23; padding: 2rem; border-radius: 15px; margin: 1rem 0;">
            <div style="color: #00FF88; font-weight: bold;">🟢 Ready to analyze movements</div>
            <div style="color: rgba(255,255,255,0.6); margin-top: 0.5rem;">Position yourself in front of the camera</div>
        </div>
        <a href="motion_rework.html" style="display: inline-block; background: linear-gradient(45deg, #00D4FF, #5A67D8); color: white; border: none; padding: 1rem 2rem; border-radius: 50px; cursor: pointer; font-weight: 600; text-decoration: none;">
            Start
        </a>
    </div>
`;

    document.body.appendChild(overlay);

    overlay.onclick = (e) => {
        if (e.target === overlay) closeDemo();
    };
}


        function closeDemo() {
            const overlay = document.querySelector('div[style*="position: fixed"]');
            if (overlay) {
                overlay.style.animation = 'fadeOut 0.3s ease';
                setTimeout(() => overlay.remove(), 300);
            }
        }

        function learnMore() {
            document.querySelector('#features').scrollIntoView({
                behavior: 'smooth'
            });
        }

        function showFeatureDetail(feature) {
            const details = {
                'analysis': 'we uses advanced pose estimation and biomechanical analysis to provide detailed insights into your movement patterns, helping you optimize performance and prevent injuries.',
                'personalized': 'Machine learning algorithms adapt to your unique physiology and goals, creating dynamic training programs that evolve as you progress.',
                'correction': 'Real-time feedback system provides instant corrections through audio cues and visual indicators, ensuring you maintain proper form throughout your workout.'
            };
            
            alert(details[feature] || 'Feature details coming soon!');
        }

        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
        document.head.appendChild(style);

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.card').forEach(card => {
            observer.observe(card);
        });