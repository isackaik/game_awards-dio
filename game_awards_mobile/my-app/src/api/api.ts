const baseApiUrl= "http://10.0.0.103:8080/api/"

export async function clientGetGames(){

    const response = await fetch (`${baseApiUrl}games`)
    const json = await response.json()

    return json

}

export async function clientSendingVotes(id: number){

    const requestOption = {
        method: 'PATCH'
    }

    const response = await fetch (`${baseApiUrl}games/${id}/vote`, requestOption)
    .then( response => response.text())
    .then( result => console.log(result))
    .catch( error => console.log('error', error))
}

export async function clientGetWinner(){
    const response = await fetch (`${baseApiUrl}games`)
    const json = await response.json()

    return json[0]
}