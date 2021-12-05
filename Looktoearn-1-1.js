const $ = new Env("中青看点浏览赚&看看赚")
const notify = $.isNode() ? require('./sendNotify') : '';
let startArr = [], lookArr=[];
let gainscore = 0, lookscore = 0;
let StartBody = [],LookBody = [];

let startbodys1 = 'p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVd_6x03zS0fnS8kKdOyWyDMKSICaFBvwH5U4nsR_vvJsjHH2Z81CBL7eyJjtPmVfyM0x8EAsS-_ESh4-JImy11uTAadxMJCYAdD7P_w27pQt6_tIUTgtnDG7LOKwRL-IZbYYNciqqQLKutLD0e8rtYraOZOhan_mseWfoaUXwa0elHM9Naa00lHfvHK12V5gACj6c46zMD2s6usn7apKiPms9C-_KfKKgSs3HCV9nP0y3ns1KL8zHDwSruU7FInSJByOZxPUEeT1L-Uwxxs1cIGpGNW-TRkQP_v-yf8cYGVoFZWpWCexGhuidVBo9bhohpqZlt7EuOySSN2oMXh01xddDdldVj9M7USpcaX2v8xM_IxST8HMG5RkEDvUT9E2zBM3uLkVAZc0mgzbTUO1aBi2P8zL-_F-s8syx-_X-UqKsIOYpRhy7dP_ejhMkN_M5u-OS7e79nExYpB7gB0qEJZox2rzU8dnyHL1pTbs4_gcJdT3gzZnA7zEqdZiektjCUUsRliXnmnLuTbFokLJB75yk1UNmh28sZDineZKPDTf7hW3jfVDQPhLFQy4LfyUHr3OyhKQWnaOjBHd8KS-fZqJKwE1x2bTfE92UZW_NxfAo60o9rlhF91sIEJ86nkhq80IpTKagbQHs7j3DKzDTZ4rueTjvyc0R4s2j20NeOGFSm8WC5gwFjSZykhA6VggpGZpkQqZUvd4bFFa6-OT9gko5-j7mkl-nUGhg_S9Kg-FDJP4l6ehanDRXQHW-WuPxtgKrAu7n_gkI5bV82PN_xMn_6ICUe0J_8bZHxeLBPszl212wk951ug%3D%3D&p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVd_6x03zS0fnS8kKdOyWyDMKSICaFBvwH5U4nsR_vvJsjHH2Z81CBL7eyJjtPmVfyM0x8EAsS-_ESh4-JImy11uTAadxMJCYAdD7P_w27pQt6_tIUTgtnDG7LOKwRL-IZbYYNciqqQLKutLD0e8rtYraOZOhan_mseWfoaUXwa0elHM9Naa00lHfvHK12V5gACj6c46zMD2s6usn7apKiPms9C-_KfKKgSs3HCV9nP0y3ns1KL8zHDwSruU7FInSJByOZxPUEeT1L-Uwxxs1cIGpGNW-TRkQP_v-yf8cYGVoFZWpWCexGhuidVBo9bhohpqZlt7EuOySSN2oMXh01xddDdldVj9M7USpcaX2v8xM_IxST8HMG5RkEDvUT9E2zBM3uLkVAZc0mgzbTUO1aBi2P8zL-_F-s8syx-_X-UqKsIOYpRhy7dP_ejhMkN_M5u-OS7e79nExYpB7gB0qEJZox2rzU8dnyHL1pTbs4_gcJdT3gzZnA7zEqdZiektjCJzq6bM3dqdC_VoaT2uVM0Z6XVv1XQVduCfgnWBVjHpdgoO20eDTX0MxMibBWa_4Heuys-27-EepvpKAINbBR9eYbsL4fZSkoTQU5htmdv25qNwPnicctjXX8ldFsFPcvquWsi2f7pnCouOMN735AEnsZ2LpEQbO3o33topwhOu9C1WyGDrzaq5bnIMWrX8aUI-3oPrTbUqjg89H3yGsOYCgRgq6WGWLG85LGY2-l5RJijgfpw8RJAveESauCgi013qKSQ-JuBMM7aIZBg50wm8JJZuYvoYH6fPjD-lF0yCc-RMtJS-C9HQ%3D%3D&p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVd_6x03zS0fnS8kKdOyWyDMKSICaFBvwH5U4nsR_vvJsjHH2Z81CBL7eyJjtPmVfyM0x8EAsS-_ESh4-JImy11uTAadxMJCYAdD7P_w27pQt6_tIUTgtnDG7LOKwRL-IZbYYNciqqQLKutLD0e8rtYraOZOhan_mseWfoaUXwa0elHM9Naa00lHfvHK12V5gACj6c46zMD2s6usn7apKiPms9C-_KfKKgSs3HCV9nP0y3ns1KL8zHDwSruU7FInSJByOZxPUEeT1L-Uwxxs1cIGpGNW-TRkQP_v-yf8cYGVoFZWpWCexGhuidVBo9bhohpqZlt7EuOySSN2oMXh01xddDdldVj9M7USpcaX2v8xM_IxST8HMG5RkEDvUT9E2zBM3uLkVAZc0mgzbTUO1aBi2P8zL-_F-s8syx-_X-UqKsIOYpRhy7dP_ejhMkN_M5u-OS7e79nExYpB7gB0qEJZox2rzU8dnyHL1pTbs4_gcJdT3gzZnA7zEqdZiektjC974zNdaU8HkBNm3zEuPe1gx6ZkVIgqQPl_5BU4RX_q_csU0w_yXMYF4J3Z51yEwJpqY4RgpLZzPAEfFzty9eCV4ghPWZgfKl_k-f242fmMkrIWEaqnPZdOtHNCEtS-kEGiKPhC7O64DiBa2NoXdu3VylADj0vaRTlU1UrJv-1vIYbCq6qTMdm_Z0C2v2pKbMnUdW5h3eXWLLdeC1ah6pMvQA6oKofr2DhqzUYNBFmJ8OAfCgTaNPiMBm0IgNPFHUttv-R6cwFeo614W6Obo2i7ZL6nVLgszDjheDekm5CzPqJvPxYVoFMw%3D%3D&p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVd_6x03zS0fnS8kKdOyWyDMKSICaFBvwH5U4nsR_vvJsjHH2Z81CBL7eyJjtPmVfyM0x8EAsS-_ESh4-JImy11uTAadxMJCYAdD7P_w27pQt6_tIUTgtnDG7LOKwRL-IZbYYNciqqQLKutLD0e8rtYraOZOhan_mseWfoaUXwa0elHM9Naa00lHfvHK12V5gACj6c46zMD2s6usn7apKiPms9C-_KfKKgSs3HCV9nP0y3ns1KL8zHDwSruU7FInSJByOZxPUEeT1L-Uwxxs1cIGpGNW-TRkQP_v-yf8cYGVoFZWpWCexGhuidVBo9bhohpqZlt7EuOySSN2oMXh01xddDdldVj9M7USpcaX2v8xM_IxST8HMG5RkEDvUT9E2zBM3uLkVAZc0mgzbTUO1aBi2P8zL-_F-s8syx-_X-UqKsIOYpRhy7dP_ejhMkN_M5u-OS7e79nExYpB7gB0qEJZox2rzU8dnyHL1pTbs4_gcJdT3gzZnA7zEqdZiektjCt9Xpi1GAsUp53OzTA5OcRcXwcO9rveO2NWlQLoXoK6Jdw-qew_2YG-2vFbeict28IVzaaR-SiBPL8surOR7xAn8AZ7ebwE3Kdcpzz0KGheFD4q7UWbvuP-3b5XpduRMm_l8WFQWXR9dGRjw1fnLyL5J2G71RQ0u4cOxys7BgNBAxXe6fNi5IG2P45JQ8tw6U8wwW8pwWtcwBqSQYj_7maGy1a83HUSlViOwYXLNqLI2IEC0ZSi0wl-XQUYEGl9dxty52yWXyPWx5PlSAJ5E15ndjKkrGs9tgatfZjkkcubWHS1IFawSCOg%3D%3D&p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVd_6x03zS0fnS8kKdOyWyDMKSICaFBvwH5U4nsR_vvJsjHH2Z81CBL7eyJjtPmVfyM0x8EAsS-_ESh4-JImy11uTAadxMJCYAdD7P_w27pQt6_tIUTgtnDG7LOKwRL-IZbYYNciqqQLKutLD0e8rtYraOZOhan_mseWfoaUXwa0elHM9Naa00lHfvHK12V5gACj6c46zMD2s6usn7apKiPms9C-_KfKKgSs3HCV9nP0y3ns1KL8zHDwSruU7FInSJByOZxPUEeT1L-Uwxxs1cIGpGNW-TRkQP_v-yf8cYGVoFZWpWCexGhuidVBo9bhohpqZlt7EuOySSN2oMXh01xddDdldVj9M7USpcaX2v8xM_IxST8HMG5RkEDvUT9E2zBM3uLkVAZc0mgzbTUO1aBi2P8zL-_F-s8syx-_X-UqKsIOYpRhy7dP_ejhMkN_M5u-OS7e79nExYpB7gB0qEJZox2rzU8dnyHL1pTbs4_gcJdT3gzZnA7zEqdZiektjCZv-_pMatk_I8KemHqAlssGrNf8ljtvkBJveIGZEVfTo4gxpmIuAaWyfHCk1LAxbkMJKxvhFSl-2RsVDblUnUMGZtcLrMNaBqzMTOucyASrnGygZXOxix7bzmLgxyGlZpvBdZrZZoqGzWEDnPV0ol1C-Pm5jEqpWh-2p4qTBkDm-qtIcOCsw1qI-9uzIWnppA-Z9idRLXtTAourt1kXJPKrXjJCFyWJkAed8nscxL7ZZkfqZoV8leEO7tGdrShCNKC30TPgG2A-dQSSiIeWXoqOPrufimH_1jA_yr7Wrs-1k_HsR0Q4xB3A%3D%3D&p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVd_6x03zS0fnS8kKdOyWyDMKSICaFBvwH5U4nsR_vvJsjHH2Z81CBL7eyJjtPmVfyM0x8EAsS-_ESh4-JImy11uTAadxMJCYAdD7P_w27pQt6_tIUTgtnDG7LOKwRL-IZbYYNciqqQLKutLD0e8rtYraOZOhan_mseWfoaUXwa0elHM9Naa00lHfvHK12V5gACj6c46zMD2s6usn7apKiPms9C-_KfKKgSs3HCV9nP0y3ns1KL8zHDwSruU7FInSJByOZxPUEeT2PQn8io22lUUeBH0SbS8WI4_vLBSOP_yNlhB-PuOgL2J_LMYAFCbOVcIjveBnOP_Wf_ZuLGqnshaKU2y1XCeAFbkzgDJ3qKYKYdr15rgW5dAH2LUgxrdHjtkYbI8l41rACuV6lHHMugYiGdPh0K4moAer4op08U82eyF9tcFhsMA5eMhXDEgXHH4EnUHSWHqmSMJny6xiRlZGLiPXzbfMjjKd-KSfWrV43-bL7e2fRx7cDK7WSwAm2RfYcDV0nyRDXkIQKYSgQ3PyVE9v_dP7lVqKGH_d5pjXDDMopwtQE1Hi5Zov19O1-Idzfk6xPsZGnW0XwL_-gOIxUJOJCrrfDHcvfsJlb3xgfaQyzfX6ecpfw99FOitKIR2GGm3japr-MAuvIPUlzH4alnLhzaBNrVvsSxyjDGmu4OQMVJ5A-g6uxIcZB64O7a8Seqdsi9mg9nokWSQJWuF8wgb3iKwUBNCnsUOTmhERwhkKUu-x2Hj0joWtu95dE8eWyUF4cGJAzgNoDjkoT96Y9FzPkJZvXgl8mfP1XUdgjWH2EcxKs1g%3D%3D'
let lookbodys1 = 'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao74HcsUG20GyNw_DiF4Hp6jBpj-fbV2NnMMiV-kIE3MUIc7LsOpTjE3si6KH7VkrAfjyo38Ov3U0WeFwfmT1n-cHmPj201PiuCJSwiIlQFCwuI37_cRPyFDLVFZFUQrU0dfiZwso8FnSy-GjJWSVava32zLYNzYrRAXpRTMjsUO9G26_y9zQgyIpyl9pc_r6kBiowEVJtwT-uY16BE3vguio02WgQtOa_Owy0FHtrqyDy6bsIV_RVxCk7iTrZlIZDb6zOFcvWT5cKClBkn5uP9ON7x9DhnpuHT8JjdxHhKyYhgHT0CSNSKJ_wD2BsjI4p-Yltb9chFvO-iDQqczZspgiwh8MflUiBDqooTHWBMZA4UbtuFeRQI7Y74UO2IIpzoZRjz5truCWsPqr-y4OMj6Q%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao74HcsUG20GyMzFFwEt11IlvoIMc01ae_Wrm7zJH5IM0vxug5UEZNJR7PrCaHHEszd9Cm6jCw45bEYjcSw_wAT8O3z9fOSPuFKvkkP0TdNarUIeIBbOWLgaAn7cY5T0OEmKWWLIkF2XO-QO2yTAz8OByXCN7W0KtVLDuAqunUFvfsktLhgkufUZ15tnXIet7wLT5EnE2CZq9VocFZNzgWI9u8iRlmbgNSSVn9VntE_wMscFcGK9gJYtQGGZTfgt-UtmfbkA_dNP5YYlWncIhICccF5_58jhdOv7JI4ZthT1LN0FUTj-zz8w4VlkV4-0kw_jngfVMzyVRJpd5-GSScgZvLAgwLNmw8VJroHrOTy2d43MyuwYENBKF5tz7uFbsiwH_5tvTvs4YGx3P4GRNZQhA%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao74HcsUG20GyOK2mMGaRfqCPkE30iuw69ioradSbOsYE_iAW6H582N0E66pm9lqcCjWhjlOi77xUSHQO4AGIPrRnxi0CyGJ-4TXFX1N6ThdoahvqDWKkeegR7GAuqIjbdgF3SmNHBZhEkT_cT5zGKjA3a7orPDi6sOBETYVLMVY919-zn9Sgf52N2ILhatetar79fSluSRcSP5tWlLcG41pno8HGKYk7BzTFlRXkzZpOBCNpL53ZHcQgf5304zFHgNcme4ZbLmq4f91vZQvMhPJEDGXc0IEFPYyNyDngZkdPVD8f_yUaDnDuJ39k_e2ceMC6TjrdEszjINDZcaoqm95HWOjzwjQu97mM7_v0ftneQayD9Po3VR73WW6I07Bn9SwoDg9ZXapJwwAaJPMhs9og%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao74HcsUG20GyPEsu8ayOq8-Eoo0fY0Gy8vgb2bdr0EgmciwKQ_phWHufxFpfhZVbYmjh0eBbdrNB4pZzCPzVNmDiVSldnTLD4CbMo1MzvT3wezhY_Y7D_uqcbbB1a7l2LsTLkWeZWiH6BK-OGJj9d1M3vOtLO8QENBfiezH4yokbBCrZodOvkCFXPEn7zvWv8FdlyZzdYZZDuTUb1sqOYJq5DcyE9FK5XIGqYdf5UC2nBqetIMH6YnwRTUNHrLzaoyQqco3o-9d6yX27X-U7iy3iso4FIDU6u6fJjRf-j40MxWBNc41hRgm_Rz_4seSkrknYCf3AgmNuC3TBWkYeknBiPr0NLJ6Ycw9TtJkqCAQCj30x_no1RP6QCKzYTHLmv5S6Fk2kpLAe1KRllCe1EDng%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao74HcsUG20GyMZTZxTp9UqXd69ODOc7146zQ6cYXxm4vhfeOlBuxC2WxIioTsGNfALSVAdR7pgzhKw_7FMGfqGG1MZAgWZEyXRjRZTr2I7n9V-I_Jd9aZFVsyXyh-VNMf8tDmAke3JpdThYChdNmnH4oRhXE9DrdV4hjPfszSE2nZ_rvJf9W-rZZzJ9EsQzkvsNMP6mg_MGs4ulTaC-Ex39DY7ALiM-r7qa1APUK3dXPqf1-qe-u9Bs1iERSy8NvFDNX2ZG9GYMVeVbLXPZB_ZiX1FeYhvFJpOM3UqwlcJZDEmMTcm2yJDsd5xcU2tqQvZ2gGxuuolu9lc5iqLshpyrlsK_RWmTufGjOeQe4pvH030oTg-TUp6YRJzirxigSxVfdKZuzYxW50_fmIsHw5TGA%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao74HcsUG20GyNhP2-dkX-n68vNzDenT4FCA3KK4M1hk2pZ_z5g-IqCoP7XzLwYaGvqlPq2CXuYns08QZxKUk5vY6aUPnhswZkAvzSYG7xL2fFKGr8-34qBqIsnJQhuqJtIQeKQvYefo7LGW4zHPJsuiTY0BdpXMRt7nZcpdabgfhI5G5T3jSbid4pw-iWAT8PYuVwSbsiwWRRU6AxMJqNbzbm0OGag1O8uEnioBdHFT4puN95r2GvJUuz8U0vYi9vcxpijEWiyBfeddg9XicZEaS87dD0b_QoU22VtI2oA9icO_GNnjSs9TUvUntGjvhLBGNQqjsrqi6tsi3EDrGXPlN_Sgrq4EjAadk7XY_P4U3lt_nB8WKrNHEOYZIIxTfGWkyfbcfS3dXai5I9cU7XB2A%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao74HcsUG20GyNl5xFdfHXlbmaQaDGZzU5jkx5vTVaSMG0FJwht58jogjG3eWHUxrlE-RPc4nk3CJi_ttbPhUo-5u6ukDlSGPdSr9CZHawZXncmj43jQGEPgf_1uQBpQLgnIttfsDQl1c5gJQw4D745QNz89n-KR3KE91R82qqnV-nxkvLO5T5SVSSLP1Yi3AeWtBz_2YuA-tPb4F5LrKWQBoIzdzlB80SZgGXTefJwHYF5yBXeh8VEY6VbyFyqXx2bj74ESIpqRHbnkiJDbn1H9gMHUlPpagqk0fMMd48neWqB7MYaaZJQshwhn4xiiKA2EH8a3YJzAhKaxEvCRrHfQr_0a8Cx6cFzjbnFhKLJFG8h2i0yJG8K-srcQg3T2aBckTy0sqT8QugNSK_BauEfQw%3D%3D'

