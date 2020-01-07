var maleNames = ["the_Big_poppa84", "The_god69", "The_pro445", "is_the_Best21", "69696969", "42069", "Gets_Kills95", "Is_Goated", "120390", "The_Master", "the_flash97", "Plays_Games", "is_Daddy"];

var femaleNames = ["UwU", "The_Kawaii_Girl", "The_Huntress45", "Kunoichi89", "Is_Fabulous28", "The_Man_Slayer92", "Likes_Unicorns67", "Eats_Big_Macs", "The_Hot_Dog", "Joe_Mama", "The_Sprinkler", "YT", "The_Baddie", "The_Baby"];

document.querySelector(".submitBtn").addEventListener('click', function() {
    var fName = document.querySelector(".fName").value;
    var lName = document.querySelector(".lName").value;
    var gender = document.querySelector("#gender").value;
    var randomM = Math.floor(Math.random() * (maleNames.length));
    var randomF = Math.floor(Math.random() * (femaleNames.length));

    if (fName === "Terrence" && lName === "Bremner") {
        alert("FBI open up!");
    } else {
        switch (fName) {
            case "":
                alert("Please complete all fields below");
                break;

            default:
                switch (lName) {
                    case "":
                        alert("Please complete all fields below.");
                        break;


                    default:
                        switch (gender) {

                            case "Male":
                                document.querySelector("p").innerHTML = (fName + "_" + lName + "_" + maleNames[randomM].toLowerCase());
                                break;
                                //toLowerCase instead of toUpperCase
                            case "Female":
                                document.querySelector("p").innerHTML = (fName + "_" + lName + "_" + femaleNames[randomF].toLowerCase());
                                break;
                            default:
                                alert("Please complete all fields below.");
                                break;
                        }


                }
        }
    }
});