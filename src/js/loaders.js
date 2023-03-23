export const loaderMun = async () => {  
    const res = await fetch('https://eldenring.fanapis.com/api/ammos?limit=20&page=0')
    const array = await res.json();
    return array.data
}

export const loaderArmor = async () => {  
    const res = await fetch('https://eldenring.fanapis.com/api/armors?limit=20&page=0')
    const array = await res.json();
    return array.data
}



export async function SigtPag(page, section, setMuns,setArmors) {
    switch (section) {
        case 'ammos':
            var res = await fetch(`https://eldenring.fanapis.com/api/${section}?limit=20&page=${page}`)
            var array = await res.json();
            setMuns(array.data)
            break;
        case 'armors':
            var res = await fetch(`https://eldenring.fanapis.com/api/${section}?limit=20&page=${page}`)
            var array = await res.json();
            setArmors(array.data)
            break;
        default:
            var res = await fetch(`https://eldenring.fanapis.com/api/${section}?limit=20&page=${page}`)
            var array = await res.json();
            setMuns(array.data)
            break;
    }
}