let startbodys = startbodys1 
let lookbodys = lookbodys1 


if (isGetCookie = typeof $request !==`undefined`) {
   GetCookie();
   $.done()
}
if (!$.isNode() && !lookbodys) {
    $.msg($.name, "您未获取看看赚请求，请先获取");
} else if (!$.isNode() && !startbodys) {
    $.msg($.name, "您未获取浏览赚请求，请先获取");
}
if (!$.isNode() && !startbodys.indexOf("&") == -1) {
    startArr.push(startbodys)
} else if (!$.isNode() && !lookbodys.indexOf("&") == -1) {
    lookArr.push(lookbodys)
} else {
    if (!$.isNode() && !startbodys.indexOf("&") > -1) {
        StartBody = startbodys.split('&');
    }
    if (!$.isNode() && !lookbodys.indexOf("&") > -1) {
        LookBody = lookbodys.split('&');
    }
    if ($.isNode() && process.env.YOUTH_START ) {
        if (process.env.YOUTH_START && process.env.YOUTH_START.indexOf('&') > -1) {
            StartBody = process.env.YOUTH_START.split('&');
        } else {
            StartBody = [process.env.YOUTH_START]
        };
        if (process.env.YOUTH_LOOK && process.env.YOUTH_LOOK.indexOf('&') > -1) {
            LookBody = process.env.YOUTH_LOOK.split('&');
        } else {
            LookBody = [process.env.YOUTH_LOOK]
        }
    }
    if ($.isNode() && startbodys ) {
        if (startbodys && startbodys.indexOf('&') > -1) {
            StartBody = startbodys.split('&');
        } else {
            StartBody = startbodys
        };
        if (lookbodys && lookbodys.indexOf('&') > -1) {
            LookBody = lookbodys.split('&');
        } else {
            LookBody = lookbodys
        }
    }
    Object.keys(StartBody).forEach((item) => {
        if (StartBody[item]) {
            startArr.push(StartBody[item])
        }
    });
    Object.keys(LookBody).forEach((item) => {
        if (LookBody[item]) {
            lookArr.push(LookBody[item])
        }
    })
}
timeZone = new Date().getTimezoneOffset() / 60;
timestamp = Date.now() + (8 + timeZone) * 60 * 60 * 1000;
bjTime = new Date(timestamp).toLocaleString('zh', {
    hour12: false,
    timeZoneName: 'long'
});
console.log(`\n === 脚本执行 ${bjTime} ===\n`);
!(async() => {
    $.log(`您共提供${startArr.length}次浏览赚任务`)
    if (startArr.length !== 0) {
        for (let i = 0; i < startArr.length; i++) {
            if (startArr[i]) {
                gainbody = startArr[i];
                $.index = i + 1;
                $.log(`-------------------------\n\n开始中青看点浏览赚第${$.index}次任务`)
            }
            await GainStart();
        }
        console.log(`-------------------------\n\n中青看点共完成${$.index}次任务，共计获得${gainscore}个青豆，浏览赚任务全部结束`);
        //$.msg("中青看点浏览赚", `共完成${$.index}次任务`+`  共计获得${gainscore}个青豆`);
    }
    $.log(`\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n您共提供${lookArr.length}次看看赚任务\n`)
    if (lookArr.length !== 0) {
        for (let k = 0; k < lookArr.length; k++) {
            if (lookArr[k]) {
                lookbody = lookArr[k];
                $.index = k + 1;
                $.log(`-------------------------\n\n开始中青看点看看赚第${$.index}次任务`)
            }
            await lookStart();
        }
        console.log(`-------------------------\n\n中青看点共完成${$.index}次任务，共计获得${lookscore}个青豆，看看赚任务全部结束`);
        $.msg("中青看点看看赚", '共完成' + (lookArr.length + startArr.length) + '次任务，共计获得' + parseInt(lookscore + gainscore) + '个青豆');
    }
    if ($.isNode()) {
        await notify.sendNotify("中青看点看看赚账号：Tarit", '\n共完成' + (lookArr.length + startArr.length) + '次任务，共计获得999' + parseInt(lookscore + gainscore) + '个青豆')
    }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())

function GainStart() {
    return new Promise((resolve, reject) => {
        $.post(gainHost('task/browse_start.json', gainbody), async(error, resp, data) => {
            let startres = JSON.parse(data);
            if (startres.success == false) {

                $.log(startres.message + "已跳过")
            } else {
                comstate = startres.items.comtele_state;
                if (comstate == 0) {
                    $.log("任务开始，" + startres.items.banner_id + startres.message);
                    await $.wait(10000);
                    await GainEnd()
                } else if (comstate == 1) {
                    $.log("任务:" + startres.items.banner_id + "已完成，本次跳过");
                }
            }
            resolve()
        })
    })
}

function lookStart() {
    return new Promise((resolve, reject) => {
        $.post(gainHost('Nameless/adlickstart.json', lookbody), async(error, resp, data) => {
            startlk = JSON.parse(data);
            if (startlk.success == false) {

                $.log(startlk.message + "已跳过")
            } else {
                comstate = startlk.items.comtele_state;
                if (comstate == 0) {
                    $.log("任务开始，" + startlk.items.banner_id + startlk.message);
                    for (let j = 0; j < startlk.items.see_num - startlk.items.read_num; j++) {
                        $.log("任务执行第" + parseInt(j + 1) + "次")
                        await $.wait(8000);
                        await lookstatus()
                    }
                    await $.wait(10000);
                    await lookEnd()
                } else if (comstate == 1) {
                    $.log("任务:" + startlk.items.banner_id + "已完成，本次跳过");
                }
            }
            resolve()
        })
    })
}

function GainEnd() {
    return new Promise((resolve, reject) => {
        $.post(gainHost('task/browse_end.json', gainbody), (error, resp, data) => {
            let endres = JSON.parse(data);
            if (endres.success == true) {
                $.log("任务" + endres.items.banner_id + endres.message + "，恭喜获得" + endres.items.score + "个青豆");
                gainscore += parseInt(endres.items.score)
            } else {
                $.log(endres.message)
            }
            resolve()
        })
    })
}

function lookstatus() {
    return new Promise((resolve, reject) => {
        $.post(gainHost('Nameless/bannerstatus.json', lookbody), (error, resp, data) => {
            let endres = JSON.parse(data);
            if (endres.success == true) {
                $.log("任务" + endres.items.banner_id + endres.message);
            } else {
                $.log(endres.message)
            }
            resolve()
        })
    })
}

function lookEnd() {
    return new Promise((resolve, reject) => {
        $.post(gainHost('Nameless/adlickend.json', lookbody), (error, resp, data) => {
            let endres = JSON.parse(data);
            if (endres.success == true) {
                $.log("任务" + endres.items.banner_id + endres.message + "，" + endres.items.desc)
                lookscore += parseInt(endres.items.score)
            } else {
                $.log(endres.message)
            }
            resolve()
        })
    })
}

function gainHost(api, body) {
    return {
        url: 'https://ios.baertt.com/v5/' + api,
        headers: {
            'User-Agent': 'KDApp/1.7.8 (iPhone; iOS 14.0; Scale/3.00)',
            'Host': 'ios.baertt.com',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
    }
}


function GetCookie() {
    if ($request && $request.method != 'OPTIONS' && $request.url.match(/\/browse_start\.json/)) {
        startbodyVal = $request.body;
        if (startbodys) {
            if (startbodys.indexOf(startbodyVal) > -1) {
                $.msg($.name, '阅读请求重复，本次跳过');
                return
            } else if (startbodys.indexOf(startbodyVal) == -1) {
                startbodys += "&" + startbodyVal
            }
        } else {
            startbodys = $request.body
        }
        $.setdata(startbodys, 'youth_start');
        $.log("获取浏览赚请求: " + startbodyVal);
        $.msg($.name, '获取浏览赚请求成功')
    } else if ($request && $request.method != 'OPTIONS' && $request.url.match(/\/adlickstart\.json/)) {
        seeVal = $request.body;
        if (lookbodys) {
            if (lookbodys.indexOf(seeVal) > -1) {
                $.msg($.name, '阅读请求重复，本次跳过');
                return
            } else if (lookbodys.indexOf(seeVal) == -1) {
                lookbodys += "&" + seeVal
                $.msg($.name, '获取看看赚请求' + lookbodys.split("&").length + '成功')
            }
        } else {
            lookbodys = $request.body
            $.msg($.name, '获取看看赚请求成功')
        }
        $.setdata(lookbodys, 'youth_look');
        $.log("获取浏览赚请求: " + seeVal)
    }
}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
