import Header from "./Header"
import Card from "./Card"
import Data from "./Data"
function App() {
  const cards = Data.map(function(item) {
    return(
      <Card
      title={item.title}
      img={item.img}
      location={item.location}
      mapLink={item.mapLink}
      startDate={item.startDate}
      endDate= {item.endDate}
      about={item.about}
      />

    )
  })

  return (
    <div className="w-full h-fill  border-4 border-gray-300 rounded-xl ">
      <Header/>
      <div>
        {cards}
      </div>
    </div>
  );
}

export default App;
