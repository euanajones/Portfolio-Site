import ContainerLeft from "./ContainerLeft"
import ContainerRight from "./ContainerRight"

function Body() {

  return (
    <main className="bg-(--background) flex flex-row">
      <ContainerLeft />
      <ContainerRight />
    </main>
  )
}

export default Body
