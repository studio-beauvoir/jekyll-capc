// token local-storage-app-id
const LSA_id = "capc-29840";

function LSformateKey(key) {return `${LSA_id}-${key}`}

function LSgetItem(key, dft) {
    const item = localStorage.getItem(LSformateKey(key))
    console.log(item);
    return item||dft;
}

function LSsetItem(key, value) {localStorage.setItem(LSformateKey(key), value)}