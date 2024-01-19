import dynamic from 'next/dynamic'
import React from 'react'
import NavBar from './NavBar'
// const Sidebar = dynamic(() => import('./Sidebar'))


function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="ks_w100 ks_d_flex ks_alg_itm_strect ks_jt_cont_spc_around">
            <div className="ks_h100vh ks_col2 ks_sb_bg_clr ks_brd_rgt">
                {/* <Sidebar /> */}
            </div>
            <div className="ks_col10 ks_wht_bg_clr ks_d_flex ks_flex_col ks_h100vh">
                <NavBar />
                {children}
            </div>
        </div>
    )
}

export default Layout