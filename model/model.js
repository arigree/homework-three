export function changePage(pageName){
    console.log("pageName ", pageName);
    if (pageName == "") {
        $.get("pages/home.html", (data) => {
            $("#app").html(data);
        }).fail((error) => {
            console.log("error ", error);
        });

    }else{
        $.get(`pages/${pageName}.html`, (data) => {
            $("#app").html(data);
        }).fail((error) => {
            console.log("error ", error);
        });

    }
}