import { WEB3STORAGE_TOKEN } from './.env';

async function checkStatus(cid) {
    const client = makeStorageClient()
    const status = await client.status(cid)
    console.log(status)
    if (status) {
      // return 'html code with image files here and send to itty compiler'
    }
}

checkStatus(WEB3STORAGE_TOKEN);