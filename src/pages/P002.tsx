import { X } from "phosphor-react";
import { useState } from "react"

export default function P002() {
  const [showGif, setShowGif] = useState(false);

  const handleCLick = () => {
    console.log('clicou')
    setShowGif(!showGif)
  }

  return (
    <div className="w-screen h-screen bg-P002bg">
      <div className="flex justify-center items-center h-screen">
        {/* Sofa component */}
        <div>
          <div className="flex justify-end mr-16 h-[22px]">
            {!showGif && <img src="/P002-360.png" onClick={handleCLick} alt="Clique para girar o sofá!" />}
            {showGif && <X onClick={handleCLick} />}
          </div>
          <div>
            {!showGif && <img src="/P002-sofa.png" alt="Sofa" />}
            {showGif && <img src="/P002-sofa.png" alt="Sofa" />}
          </div>
        </div>
        {/* Info Component */}
        <div className="text-P002Heading">
          <div className="text-[10px] font-light font-lato">CÓDIGO: 42404</div>
          <div className="mt-3 text-3xl font-crimsonPro font-semibold">Sofá Margot II - Rosé</div>
          <div className="mt-3 font-normal text-base font-lato">R$ 4.000 </div>
          <div className="w-2/3 mt-3 border border-P002Heading rounded-full px-4 py-2">ADICIONAR À CESTA</div>
        </div>
      </div>
    </div>
  )
}