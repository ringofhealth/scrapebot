var casper = require('casper').create(/*{
	clientScripts: ['includes/jquery.js'] listing-description
}*/);
//ar urls = ['https://www.places4students.com/Places/Details.aspx?HousingID=nvtwD6%2bRZhM%3d&SchoolID=8SnFMiLCDsA%3d','https://www.places4students.com/Places/Details.aspx?HousingID=7RxbczgIbVU%3d&SchoolID=8SnFMiLCDsA%3d'];
var urls = ["https://www.places4students.com/Places/Details.aspx?HousingID=OA3hOp1Lp00%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=R59fUHfKQBA%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=s8KzibBPUT8%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=nvtwD6%2bRZhM%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=20fPuKnfS%2bE%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=1mvic4RezUA%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=jzI52jywSGY%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=%2byNGwLD4W70%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=9hFYONun%2b1Q%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=PdjI%2bxs%2b4Jg%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=zu0O3JAGIwk%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=2zJoGOj%2fUmA%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=q%2fZ1u29iSR8%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=zxm5j2kxE2g%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=RCvOOzI%2fYQY%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=cMI82jvpvPE%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=3J%2bXP9lNNAA%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=zS6ppiHG6xM%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=Luelo4ur10M%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=c5iNxEBLOzo%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=QMdmn2u%2frbA%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=8NLeCQ3oPKY%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=eoQrtH3VF5c%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=nPbXbA%2bg20U%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=dMviVROXEB8%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=CH5Cw86YV%2fQ%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=GNXpFT1hvv8%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=7%2bqhAkBseIk%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=tnxUNqM77%2bs%3d&SchoolID=8SnFMiLCDsA%3d"
,"https://www.places4students.com/Places/Details.aspx?HousingID=UKl2%2bhLWUh4%3d&SchoolID=8SnFMiLCDsA%3d"
];
/*casper.start("https://www.places4students.com/Places/PropertyListings.aspx?SchoolID=8SnFMiLCDsA%3d",function(){
	this.page.injectJs('./jquery.js');
	console.log(this.getTitle() + " " + this.exists('input#ContentPlaceHolder2_btnAgere'));
	console.log(this.evaluate(function(){
		//var x;
		//document.getElementById('ContentPlaceHolder2_btnAgere').click();
		$("#ContentPlaceHolder2_btnAgere")
		return $(document).attr("title") ;
		
	}));

	console.log(this.getTitle() + " " + this.exists('div.listing-title'));
	

//scape links into array
	urls=this.evaluate(function(){
		var links = [];
		$('div.listing-title a').each(function(index){
			var link = $(this).attr('href').trim();
			links[index]="https://www.places4students.com/Places/"+link;
		});
		return links;
	});
	console.log(urls);
});*/

casper.start(function{
	var fs = require('fs');
	var path = 'output.txt';
	var content = 'Hello World!';
	fs.write(path, content, 'w');
});




/*casper.start().eachThen(urls, function(response) {
  this.thenOpen(response.data, function(response) {
  	this.page.injectJs('./jquery.js');
  	var values = this.evaluate(function(){
  		var text = [];
  			$("div.loaction-container table tr").each(function(index){
  				var str = $(this).text().trim();
  				str = str.substr(str.indexOf(':')+1).trim()

  				if(str.toLowerCase().indexOf('view google map')===-1 && str.length < 150)
  					text[index] = str;
  				else
  					text[index] = null;

  			});
  		return text;
  	});
  	var fs = require('fs');
  	for(var i = 0; i<urls.length; i++)
  	{
  		if(urls[i])
  			fs.write("propertydata_p4s.txt",urls[i], 'w');
  	}
  	fs.write("propertydata_p4s.txt","\n", 'w');
  });
})*/
casper.run();