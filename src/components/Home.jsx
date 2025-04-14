
import GridContainer from "./ui/GridContainer";
import { Link } from 'react-router-dom';


export function Home() {
    const featuresBasic = ["1 Static Websites", "SSL Certificate", "Custom Domain", "Unmetered Traffic"];
    const featuresMedium = ["2 Static Websites", "SSL Certificate", "Custom Domain", "Unmetered Traffic"];
    const featuresPro = ["4 Static Websites", "SSL Certificate", "Custom Domain", "Unmetered Traffic"];

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <br/>
                        <h1 className="text-5xl md:text-5xl font-bold mb-6">Monroe Township Fire District #1</h1>
                    </div>
                    
                    <center>

<hr/>
	<p><strong><font size="+1">Meetings are held on the second Wednesday of every month at 6:30 PM.</font></strong></p>
	<br/>
     {/*
	<p><strong><font size="+2">We are hiring a Firefighter/Fire Inspector.<br/> Applications must be completed and submitted prior to November 5th, 2024 to be eligible for the written test.<br/>
		<a href="https://forms.gle/efyM69xcTHZYQJh39"><button>Submit your application</button></a></font></strong></p><br/>
<p> Click the thumbnail below to download the application flyer.</p>
	<a href="https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/FH_application_flyer.png" target="new"><img width="200"src="https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/FH_application_flyer.png"/></a><br/>
   

    */}
    <Link to="/posterContestWinner">
     <button type="button">Winners of the 2024-2025 Fire Prevention Poster Contest
     </button>
 </Link>
 <br></br>
 <br></br>

 <font size="+1"><a href="https://diuy0t6boke2n.cloudfront.net/FD%231+Election+Results+2025.docx"><button>2025 Fire District Election Results</button></a></font><br/><br/>
	<p><font size="+1"><a href="https://youtu.be/f6yCtToEScQ"><button> Special Video Message From Our Fire Company</button></a></font> 
</p><br/>

<Link to="/elections">
     <button type="button">Previous Fire District Election results
     </button>
 </Link>
    <br/><br/>
<img src="https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/newfirehouse.jpg" width="640" height="456" alt=""/>
</center>

                </div>
            </section>
        </>
    )
}
 