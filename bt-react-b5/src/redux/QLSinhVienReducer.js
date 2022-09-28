import {
    CAP_NHAT_SINH_VIEN,
    CHINH_SUA_SINH_VIEN,
    HANDLE_INPUT,
    THEM_SINH_VIEN,
    XOA_SINH_VIEN,
} from './QLSinhVienType';

const stateDefault = {
    mangSinhVien: [
        // {
        //     id: '123456',
        //     maSV: '1111',
        //     hoTenSV: 'Hồ Bảo',
        //     email: 'abc@gmail.com',
        //     soDienThoai: 8487654321,
        // },
        // {
        //     id: '987654',
        //     maSV: '2222',
        //     hoTenSV: 'Bảo Bảo',
        //     email: 'abc@gmail.com',
        //     soDienThoai: 8487654321,
        // },
    ],
    selectedUser: null,

    //Tìm kiếm sinh viên
    mangSinhVienTimKiem: [
        // { maSV: "999", hoTenSV: "hahaha", soDienThoai: "999999999", email: "abc@gmail.com" },
    ],
    sinhVienTimKiem: {
        search: '',
        maSV: '',
        // hoTenSV: '',
        // soDienThoai: '',
        // email: '',
    }
}

export const QLSinhVienReducer = (state = stateDefault, {type, payload}) => {
    switch(type) {
        case 'THEM_SINH_VIEN': {
            const data = [...state.mangSinhVien]
            const sv = { ...payload, id: Date.now() }
            data.push(sv)
            return { ...state, mangSinhVien: data }
        }
        case 'XOA_SINH_VIEN': {
            const data = [...state.mangSinhVien.filter(item => item.id !== payload)]
            return { ...state, mangSinhVien: data }
        }
        case 'CHINH_SUA_SINH_VIEN': {
            const sv = state.mangSinhVien.find(item => item.id === payload)
            return { ...state, selectedUser: sv }
        }
        case 'CAP_NHAT_SINH_VIEN': {
            const newSVList = state.mangSinhVien.map((item) => 
                item.id === payload.id ? payload : item
            )
            state.selectedUser = null

            return { ...state, mangSinhVien: newSVList}
        }
          
        case 'TIM_KIEM': {
            const searchSV = state.mangSinhVien.filter((sv)=> 
                sv.maSV === payload.maSV ||
                sv.hoTen === payload.hoTen ||
                sv.soDienThoai === payload.soDienThoai ||
                sv.email === payload.email
                    ? true : false
            )
            return { ...state, mangSinhVien: searchSV };
        }

        default: return state
    }
}