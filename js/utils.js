// token local-storage-app-id
const LSA_id = "capc-29840";

function LSformateKey(key) {return `${LSA_id}-${key}`}

function LSgetItem(key, dft) {
    const item = localStorage.getItem(LSformateKey(key))
    return item==="null"?dft:item;
}

function LSsetItem(key, value) {localStorage.setItem(LSformateKey(key), value)}