import React, { Component } from 'react'
import DangKySinhVien from './DangKySinhVien'
import DanhSachSinhVien from './DanhSachSinhVien'

export default class BTQuanLySinhVien extends Component {
    render() {
        return (
        <div className='max-w-7xl m-auto'>
            {/* <p>BTQuanLySinhVien</p> */}
            <DangKySinhVien />
            <DanhSachSinhVien />
        </div>
        )
    }
}
