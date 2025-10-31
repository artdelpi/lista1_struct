export default function PromotionsPage() {
  return (
    <div className="min-h-screen text-white flex h-full">
      {/* Sidebar simplificada */}
      <div className="w-64 bg-zinc-950 h-screen overflow-y-auto p-4 sidebar-scrollbar">
        

        {/* Seção EM ALTA */}
        <div className="mb-6">
          <div className="text-gray-400 text-sm font-bold mb-3">EM ALTA</div>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
              <span>🇧🇷</span>
              <span className="text-sm">Série A</span>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
              <span>🇧🇷</span>
              <span className="text-sm">Série B</span>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
              <span>⚽</span>
              <span className="text-sm">Futebol - Fim de Semana</span>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
              <span>🏈</span>
              <span className="text-sm">NFL</span>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
              <span>🎯</span>
              <span className="text-sm">Desafio de 6 Placares</span>
            </div>
          </div>
        </div>

        {/* Segunda seção de esportes */}
        <div className="mb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
              <span>⚽</span>
              <span className="text-sm">El Clásico</span>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
              <span>🏀</span>
              <span className="text-sm">NBA</span>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
              <span>🎾</span>
              <span className="text-sm">Tênis - Próximos</span>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
              <span>🏎️</span>
              <span className="text-sm">Grande Prêmio do México</span>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
              <span>🏆</span>
              <span className="text-sm">UCL Challenge</span>
            </div>
          </div>
        </div>

        {/* Seção A-Z */}
        <div>
          <div className="text-gray-400 text-sm font-bold mb-3">A-Z</div>
          <div className="space-y-1">
            {[
              { emoji: "🏀", name: "Basquete" },
              { emoji: "⚾", name: "Beisebol" },
              { emoji: "🥊", name: "Boxe" },
              { emoji: "🎰", name: "Cassino" },
              { emoji: "🚴", name: "Ciclismo" },
              { emoji: "🏏", name: "Críquete" },
              { emoji: "🎯", name: "Dardos" },
              { emoji: "🌟", name: "Especiais" },
              { emoji: "⛷️", name: "Esportes de Inverno" },
              { emoji: "🏎️", name: "Esportes Motorizados" },
              { emoji: "🕹️", name: "Esportes Virtuais" },
              { emoji: "🎮", name: "E-Sports" },
              { emoji: "🏑", name: "Floorball" },
              { emoji: "🏎️", name: "Fórmula 1" },
              { emoji: "⚽", name: "Futebol" },
              { emoji: "🏈", name: "Futebol Americano" },
              { emoji: "🥅", name: "Futsal" },
              { emoji: "⛳", name: "Golfe" },
              { emoji: "🤾", name: "Handebol" },
              { emoji: "🏒", name: "Hóquei no Gelo" },
              { emoji: "🥍", name: "Lacrosse" },
              { emoji: "🎱", name: "Loto" },
              { emoji: "🥋", name: "MMA" },
              { emoji: "🏐", name: "Netball" },
              { emoji: "🎾", name: "Pelota" },
              { emoji: "🏊", name: "Polo Aquático" },
              { emoji: "🏉", name: "Rugby League" },
              { emoji: "🏉", name: "Rugby Union" },
              { emoji: "🇧🇷", name: "Série A" },
              { emoji: "🎱", name: "Snooker" },
              { emoji: "🏍️", name: "Speedway" },
              { emoji: " Squash", name: "🎾" },
              { emoji: "🎾", name: "Tênis" },
              { emoji: "🏓", name: "Tênis de Mesa" },
              { emoji: "🐎", name: "Trotting" },
              { emoji: "🏆", name: "UEFA Champions League" },
              { emoji: "🏐", name: "Vôlei de Praia" },
              { emoji: "🏐", name: "Voleibol" },
              { emoji: "📊", name: "Odds menores de 2.00" }
            ].map((sport, index) => (
              <div key={index} className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
                <span>{sport.emoji}</span>
                <span className="text-sm">{sport.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conteúdo principal das promoções */}
      <div className="flex-1 p-4">
        
        <h1 className="text-gray-400 text-2xl font-bold mb-3 w-full pb-3">Promoções</h1>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center mb-8">
          {/* Seus cards de promoção aqui */}
          <div className="rounded-3xl border border-zinc-700 w-1/2 h-full min-h-[350px] flex flex-col items-center justify-center text-center relative overflow-hidden">
            <img 
              src="/images/tenis.jpg" 
              alt="Descrição" 
              className="absolute inset-0 w-full h-full object-cover filter grayscale"
            />
            {/* Gradiente sobre a imagem */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-400 via-gray-700 to-black opacity-70 mix-blend-multiply"></div>

            <h3 className="font-bold pt-10 z-10">Aposta grátis de R$50 para novos usuários</h3>
            <p className="text-sm text-gray-400 z-10 pb-10">3 apostas grátis ao fazer cadastro</p>

            <button className="absolute top-5/8 left-1/2 transform -translate-x-1/2 z-20 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-purple-600 px-8 py-4 font-bold text-white hover:from-fuchsia-600 hover:to-purple-700
             transition-all duration-200 transform hover:scale-105 shadow-lg shadow-fuchsia-500/25 cursor-pointer">
              Participar
            </button>
          </div>

          <div className="rounded-3xl border border-zinc-700 w-1/2 h-full min-h-[350px] flex flex-col items-center justify-center text-center relative overflow-hidden">
            <img 
              src="/images/luta.jpg" 
              alt="Descrição" 
              className="absolute inset-0 w-full h-full object-cover filter grayscale"
            />
            {/* Gradiente sobre a imagem */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-400 via-gray-700 to-black opacity-70 mix-blend-multiply"></div>

            <h3 className="font-bold pt-10 z-10">Cashback de 10% toda semana</h3>
            <p className="text-sm text-gray-400 z-10 pb-10">Perdeu? Devolvemos 50% em créditos</p>

            <button className="absolute top-5/8 left-1/2 transform -translate-x-1/2 z-20 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-purple-600 px-8 py-4 font-bold text-white hover:from-fuchsia-600 hover:to-purple-700
             transition-all duration-200 transform hover:scale-105 shadow-lg shadow-fuchsia-500/25 cursor-pointer">
              Participar
            </button>
          </div>
        </div>

        {/* Outra linha de promoção - CORREÇÃO DEFINITIVA */}
        <div className="rounded-3xl border border-zinc-700 p-12 w-full min-h-[500px] flex flex-col justify-center items-center relative overflow-hidden">
            <img 
              src="/images/chute.png" 
              alt="Descrição" 
              className="absolute inset-0 w-full h-full object-cover filter grayscale"
            />
            {/* Gradiente sobre a imagem - CORREÇÃO RADICAL */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-gray-400 via-gray-700 to-black opacity-80"></div>
  
          <div className="space-y-4 text-center relative z-10 w-full">
            <h3 className="font-bold text-xl">Ofertas de Pagamento Antecipado!</h3>
            <p className="text-sm text-gray-300">Disponíveis em uma variedade de esportes!</p>
            
            <div className="flex justify-center gap-4 mt-8">
              <div className="rounded-3xl bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 p-6 w-1/4 min-h-[120px] min-w-[120px] flex items-center justify-center hover:border-fuchsia-500 hover:text-fuchsia-400 transition-all duration-200 cursor-pointer">
                <h3 className="font-bold">Futebol</h3>
              </div>
              <div className="rounded-3xl bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 p-6 w-1/4 min-h-[120px] min-w-[120px] flex items-center justify-center hover:border-fuchsia-500 hover:text-fuchsia-400 transition-all duration-200 cursor-pointer">
                <h3 className="font-bold">NBA</h3>
              </div>
              <div className="rounded-3xl bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 p-6 w-1/4 min-h-[120px] min-w-[120px] flex items-center justify-center hover:border-fuchsia-500 hover:text-fuchsia-400 transition-all duration-200 cursor-pointer">
                <h3 className="font-bold">NFL</h3>
              </div>
              <div className="rounded-3xl bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 p-6 w-1/4 min-h-[120px] min-w-[120px] flex items-center justify-center hover:border-fuchsia-500 hover:text-fuchsia-400 transition-all duration-200 cursor-pointer">
                <h3 className="font-bold">Basquete</h3>
              </div>
              <div className="rounded-3xl bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 p-6 w-1/4 min-h-[120px] min-w-[120px] flex items-center justify-center hover:border-fuchsia-500 hover:text-fuchsia-400 transition-all duration-200 cursor-pointer">
                <h3 className="font-bold">Beisebol</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}