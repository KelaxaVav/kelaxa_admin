// import { api_base_url } from "../configs/consts";

export const getImageUrl = (image?: any) => {
    return image ? `${process.env.API_BASE_URL}${image}` : `/no-image-available.jpg`
};

export const firstLetterCapital = (text: string) => {
    const firstLetter = text?.slice(0, 1);
    const followings = text?.slice(1);

    return `${firstLetter?.toLocaleUpperCase()}${followings}`;
};

// console.log(firstLetterCapital("jhfbjkhj"));


export const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, setState: React.Dispatch<any>) => {
    const { name, value } = e.target;
    // if (e.target.type == "checkbox") {
    //     const { name } = e.target;
    //     setData({ ...data, [name]: !data.status });
    //     return;
    // }

    setState((prevState: any) => {
        return {
            ...prevState,
            [name]: value,
        }
    });
}

export const imageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, setState: React.Dispatch<any>) => {
    const { name, files } = e.target;
    const fileLength = files?.length || 0;

    if (fileLength > 0) {
        const imageFiles = files!;
        const imageSrc = URL.createObjectURL(imageFiles[0]);
        // setData({ ...data, [name]: imageSrc, imageFile: imageFiles[0] });
        setState((prevState: any) => {
            return {
                ...prevState,
                [name]: imageSrc,
                [`${name}File`]: imageFiles[0]
            }
        });
    }
}
