export default function PromotionsPage() {
  return (
    <div className="min-h-screen text-white p-4">
      <h3 className="text-gray-400 text-3xl font-bold mb-3 w-full pb-3">⚡ Jogos ao vivo (5)</h3>
      <h1 className="text-gray-400 text-2xl font-bold mb-3 w-full pb-3">⚽ Futebol</h1>
      
      {/* Card de evento */}
      <div className="border border-gray-700 rounded-lg p-4 mb-4 hover:border-fuchsia-400 hover:text-fuchsia-400 transition-all duration-200 cursor-pointer cursor-pointer">
        <div className="flex items-center justify-between">
          
          {/* Times e placar */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Muras United</span>
              <span className="bg-blue-600 px-2 py-1 rounded text-sm font-bold w-8 h-8 flex items-center justify-center">0</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Safa Beirut</span>
              <span className="bg-blue-600 px-2 py-1 rounded text-sm font-bold w-8 h-8 flex items-center justify-center">0</span>
            </div>
          </div>

          {/* Odds */}
          <div className="flex gap-2 ml-4">
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded border border-gray-600 transition-colors">
              <div className="text-xs">1</div>
              <div className="font-bold text-green-400">1.93</div>
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded border border-gray-600 transition-colors">
              <div className="text-xs">X</div>
              <div className="font-bold text-green-400">3.15</div>
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded border border-gray-600 transition-colors">
              <div className="text-xs">2</div>
              <div className="font-bold text-green-400">3.65</div>
            </button>
          </div>

        </div>

        {/* Tempo e ações */}
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-700">
          <span className="text-sm text-gray-400">🔴 0:00</span>
          <div className="flex gap-3">
            <button className="text-gray-400 hover:text-white">
              📊
            </button>
            <button className="text-gray-400 hover:text-yellow-400">
              ⭐
            </button>
          </div>
        </div>
      </div>

      {/* Trecho para adicionar mais jogos */}
      <div className="border border-gray-700 rounded-lg p-4 mb-4 hover:border-fuchsia-400 hover:text-fuchsia-400 transition-all duration-200 cursor-pointer">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Wits University</span>
              <span className="bg-blue-600 px-2 py-1 rounded text-sm font-bold w-8 h-8 flex items-center justify-center">1</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">University of Johannesburg</span>
              <span className="bg-blue-600 px-2 py-1 rounded text-sm font-bold w-8 h-8 flex items-center justify-center">2</span>
            </div>
          </div>
          <div className="flex gap-2 ml-4">
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded border border-gray-600 transition-colors">
              <div className="text-xs">1</div>
              <div className="font-bold text-green-400">2.10</div>
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded border border-gray-600 transition-colors">
              <div className="text-xs">X</div>
              <div className="font-bold text-green-400">3.25</div>
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded border border-gray-600 transition-colors">
              <div className="text-xs">2</div>
              <div className="font-bold text-green-400">2.80</div>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-700">
          <span className="text-sm text-gray-400">🔴 45:00</span>
          <div className="flex gap-3">
            <button className="text-gray-400 hover:text-white">📊</button>
            <button className="text-gray-400 hover:text-yellow-400">⭐</button>
          </div>
        </div>
      </div>

      {/* Jogo 3 */}
      <div className="border border-gray-700 rounded-lg p-4 mb-4 hover:border-fuchsia-400 hover:text-fuchsia-400 transition-all duration-200 cursor-pointer">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Real Madrid</span>
              <span className="bg-blue-600 px-2 py-1 rounded text-sm font-bold w-8 h-8 flex items-center justify-center">2</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Barcelona</span>
              <span className="bg-blue-600 px-2 py-1 rounded text-sm font-bold w-8 h-8 flex items-center justify-center">1</span>
            </div>
          </div>
          <div className="flex gap-2 ml-4">
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded border border-gray-600 transition-colors">
              <div className="text-xs">1</div>
              <div className="font-bold text-green-400">1.75</div>
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded border border-gray-600 transition-colors">
              <div className="text-xs">X</div>
              <div className="font-bold text-green-400">3.50</div>
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded border border-gray-600 transition-colors">
              <div className="text-xs">2</div>
              <div className="font-bold text-green-400">4.20</div>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-700">
          <span className="text-sm text-gray-400">🔴 67:30</span>
          <div className="flex gap-3">
            <button className="text-gray-400 hover:text-white">📊</button>
            <button className="text-gray-400 hover:text-yellow-400">⭐</button>
          </div>
        </div>
      </div>

      {/* Jogo 4 */}
      <div className="border border-gray-700 rounded-lg p-4 mb-4 hover:border-fuchsia-400 hover:text-fuchsia-400 transition-all duration-200 cursor-pointer">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Manchester United</span>
              <span className="bg-blue-600 px-2 py-1 rounded text-sm font-bold w-8 h-8 flex items-center justify-center">0</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Liverpool</span>
              <span className="bg-blue-600 px-2 py-1 rounded text-sm font-bold w-8 h-8 flex items-center justify-center">0</span>
            </div>
          </div>
          <div className="flex gap-2 ml-4">
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded border border-gray-600 transition-colors">
              <div className="text-xs">1</div>
              <div className="font-bold text-green-400">2.30</div>
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded border border-gray-600 transition-colors">
              <div className="text-xs">X</div>
              <div className="font-bold text-green-400">3.10</div>
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded border border-gray-600 transition-colors">
              <div className="text-xs">2</div>
              <div className="font-bold text-green-400">2.95</div>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-700">
          <span className="text-sm text-gray-400">🔴 23:15</span>
          <div className="flex gap-3">
            <button className="text-gray-400 hover:text-white">📊</button>
            <button className="text-gray-400 hover:text-yellow-400">⭐</button>
          </div>
        </div>
      </div>

      {/* Jogo 5 */}
      <div className="border border-gray-700 rounded-lg p-4 mb-4 hover:border-fuchsia-400 hover:text-fuchsia-400 transition-all duration-200 cursor-pointer">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Bayern Munich</span>
              <span className="bg-blue-600 px-2 py-1 rounded text-sm font-bold w-8 h-8 flex items-center justify-center">3</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Borussia Dortmund</span>
              <span className="bg-blue-600 px-2 py-1 rounded text-sm font-bold w-8 h-8 flex items-center justify-center">1</span>
            </div>
          </div>
          <div className="flex gap-2 ml-4">
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded border border-gray-600 transition-colors">
              <div className="text-xs">1</div>
              <div className="font-bold text-green-400">1.45</div>
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded border border-gray-600 transition-colors">
              <div className="text-xs">X</div>
              <div className="font-bold text-green-400">4.00</div>
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded border border-gray-600 transition-colors">
              <div className="text-xs">2</div>
              <div className="font-bold text-green-400">5.50</div>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-700">
          <span className="text-sm text-gray-400">🔴 78:45</span>
          <div className="flex gap-3">
            <button className="text-gray-400 hover:text-white">📊</button>
            <button className="text-gray-400 hover:text-yellow-400">⭐</button>
          </div>
        </div>
      </div>

    </div>
  );
}