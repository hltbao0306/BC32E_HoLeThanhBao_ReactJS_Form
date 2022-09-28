import React, { Component } from 'react'
import { connect } from 'react-redux';

class DangKySinhVien extends Component {
    state = {
        sinhVien: {
            maSV: "",
            hoTenSV: "",
            soDienThoai: "",
            email: "",
        },
        errors: {},
            // maSV: "",
            // hoTenSV: "",
            // soDienThoai: "",
            // email: "",
        search: {
            maSV: "",
            hoTenSV: "",
            soDienThoai: "",
            email: "",
        }
    }

    handleState = (event) => {
        const { name, value } = event.target;
        this.setState({
            sinhVien: {
                ...this.state.sinhVien,
                [name]: value,
            }
        })
    }

    handleBlur = (event) => {
        const {
            name,
            title,
            minLength,
            maxLength,
            validity: { valueMissing, tooShort, patternMismatch },
        } = event.target
        console.log(patternMismatch);
        let mess = ''
        if (valueMissing) {
            mess = `${title} không được bỏ trống!`
        }
        console.log(tooShort);
        if (tooShort) {
            mess = `${title} phải từ ${minLength} đến ${maxLength} ký tự!`
        }
        if (patternMismatch) {
            mess = `${title} không đúng định dạng!`
        }
        this.setState({
            errors: {
                ...this.state.errors,
                [name]: mess,
            },
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (!event.target.checkValidity()) {
            return
        }

        this.props.dispatch({
            type: this.props.selectedUser ? "CAP_NHAT_SINH_VIEN" : "THEM_SINH_VIEN",
            payload: this.state.sinhVien,
        });

        this.setState({
            sinhVien: {
                maSV: "",
                hoTenSV: "",
                soDienThoai: "",
                email: "",
            }
        })
    }

    changeSearch = (event) => {
        const { value } = event.target;
        this.setState({
            search: {
                ...this.state.search,
                maSV: value,
                hoTen: value,
                soDienThoai: value,
                email: value,
            },
        });
    };
    
    handleSearch = (event) => {
        this.props.dispatch({
            type: "TIM_KIEM",
            payload: this.state.search,
        });
    };

    //Chuyển props thành state nội bộ của component
    static getDerivedStateFromProps = (nextProps, currentState) => {
        console.log(nextProps, currentState);
        if (nextProps.selectedUser && nextProps.selectedUser.id !== currentState.sinhVien.id) {
            currentState.sinhVien = nextProps.selectedUser;
        }
        return currentState
    }

    render() {
        const { maSV, hoTenSV, soDienThoai, email } = this.state.sinhVien;
        return (
            <div>
                <p className='p-6 bg-black text-white text-2xl text-justify uppercase font-bold'>Thông tin sinh viên</p>
                <form className='text-justify'
                    noValidate
                    onSubmit={this.handleSubmit}
                >
                    <div className='grid grid-cols-2 gap-5 mt-5'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <p className='text-xl'>Mã sinh viên</p>
                                    <input
                                        name='maSV'
                                        title='Mã Sinh Viên'
                                        required
                                        value={maSV}
                                        minLength={1}
                                        maxLength={6}
                                        pattern='^[0-9]+$'
                                        placeholder='Mã sinh viên'
                                        className='w-full border-2 border-black rounded-sm p-3'
                                        type="text"
                                        onChange={this.handleState}
                                        onBlur={this.handleBlur}
                                    />
                                    <span className='text-red-500 text-16'>{this.state.errors.maSV}</span>
                                </div>
                            </div>
                            <div className='col-6 mt-5'>
                                <div className='form-group'>
                                    <p className='text-xl'>Số điện thoại</p>
                                    <input
                                        name='soDienThoai'
                                        title='Số điện thoại'
                                        required
                                        value={soDienThoai}
                                        minLength={10}
                                        maxLength={12}
                                        pattern='^[0-9]+$'
                                        placeholder='Số điện thoại'
                                        className='w-full border-2 border-black rounded-sm p-3'
                                        type="text"
                                        onChange={this.handleState}
                                        onBlur={this.handleBlur}
                                    />
                                    <span className='text-red-500 text-16'>{this.state.errors.soDienThoai}</span>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <p className='text-xl'>Họ và tên</p>
                                    <input
                                        name='hoTenSV'
                                        title='Họ Tên Sinh Viên'
                                        required
                                        value={hoTenSV}
                                        pattern='^[A-Za-z]+$'
                                        placeholder='Họ tên sinh viên'
                                        className='w-full border-2 border-black rounded-sm p-3'
                                        type="text"
                                        onChange={this.handleState}
                                        onBlur={this.handleBlur}
                                    />
                                    <span className='text-red-500 text-16'>{this.state.errors.hoTenSV}</span>
                                </div>
                            </div>
                            <div className='col-6 mt-5'>
                                <div className='form-group'>
                                    <p className='text-xl'>Email</p>
                                    <input
                                        name='email'
                                        title='Email'
                                        required
                                        value={email}
                                        pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
                                        placeholder='Email'
                                        className='w-full border-2 border-black rounded-sm p-3'
                                        type="text" onChange={this.handleState}
                                        onBlur={this.handleBlur}
                                    />
                                    <span className='text-red-500 text-16'>{this.state.errors.email}</span>
                                </div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <button type='' className={`p-4 bg-green-500 rounded-lg text-white cursor-pointer text-align: left hover:bg-green-700 ${!this.props.selectedUser ? '' : 'hidden'
                                }`}>
                                Thêm sinh viên
                            </button>
                            <button type='' className='p-4 bg-blue-500 rounded-lg text-white cursor-pointer text-align: left mx-5 hover:bg-blue-700'>
                                Cập nhật sinh viên
                            </button>
                        </div>
                        <div className='mt-3 text-right'>
                            <input
                                id="search"
                                type="text"
                                className="p-4 border-2 border-slate-300 rounded-md"
                                placeholder="Tìm Kiếm"
                                onChange={this.changeSearch}
                            />
                            <button
                                form='search'
                                className="p-4 bg-yellow-500 text-white rounded-md ml-3 hover:bg-yellow-700"
                                onClick={this.handleSearch}
                            >
                                Tìm kiếm
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.QLSinhVienReducer,
    }
}

export default connect(mapStateToProps)(DangKySinhVien)