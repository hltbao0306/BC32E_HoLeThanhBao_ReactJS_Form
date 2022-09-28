import React, { Component } from "react";
import { connect } from "react-redux";
import { 
        xoaSinhVienAction, chinhSuaSinhVienAction,
    } from "../redux/QLSinhVienAction";

class TimKiemSinhVien extends Component {
    renderTableSinhVienTimKiem = () => {
        let { mangSinhVienTimKiem } = this.props;
        if (mangSinhVienTimKiem.length === 0) {
        return (
            <tr>
            <td className="text-danger">KHÔNG TÌM THẤY SINH VIÊN</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
        );
        } else {
        return mangSinhVienTimKiem.map((sinhVien, index) => {
            return (
            <tr key={index}>
                <td>{sinhVien.maSV}</td>
                <td>{sinhVien.hoTenSV}</td>
                <td>{sinhVien.soDienThoai}</td>
                <td>{sinhVien.email}</td>
                <td>
                <button
                    className="btn btn-outline-danger mx-3"
                    onClick={() => {
                    this.props.dispatch(xoaSinhVienAction(sinhVien.maSV));
                    }}
                >
                    Xóa
                </button>
                <button
                    className="btn btn-outline-warning"
                    onClick={() => {
                    this.props.dispatch(chinhSuaSinhVienAction(sinhVien));
                    }}
                >
                    Chỉnh sửa
                </button>
                </td>
            </tr>
            );
        });
        }
    }
    render() {
        return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title" id="exampleModalLabel">
                    THÔNG TIN SINH VIÊN
                    </h4>
                </div>
                <div className="modal-body">
                    <table className="table">
                    <thead className="bg-dark text-white">
                        <tr>
                        <th>Mã Sinh Viên</th>
                        <th>Họ và tên</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th />
                        </tr>
                    </thead>
                    <tbody>{this.renderTableSinhVienTimKiem()}</tbody>
                    </table>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        mangSinhVienTimKiem: state.QLSinhVienReducer.mangSinhVienTimKiem,
    };
};
export default connect(mapStateToProps)(TimKiemSinhVien);