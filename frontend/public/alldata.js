import react from "react";
console.log('Datas of our customer')

function AllData(props) {
    const [data, setData] = React.useState([]);


    // React.useEffect(() => {

        let alldata={
        textAlign:"center",
        margin:"auto",
        width:"35%",
        padding:"100px",
        paddingTop:"10%"
        }
async function getall(){
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())

            .then(data => {
            //     console.log(data);
                setData(data);
            });
            // .then((res)=>{
            //     console.log(res);
            // })
        }
    // }, []);
    React.useEffect(()=>{
getall();
    },[])
        

    return (<>
        {/* <h5>All Data in Store:</h5> */}
        {/* <div style={style}> */}
      <th style={alldata}>
            <td>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Balance</th>
                        </tr>
                        {data.map((data,i)=>
                        
                        <tr key={i}>
                        
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.balance}</td>
                            </tr>
                        )}
                        
            
                </tbody>
            </table>
            </td>
            </th>
        {/* {data} */}
    </>);
}

