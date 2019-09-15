function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var dataarray = allText.split("**");
                function_modal(dataarray[0], dataarray[1], dataarray[2], dataarray[3], dataarray[4], dataarray[5]);
            }
        }
    }
    rawFile.send(null);
}

// function readTextFile(file){
//     var allText = 'images/project001.jpg**CBC**Joomla,PhpMyAdmin,Chronoform**31st May, 2019**https://coxsbazarbeachclub.com**A quick brown fox jumps over a lazy dog';
//     var dataarray = allText.split("**");
//     function_modal(dataarray[0], dataarray[1], dataarray[2], dataarray[3], dataarray[4], dataarray[5]);
// }

function function_modal(imagesource, client_name, skills, date, url, description){
    var skill_array = skills.split(',');
    var skill1 = skill_array[0];
    var skill2 = skill_array[1];
    var skill3 = skill_array[2];
    var str='';
    str+='<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"';
    str+='aria-hidden="true">';
    str+='<div class="modal-dialog modal-lg modal-dialog-centered">';
    str+='<div class="modal-content">';
    str+='<div class="modal-header">';
    str+='<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
    str+='<span aria-hidden="true">&times;</span>';
    str+='</button>';
    str+='</div>';
    str+='<div class="modal-body">';
    str+='<div class="row pb-4 mb-2">';
    str+='<div class="col-sm-6">';
    str+='<div class="img-thumbnail border-0 border-radius-0 p-0 d-block">';
    str+='<img src="'+imagesource+'" class="img-fluid border-radius-0" alt="">';
    str+='</div>';
    str+='</div>';
    str+='<div class="col-sm-6">';
    str+='<h2 class="text-color-dark font-weight-bold text-4 mb-0 mt-4">Project Details</h2>';
    str+='<ul class="list list-icons list-primary list-borders text-2">';
    str+='<li>';
    str+='<i class="fa fa-caret-right left-10"></i> <strong class="text-color-primary">Client: </strong>'+client_name;
    str+='</li>';
    str+='<li>';
    str+='<i class="fa fa-caret-right left-10"></i> <strong class="text-color-primary">Date: </strong>'+date;
    str+='</li>';
    str+='<li>';
    str+='<i class="fa fa-caret-right left-10"></i> <strong class="text-color-primary">Skills: </strong>';
    str+='<span class="badge badge-dark badge-sm badge-pill px-2 py-1 ml-1">'+skill1+'</span>';
    str+='<span class="badge badge-dark badge-sm badge-pill px-2 py-1 ml-1">'+skill2+'</span>';
    str+='<span class="badge badge-dark badge-sm badge-pill px-2 py-1 ml-1">'+skill3+'</span>';
    str+='</li>';
    str+='<li>';
    str+='<i class="fa fa-caret-right left-10"></i> <strong class="text-color-primary">Project URL: </strong> <span class=';
    str+='"text-dark">'+url+'</span>';
    str+='</li>';
    str+='</ul>';
    str+='</div>';
    str+='</div>';
    str+='<div>';
    str+='<h2 class="text-color-dark font-weight-bold text-4 mb-0">Project Description</h2>';
    str+='<p style="font-size: 13px;">'+description+'</p>';
    str+='</div>';
    str+='</div>';
    str+='</div>';
    str+='</div>';
    str+='</div>';
    $('#modal-p').html(str);
    $('#exampleModal').modal('show');
}