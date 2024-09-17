export default function Home() {
  const imie = "Maciej";
  const nazwisko = "Książek";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Arial",
      }}
    >
      <h1>
        {imie} {nazwisko}
      </h1>
    </div>
  );
}
