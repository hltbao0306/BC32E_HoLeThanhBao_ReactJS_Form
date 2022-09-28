import {
    CAP_NHAT_SINH_VIEN,
    CHINH_SUA_SINH_VIEN,
    HANDLE_INPUT,
    HANDLE_SEARCH,
    THEM_SINH_VIEN,
    TIM_KIEM,
    XOA_SINH_VIEN,
} from './QLSinhVienType';

export const handleInputAction = (sinhVien) => {
    return {
      type: HANDLE_INPUT,
      sinhVien,
    };
  };
  
export const themSinhVenAction = (sinhVien) => {
    return {
      type: THEM_SINH_VIEN,
      sinhVien,
    };
  };
  
export const xoaSinhVienAction = (maSV) => {
    return {
      type: XOA_SINH_VIEN,
      maSV,
    };
  };
  
export const chinhSuaSinhVienAction = (sinhVien) => {
    return {
      type: CHINH_SUA_SINH_VIEN,
      sinhVien
    };
  };
  
export const capNhatSinhVienAction = (sinhVien) => {
    return {
      type: CAP_NHAT_SINH_VIEN,
      sinhVien
    };
  };
  
export const handleSearchInput = (sinhVienTimKiem) => {
    return {
      type: HANDLE_SEARCH,
      sinhVienTimKiem
    }
  }
  
export const timKiemSinhVien = (sinhVienTimKiem) => {
    return {
      type: TIM_KIEM,
      sinhVienTimKiem
    }
} 