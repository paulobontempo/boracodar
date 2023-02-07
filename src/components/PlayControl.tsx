import { Rewind, Play, FastForward } from "phosphor-react";

export default function PlayControl() {
  return (
    <>
      <Rewind color="#E1E1E6" weight="fill" size={32} />
      <Play color="#E1E1E6" weight="fill" size={32} />
      <FastForward color="#E1E1E6" weight="fill" size={32} />
    </>
  )
}