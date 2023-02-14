export default function P003() {
  return (
    <div className="h-screen flex justify-center items-center bg-P003bg">
      <div className="flex flex-col">
        <span className="text-white font-bold text-3xl font-inter">Tipos de Botão</span>
        <span className="text-white opacity-60 font-roboto text-xl">Dentro de um layout, botões servem para destacar ações importantes a serem tomadas. <br /> Acompanhe abaixo um exemplo de tipos e propriedades.</span>
        {/* table content */}
        <div className="grid grid-cols-5 items-center mt-16 bg-P003bgTableHeader text-white text-xs">
          <div className="w-24 h-16"></div>
          <div>BOTÃO PRIMÁRIO</div>
          <div>BOTÃO SECUNDÁRIO</div>
          <div>BOTÃO TERCIÁRIO</div>
          <div>CURSOR</div>
        </div>
        <div className="grid grid-cols-5 items-center text-white text-xs">
          <div className="flex items-center justify-center bg-P003bgTableHeader w-24 h-16">DEFAULT</div>
          <div>BOTÃO PRIMÁRIO</div>
          <div>BOTÃO SECUNDÁRIO</div>
          <div>BOTÃO TERCIÁRIO</div>
          <div>CURSOR</div>
        </div>
      </div>
    </div>
  )
}