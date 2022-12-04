export default function Home(){
  return (
    <div className="home">
    <Card
      txtcolor="black"
      header=" IOB Bank "
      title="Welcome to the bank"

      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
    </div>
  );  
}
