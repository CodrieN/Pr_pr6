import Gallery from "./../../components/Gallery/Gallery";

function Home() {
  return (
    <>
      <section id="section1">
        <img id="img0" alt="plage" src="img/Plage.png" />
        <div id="partout">Chez vous, partout et ailleurs</div>
      </section>
      <section id="section2">
      <Gallery />
      </section>
    </>
  );
}
export default Home;
