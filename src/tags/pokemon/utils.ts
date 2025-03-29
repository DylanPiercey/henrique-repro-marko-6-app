export function getTypeColor(type) {
    const typeColors = {
      normal: "bg-gray-400",
      fire: "bg-red-500 text-white",
      water: "bg-blue-500 text-white",
      grass: "bg-green-500 text-white",
      electric: "bg-yellow-400",
      ice: "bg-blue-200",
      fighting: "bg-red-700 text-white",
      poison: "bg-purple-500 text-white",
      ground: "bg-yellow-600 text-white",
      flying: "bg-indigo-400 text-white",
      psychic: "bg-pink-500 text-white",
      bug: "bg-lime-500",
      rock: "bg-yellow-800 text-white",
      ghost: "bg-purple-700 text-white",
      dark: "bg-gray-700 text-white",
      dragon: "bg-indigo-700 text-white",
      steel: "bg-gray-500 text-white",
      fairy: "bg-pink-300"
    };
    return typeColors[type] || "bg-gray-400";
  }