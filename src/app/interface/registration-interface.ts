export interface RegisterStudent{
    fname: string,
    lname:string,
    age:string,
    email:string,
    mobile:string,
    gender:string,
    profile_pic:string,
    state:string,
    district:string,
    city:string,
    pincode:string
}

export interface getStatesI{
    state_id:number,
    state_name:string
}
export interface getDistrictI{
    district_id:number,
    district_name:string
}
export interface getCityI{
    city_id:number,
    city_name:string
}