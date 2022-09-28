import React, { Component } from 'react'
import { connect } from 'react-redux';

class DanhSachSinhVien extends Component {
    render() {
        const { mangSinhVien } = this.props
        return (
            <form className='mt-10'>
                <div className='overflow-hidden text-justify'>
                    <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                        <thead className="bg-black p-5 text-white text-lg">
                            <tr className="">
                                <th className="p-3">Mã SV</th>
                                <th className="p-3">Họ tên</th>
                                <th className="p-3">Số điện thoại</th>
                                <th className="p-3">Email</th>
                                <th className="p-3"></th>
                            </tr>
                        </thead>
                        <tbody className="border-b text-lg">
                            {mangSinhVien.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.maSV}</td>
                                    <td>{item.hoTenSV}</td>
                                    <td>{item.soDienThoai}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <button className="p-4 rounded-lg mr-5 bg-red-500"
                                            onClick={() => {
                                                this.props.dispatch({
                                                    type: 'XOA_SINH_VIEN',
                                                    payload: item.id,
                                                })
                                            }}
                                        >
                                            Xoá
                                        </button>
                                        <button className="p-4 rounded-lg ml-5 bg-green-500"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.props.dispatch({
                                                    type: 'CHINH_SUA_SINH_VIEN',
                                                    payload: item.id,
                                                })
                                            }}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.QLSinhVienReducer,
        sinhVienTimKiem: state.QLSinhVienReducer.sinhVienTimKiem,
    }
}

export default connect(mapStateToProps)(DanhSachSinhVien)