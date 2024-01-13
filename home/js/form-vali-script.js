$(document).ready(function() {
    var inputField = document.querySelector('#user_phone');
    inputField.onkeydown = function(event) {
        // Only allow if the e.key value is a number or if it's 'Backspace'
        if (isNaN(event.key) && event.key !== 'Backspace') {
            event.preventDefault();
        }
    };
    $("#download_selfie").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {} else {
            event.preventDefault()
            const img1 = new Image();
            const img3 = new Image();
            img1.src = $("#profile_pic_1").val();
            const canvas = new fabric.Canvas("canvas", {
                width: 2700,
                height: 2700,
            });
            const fabricImg = new fabric.Image(document.getElementById('bannerImg'), {
                left: 0,
                top: 0,
            });
            canvas.add(fabricImg);
            const fabricImg1 = new fabric.Image(img1, {
                top: 1504,
                left: 1557,
            });
            canvas.add(fabricImg1);
            var contentToConvert = document.createElement('div');
            var h3 = document.createElement('h3');
            var userName = $("#f_name").val();
            h3.innerText = $("#f_name").val();
            h3.style.marginTop = "5px";
            h3.style.textAlign = "center";
            contentToConvert.innerHTML = h3.outerHTML;
            contentToConvert.style.width = '100%';
            contentToConvert.style.borderRadius = "16px";
            contentToConvert.style.height = "190px";
            contentToConvert.style.textAlign = "center";
            contentToConvert.style.fontSize = "60px";
            contentToConvert.style.fontWeight = "800";
            contentToConvert.style.color = "white";
            if (userName.length <= 10) {
                contentToConvert.style.fontSize = "80px";
            }
            var imgElement = new Image();
            imgElement.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="1108" height="190"><foreignObject width="1108" height="190"><div xmlns="http://www.w3.org/1999/xhtml">' + contentToConvert.outerHTML + '</div></foreignObject></svg>');
            imgElement.onload = function() {
                var textCanvas = document.createElement('canvas');
                var context = textCanvas.getContext('2d');
                textCanvas.width = imgElement.width;
                textCanvas.height = imgElement.height;
                context.drawImage(imgElement, 0, 0);
                var imageData = textCanvas.toDataURL('image/png');
                img3.src = imageData;
                setTimeout(() => {
                    const fabricImg3 = new fabric.Image(img3, {
                        top: 2340,
                        left: 1385,
                    });
                    canvas.add(fabricImg3);
                    const dataURL = canvas.toDataURL('image/png');
                    const downloadLink = document.createElement('a');
                    downloadLink.href = dataURL;
                    downloadLink.download = `${userName.replace(' ','_')}.png`;
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    document.body.removeChild(downloadLink);
                    //Insert user data on table
                    var xhr = new XMLHttpRequest();
                    xhr.open("POST", "admin/user_insert.php", true);
                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr.onreadystatechange = function() {};
                    let user_data = $('#download_selfie').serialize();
                    xhr.send(user_data);
                    // End user data
                }, 1000);
            };
        };
        // }
    });
    $("#previewBtn").on("click", function(event) {
        if($("#f_name").val() && $("#profile_pic_1").val() ) {

            const img1 = new Image();
            const img3 = new Image();

            img1.src = $("#profile_pic_1").val();

            const canvas = new fabric.Canvas("canvas", {
                width: 2700,
                height: 2700,
            });

            const fabricImg = new fabric.Image(document.getElementById('bannerImg'), {
                left: 0,
                top: 0,
            });

            canvas.add(fabricImg);
            const fabricImg1 = new fabric.Image(img1, {
                top: 1504,
                left: 1557,
            });

            canvas.add(fabricImg1);

            var contentToConvert = document.createElement('div');
            var h3 = document.createElement('h3');

            var userName = $("#f_name").val();
            h3.innerText = $("#f_name").val();

            h3.style.marginTop = "5px";
            h3.style.textAlign = "center";
            contentToConvert.innerHTML = h3.outerHTML;
            contentToConvert.style.width = '100%';
            contentToConvert.style.borderRadius = "16px";
            contentToConvert.style.height = "190px";
            contentToConvert.style.textAlign = "center";
            contentToConvert.style.fontSize = "80px";
            contentToConvert.style.fontWeight = "800";
            contentToConvert.style.color = "white";

            if (userName.length <= 10) {
                h3.style.marginTop = "-2px";
                contentToConvert.style.fontSize = "100px";
            }

            var imgElement = new Image();

            imgElement.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="1108" height="190"><foreignObject width="1108" height="190"><div xmlns="http://www.w3.org/1999/xhtml">' + contentToConvert.outerHTML + '</div></foreignObject></svg>');
            
            imgElement.onload = function() {
                var textCanvas = document.createElement('canvas');
                var context = textCanvas.getContext('2d');
                textCanvas.width = imgElement.width;
                textCanvas.height = imgElement.height;
                context.drawImage(imgElement, 0, 0);
                var imageData = textCanvas.toDataURL('image/png');
                img3.src = imageData;
                setTimeout(() => {
                    const fabricImg3 = new fabric.Image(img3, {
                        top: 2340,
                        left: 1385,
                    });

                    canvas.add(fabricImg3);
                    const dataURL = canvas.toDataURL('image/png');
                     $("#previewImage").attr("src", dataURL);
                    // End user data
                }, 1000);
            };

        }

    })
});