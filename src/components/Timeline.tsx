type TimelineProps = {
  size: 'short' | 'medium'
}

export default function Timeline({ size }: TimelineProps) {
  return (
    <>
    <div className="flex flex-row mt-7">
      {size == 'short' && <div className="w-40 bg-numbersNext rounded-lg" />}
      {size == 'medium' && <div className="w-80 bg-numbersNext rounded-lg" />}
      <div className="w-10 bg-numbersNext opacity-30 h-[6px] rounded-r-lg" />
    </div>
    <div className="flex flex-row justify-between h-2 text-numbers mt-2">
      <div className="">03:20</div>
      <div className="">00:12</div>
    </div>
    </>
  )
}