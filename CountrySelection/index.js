function myfunction(){
    var country = document.getElementById("country").value;
    var capital;
    var image;
    switch(country){
        case 'India': capital = "New Delhi";
                      image = "https://bit.ly/2EkYQg2";         
                      break;
        case 'South Korea': capital = "Seoul";
                    image = "https://bit.ly/2pTOTvQ";
                        break;
        case 'Japan' : capital ="Tokyo";
                    image ="https://bit.ly/2PzqC9x";
                        break;
        case 'China' : capital = "Beijing";
                    image = "https://bit.ly/2IUvH9X";
                        break;
        case 'Canada' : capital = "Ottawa";
                    image = "https://bit.ly/2PxSwCV";
                        break;
    }
    document.getElementById("capital").innerHTML="<br>"+capital;
    document.getElementById("image").setAttribute("src",image);
}