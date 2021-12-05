const $ = new Env("中青看点浏览赚&看看赚")
const notify = $.isNode() ? require('./sendNotify') : '';
let startArr = [], lookArr=[];
let gainscore = 0, lookscore = 0;
let StartBody = [],LookBody = [];

let startbodys1 = 'p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVd_6x03zS0fnS8kKdOyWyDMKSICaFBvwH5U4nsR_vvJsjHH2Z81CBL7eyJjtPmVfyM0x8EAsS-_ESh4-JImy11uTAadxMJCYAdD7P_w27pQt6_tIUTgtnDG7LOKwRL-IZbYYNciqqQLKutLD0e8rtYraOZOhan_mseWfoaUXwa0elHM9Naa00lHfvHK12V5gACj6c46zMD2s6usn7apKiPms9C-_KfKKgSs3HCV9nP0y3ns1KL8zHDwSruU7FInSJByOZxPUEeT1L-Uwxxs1cIGpGNW-TRkQP_v-yf8cYGVoFZWpWCexGhuidVBo9bhohpqZlt7EuOySSN2oMXh01xddDdldVj9M7USpcaX2v8xM_IxST8HMG5RkEDvUT9E2zBM3uLkVAZc0mgzbTUO1aBi2P8zL-_F-s8syx-_X-UqKsIOYpRhy7dP_ejhMkN_M5u-OS7e79nExYpB7gB0qEJZox2rzU8dnyHL1pTbs4_gcJdT3gzZnA7zEqdZiektjCUUsRliXnmnLuTbFokLJB75yk1UNmh28sZDineZKPDTf7hW3jfVDQPhLFQy4LfyUHr3OyhKQWnaOjBHd8KS-fZqJKwE1x2bTfE92UZW_NxfAo60o9rlhF91sIEJ86nkhq80IpTKagbQHs7j3DKzDTZ4rueTjvyc0R4s2j20NeOGFSm8WC5gwFjSZykhA6VggpGZpkQqZUvd4bFFa6-OT9gko5-j7mkl-nUGhg_S9Kg-FDJP4l6ehanDRXQHW-WuPxtgKrAu7n_gkI5bV82PN_xMn_6ICUe0J_8bZHxeLBPszl212wk951ug%3D%3D&p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVd_6x03zS0fnS8kKdOyWyDMKSICaFBvwH5U4nsR_vvJsjHH2Z81CBL7eyJjtPmVfyM0x8EAsS-_ESh4-JImy11uTAadxMJCYAdD7P_w27pQt6_tIUTgtnDG7LOKwRL-IZbYYNciqqQLKutLD0e8rtYraOZOhan_mseWfoaUXwa0elHM9Naa00lHfvHK12V5gACj6c46zMD2s6usn7apKiPms9C-_KfKKgSs3HCV9nP0y3ns1KL8zHDwSruU7FInSJByOZxPUEeT1L-Uwxxs1cIGpGNW-TRkQP_v-yf8cYGVoFZWpWCexGhuidVBo9bhohpqZlt7EuOySSN2oMXh01xddDdldVj9M7USpcaX2v8xM_IxST8HMG5RkEDvUT9E2zBM3uLkVAZc0mgzbTUO1aBi2P8zL-_F-s8syx-_X-UqKsIOYpRhy7dP_ejhMkN_M5u-OS7e79nExYpB7gB0qEJZox2rzU8dnyHL1pTbs4_gcJdT3gzZnA7zEqdZiektjCJzq6bM3dqdC_VoaT2uVM0Z6XVv1XQVduCfgnWBVjHpdgoO20eDTX0MxMibBWa_4Heuys-27-EepvpKAINbBR9eYbsL4fZSkoTQU5htmdv25qNwPnicctjXX8ldFsFPcvquWsi2f7pnCouOMN735AEnsZ2LpEQbO3o33topwhOu9C1WyGDrzaq5bnIMWrX8aUI-3oPrTbUqjg89H3yGsOYCgRgq6WGWLG85LGY2-l5RJijgfpw8RJAveESauCgi013qKSQ-JuBMM7aIZBg50wm8JJZuYvoYH6fPjD-lF0yCc-RMtJS-C9HQ%3D%3D&p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVd_6x03zS0fnS8kKdOyWyDMKSICaFBvwH5U4nsR_vvJsjHH2Z81CBL7eyJjtPmVfyM0x8EAsS-_ESh4-JImy11uTAadxMJCYAdD7P_w27pQt6_tIUTgtnDG7LOKwRL-IZbYYNciqqQLKutLD0e8rtYraOZOhan_mseWfoaUXwa0elHM9Naa00lHfvHK12V5gACj6c46zMD2s6usn7apKiPms9C-_KfKKgSs3HCV9nP0y3ns1KL8zHDwSruU7FInSJByOZxPUEeT1L-Uwxxs1cIGpGNW-TRkQP_v-yf8cYGVoFZWpWCexGhuidVBo9bhohpqZlt7EuOySSN2oMXh01xddDdldVj9M7USpcaX2v8xM_IxST8HMG5RkEDvUT9E2zBM3uLkVAZc0mgzbTUO1aBi2P8zL-_F-s8syx-_X-UqKsIOYpRhy7dP_ejhMkN_M5u-OS7e79nExYpB7gB0qEJZox2rzU8dnyHL1pTbs4_gcJdT3gzZnA7zEqdZiektjC974zNdaU8HkBNm3zEuPe1gx6ZkVIgqQPl_5BU4RX_q_csU0w_yXMYF4J3Z51yEwJpqY4RgpLZzPAEfFzty9eCV4ghPWZgfKl_k-f242fmMkrIWEaqnPZdOtHNCEtS-kEGiKPhC7O64DiBa2NoXdu3VylADj0vaRTlU1UrJv-1vIYbCq6qTMdm_Z0C2v2pKbMnUdW5h3eXWLLdeC1ah6pMvQA6oKofr2DhqzUYNBFmJ8OAfCgTaNPiMBm0IgNPFHUttv-R6cwFeo614W6Obo2i7ZL6nVLgszDjheDekm5CzPqJvPxYVoFMw%3D%3D&p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVd_6x03zS0fnS8kKdOyWyDMKSICaFBvwH5U4nsR_vvJsjHH2Z81CBL7eyJjtPmVfyM0x8EAsS-_ESh4-JImy11uTAadxMJCYAdD7P_w27pQt6_tIUTgtnDG7LOKwRL-IZbYYNciqqQLKutLD0e8rtYraOZOhan_mseWfoaUXwa0elHM9Naa00lHfvHK12V5gACj6c46zMD2s6usn7apKiPms9C-_KfKKgSs3HCV9nP0y3ns1KL8zHDwSruU7FInSJByOZxPUEeT1L-Uwxxs1cIGpGNW-TRkQP_v-yf8cYGVoFZWpWCexGhuidVBo9bhohpqZlt7EuOySSN2oMXh01xddDdldVj9M7USpcaX2v8xM_IxST8HMG5RkEDvUT9E2zBM3uLkVAZc0mgzbTUO1aBi2P8zL-_F-s8syx-_X-UqKsIOYpRhy7dP_ejhMkN_M5u-OS7e79nExYpB7gB0qEJZox2rzU8dnyHL1pTbs4_gcJdT3gzZnA7zEqdZiektjCt9Xpi1GAsUp53OzTA5OcRcXwcO9rveO2NWlQLoXoK6Jdw-qew_2YG-2vFbeict28IVzaaR-SiBPL8surOR7xAn8AZ7ebwE3Kdcpzz0KGheFD4q7UWbvuP-3b5XpduRMm_l8WFQWXR9dGRjw1fnLyL5J2G71RQ0u4cOxys7BgNBAxXe6fNi5IG2P45JQ8tw6U8wwW8pwWtcwBqSQYj_7maGy1a83HUSlViOwYXLNqLI2IEC0ZSi0wl-XQUYEGl9dxty52yWXyPWx5PlSAJ5E15ndjKkrGs9tgatfZjkkcubWHS1IFawSCOg%3D%3D&p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVd_6x03zS0fnS8kKdOyWyDMKSICaFBvwH5U4nsR_vvJsjHH2Z81CBL7eyJjtPmVfyM0x8EAsS-_ESh4-JImy11uTAadxMJCYAdD7P_w27pQt6_tIUTgtnDG7LOKwRL-IZbYYNciqqQLKutLD0e8rtYraOZOhan_mseWfoaUXwa0elHM9Naa00lHfvHK12V5gACj6c46zMD2s6usn7apKiPms9C-_KfKKgSs3HCV9nP0y3ns1KL8zHDwSruU7FInSJByOZxPUEeT1L-Uwxxs1cIGpGNW-TRkQP_v-yf8cYGVoFZWpWCexGhuidVBo9bhohpqZlt7EuOySSN2oMXh01xddDdldVj9M7USpcaX2v8xM_IxST8HMG5RkEDvUT9E2zBM3uLkVAZc0mgzbTUO1aBi2P8zL-_F-s8syx-_X-UqKsIOYpRhy7dP_ejhMkN_M5u-OS7e79nExYpB7gB0qEJZox2rzU8dnyHL1pTbs4_gcJdT3gzZnA7zEqdZiektjCZv-_pMatk_I8KemHqAlssGrNf8ljtvkBJveIGZEVfTo4gxpmIuAaWyfHCk1LAxbkMJKxvhFSl-2RsVDblUnUMGZtcLrMNaBqzMTOucyASrnGygZXOxix7bzmLgxyGlZpvBdZrZZoqGzWEDnPV0ol1C-Pm5jEqpWh-2p4qTBkDm-qtIcOCsw1qI-9uzIWnppA-Z9idRLXtTAourt1kXJPKrXjJCFyWJkAed8nscxL7ZZkfqZoV8leEO7tGdrShCNKC30TPgG2A-dQSSiIeWXoqOPrufimH_1jA_yr7Wrs-1k_HsR0Q4xB3A%3D%3D&p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVd_6x03zS0fnS8kKdOyWyDMKSICaFBvwH5U4nsR_vvJsjHH2Z81CBL7eyJjtPmVfyM0x8EAsS-_ESh4-JImy11uTAadxMJCYAdD7P_w27pQt6_tIUTgtnDG7LOKwRL-IZbYYNciqqQLKutLD0e8rtYraOZOhan_mseWfoaUXwa0elHM9Naa00lHfvHK12V5gACj6c46zMD2s6usn7apKiPms9C-_KfKKgSs3HCV9nP0y3ns1KL8zHDwSruU7FInSJByOZxPUEeT2PQn8io22lUUeBH0SbS8WI4_vLBSOP_yNlhB-PuOgL2J_LMYAFCbOVcIjveBnOP_Wf_ZuLGqnshaKU2y1XCeAFbkzgDJ3qKYKYdr15rgW5dAH2LUgxrdHjtkYbI8l41rACuV6lHHMugYiGdPh0K4moAer4op08U82eyF9tcFhsMA5eMhXDEgXHH4EnUHSWHqmSMJny6xiRlZGLiPXzbfMjjKd-KSfWrV43-bL7e2fRx7cDK7WSwAm2RfYcDV0nyRDXkIQKYSgQ3PyVE9v_dP7lVqKGH_d5pjXDDMopwtQE1Hi5Zov19O1-Idzfk6xPsZGnW0XwL_-gOIxUJOJCrrfDHcvfsJlb3xgfaQyzfX6ecpfw99FOitKIR2GGm3japr-MAuvIPUlzH4alnLhzaBNrVvsSxyjDGmu4OQMVJ5A-g6uxIcZB64O7a8Seqdsi9mg9nokWSQJWuF8wgb3iKwUBNCnsUOTmhERwhkKUu-x2Hj0joWtu95dE8eWyUF4cGJAzgNoDjkoT96Y9FzPkJZvXgl8mfP1XUdgjWH2EcxKs1g%3D%3D&p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVd_6x03zS0fnS8kKdOyWyDMKSICaFBvwH5U4nsR_vvJsjHH2Z81CBL7eyJjtPmVfyM0x8EAsS-_ESh4-JImy11uTAadxMJCYAdD7P_w27pQt6_tIUTgtnDG7LOKwRL-IZbYYNciqqQLKutLD0e8rtYraOZOhan_mseWfoaUXwa0elHM9Naa00lHfvHK12V5gACj6c46zMD2s6usn7apKiPms9C-_KfKKgSs3HCV9nP0y3ns1KL8zHDwSruU7FInSJByOZxPUEeT2NMgaPDQ7rXV--7KM2ZcDZgnvTjcS7WQykd_dNn7yNLsOqwPJPMqF8vg3g0Wr2uK6cSIB3nOV4Pq1OCXU_31JwGtiYahR54NwFzcpDQNM5Xa8_Z5DjMaW0RQ-7LkTOFS-hyfjP9Szg2cM6KDH-nG5vr_pJ8rxj9S08EinmuyCRJL8rh4Jt8cUzdfwjyKpK7rAjni61X-aEdzQHgsJveM6KYdIc02nCIzBkAvdZ6yXmhUXUpfyoP4frm-DWQv4udY-__91blNr5IZpLdovOsVH7fvJrhJRVqe71zkw8bIHjI1jLrzzJVM9uiBvLZKZ7vPfN6IKNeDW7mSmt1072fU40ZqY5UgX_y1u4BlxqngiYTiBKYiI2r0-Q8pBUuawV5bJOvFyAkAx0lSYY7nUF-XY5GsjII6vy-HethN2ppexVJXUPZSXRp4CEpQS9ktmDka84-sFn66-r5P1cRHh_oiiLgLbRD4sNDqpLNVDYSE-KCKghV48F92rnS0vpHNlb52Wu0Ug5DJJwbAK-gyl8HIrtX4KDPTA-g-ZwJ95gWKnwCA%3D%3D& p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVd_6x03zS0fnS8kKdOyWyDMKSICaFBvwH5U4nsR_vvJsjHH2Z81CBL7eyJjtPmVfyM0x8EAsS-_ESh4-JImy11uTAadxMJCYAdD7P_w27pQt6_tIUTgtnDG7LOKwRL-IZbYYNciqqQLKutLD0e8rtYraOZOhan_mseWfoaUXwa0elHM9Naa00lHfvHK12V5gACj6c46zMD2s6usn7apKiPms9C-_KfKKgSs3HCV9nP0y3ns1KL8zHDwSruU7FInSJByOZxPUEeT2tGrvhpVk932d50FKq3I7AkcH3WCF7hboJU9DO7F32LF7omx2o-D76biaWu35YlZmFLJOF-JQ3Rl4Q2lcSe6dCR_105_GY_mtPlsgViLBRcTh15Zq5g8FcUKVLzmSQMbRsrvQKTe53DqF6OQwn-vEyHYvMZjfJwyRaDZKkCD4BC5w2icpilzPbu7tbEtDGXQpjjpzBelwmEt71GBokj7qUv3egTvbbMypmmXFLYbaaQ2Y28Wib5R6kum8kYnrQjdmkcX9U-18dzq9gLkiJgywrOx7gwpGEAW0IZOhBFbiZalBHYhFkeEYoR4u9yJ424_8iI8k-ay2ZiWDCjWAk47k8O5jOZ5J8Ko_EZ0ChW8Lh5kW6yjvSPPm7lxXZ0zpoMf8jAWjdEsoDzLuKl17hiZbD6rZPcEW_xBP1wpfMjl3PcSz_aiExKorPT9bzItK9Q7cy72EHlE4u8GbP3l-YLiMug3pL7HsyyXhK3h31beFvmlfGbL2YmCH_FKUYybAojayKCWITx7sOad1UdUJPnwxEB0SHeRRVNvNrPwsIMCmRkg%3D%3D& p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVd_6x03zS0fnS8kKdOyWyDMKSICaFBvwH5U4nsR_vvJsjHH2Z81CBL7eyJjtPmVfyM0x8EAsS-_ESh4-JImy11uTAadxMJCYAdD7P_w27pQt6_tIUTgtnDG7LOKwRL-IZbYYNciqqQLKutLD0e8rtYraOZOhan_mseWfoaUXwa0elHM9Naa00lHfvHK12V5gACj6c46zMD2s6usn7apKiPms9C-_KfKKgSs3HCV9nP0y3ns1KL8zHDwSruU7FInSJByOZxPUEeT3AnNmYAu3Pgz3o07tSNA2R-cxbZJX-2Lq70Asl3rhSa-c6YHswRhQvvqY0bUPzU0h8-D5jgg3-mBZwH8ZycqFXvg6Uhj8RPUTsqi1J-wsZbqbgIwETPn8RBFBmsEUIXpXOlxyMUCkuc5QMVcfdtrlRFGtFJQg38aF85mNtTKQW0Kv3le4S9HyYr1V8R31-p2byW7YUpWe4fywOWc9ZBrLak9JzTBp0w5uT2A-KdFnBkLjQH5I7Z-_fVGBU38gEitcFniF1eRpL3bp--hxtlDrdJ0NVlbq0NO1gGFJL59IqCbNqjw8mPjOcXvKGsJW6B999Ob7iad-SlCOaecUx-6NCtL4VTRNp_8VImMVx0974bQRwV7_Z71h8XznsuqnTmCZhreMMtVjh8V8x7m670ez84LSGSsqROqtt7L4xSIse-i36L3VIv9K4wGn9CFdqRDOzuAmS7mCN2T2CZ1IHkVV35Vyy9Zvc9103KlkfPumn4FaFLNs2o-Q7uTRf6qp6edJzKe99gDf8dgDcftCTLRHzm_Ceay4Vfa99ICzH05Ulog%3D%3D& p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVd_6x03zS0fnS8kKdOyWyDMKSICaFBvwH5U4nsR_vvJsjHH2Z81CBL7eyJjtPmVfyM0x8EAsS-_ESh4-JImy11uTAadxMJCYAdD7P_w27pQt6_tIUTgtnDG7LOKwRL-IZbYYNciqqQLKutLD0e8rtYraOZOhan_mseWfoaUXwa0elHM9Naa00lHfvHK12V5gACj6c46zMD2s6usn7apKiPms9C-_KfKKgSs3HCV9nP0y3ns1KL8zHDwSruU7FInSJByOZxPUEeT2OvA08LwSgJMnx0pp2KxxfhPZB76D9ivD0HBrzSK7AAclWjWgi292kEtvAGPwCq5ibXyc7ve-Xr5UagbYgQFg2Pe5Ws4ByOhZqlQlpq_1gDsGR8UkUyL_IPzuW6Y7ly7__XgEBjQdbrXEzyAEKutXlMBqpU_x6LM1AngIEZUMW0mA01OH7q8O55bckxYffOTCnVgkHlfBg7OhMJlzJgh6EC-JH_9KoTfqL3bSroDunTg7ewI_XvHTt_6nIjwCDbYOruZc9Gnu_h_p4AIaiPuhtXKVDEKenEqpgNpYvaHjZ-9jMQQKT0f6mmrf0XnfiLtZSmBphIKEG979TVpwRPXCdRcRubcc1-adeCgxNRnHt1OJoREcDcv1bjSy2g7PVO745UUjFNFspuY8GS1rJWMshw5wNF6M9otc9M8ZmEPfajFrNAla6NWokUfHQ0_jX-fNhfDNW9pYHjcmBsHcD7R7zS_9X1nFlTDcESrZqAHuaXBBhk_IA8jKK6j353AQ13G-I0xbH-nau6Rl_ywV7qcGdVlL7Leg4Ur0h93uVErLF9w%3D%3D& p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVd_6x03zS0fnS8kKdOyWyDMKSICaFBvwH5U4nsR_vvJsjHH2Z81CBL7eyJjtPmVfyM0x8EAsS-_ESh4-JImy11uTAadxMJCYAdD7P_w27pQt6_tIUTgtnDG7LOKwRL-IZbYYNciqqQLKutLD0e8rtYraOZOhan_mseWfoaUXwa0elHM9Naa00lHfvHK12V5gACj6c46zMD2s6usn7apKiPms9C-_KfKKgSs3HCV9nP0y3ns1KL8zHDwSruU7FInSJByOZxPUEeT0rnvGZUIA8yL8urddMzaPXB29eo-FWO6-ZjnrE7RLzF7E_8mRmPmnL338kKctqn1gpKkO4WE_G2Ax_cdLuH9aTy-DNi_G0eLjWS93xstZhH9wNSAO6_QxxhDM_ZykQoJSiGa_kEKJUPKeSjoKWTzq_t8db0bSrO5cFdLARjq6BAcpcu9xFykoZOjMy7giH2QaAn58aoXgfCLw58I4BqMA4qmzyz-GwO8omEMLd_1wP2hbxBdejBMJWBafqvxEBhxRS3Wo4iVZxnoHtvYxn5Ud9R1fo4oYLUOvv6vIliqoW9JC9-iMkJlf-qRDrTwO0kmzJJud6JXXxqzNmeLomHhH02bfeJGa-l3klDIQluY_F3ZCM3pr8_8lEsNGP4zXDRYL_2jeprI2Vt3Tp55qj2vDzT8upbK3Zei7YTZPA-dfrYa_UuB5zu2jizU0yewq7WTjr-dzJDmwKokpse-Pyi_DT9dd5l1pMeDZmzql4bRmcEEGW8A0dnrZEBCqspd26tEbUZ7xRj9aXta1Ps1g-KpbZHRl10WU41jje7S70rFJqyQ%3D%3D'
let lookbodys1 = 'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao74HcsUG20GyNw_DiF4Hp6jBpj-fbV2NnMMiV-kIE3MUIc7LsOpTjE3si6KH7VkrAfjyo38Ov3U0WeFwfmT1n-cHmPj201PiuCJSwiIlQFCwuI37_cRPyFDLVFZFUQrU0dfiZwso8FnSy-GjJWSVava32zLYNzYrRAXpRTMjsUO9G26_y9zQgyIpyl9pc_r6kBiowEVJtwT-uY16BE3vguio02WgQtOa_Owy0FHtrqyDy6bsIV_RVxCk7iTrZlIZDb6zOFcvWT5cKClBkn5uP9ON7x9DhnpuHT8JjdxHhKyYhgHT0CSNSKJ_wD2BsjI4p-Yltb9chFvO-iDQqczZspgiwh8MflUiBDqooTHWBMZA4UbtuFeRQI7Y74UO2IIpzoZRjz5truCWsPqr-y4OMj6Q%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao74HcsUG20GyMzFFwEt11IlvoIMc01ae_Wrm7zJH5IM0vxug5UEZNJR7PrCaHHEszd9Cm6jCw45bEYjcSw_wAT8O3z9fOSPuFKvkkP0TdNarUIeIBbOWLgaAn7cY5T0OEmKWWLIkF2XO-QO2yTAz8OByXCN7W0KtVLDuAqunUFvfsktLhgkufUZ15tnXIet7wLT5EnE2CZq9VocFZNzgWI9u8iRlmbgNSSVn9VntE_wMscFcGK9gJYtQGGZTfgt-UtmfbkA_dNP5YYlWncIhICccF5_58jhdOv7JI4ZthT1LN0FUTj-zz8w4VlkV4-0kw_jngfVMzyVRJpd5-GSScgZvLAgwLNmw8VJroHrOTy2d43MyuwYENBKF5tz7uFbsiwH_5tvTvs4YGx3P4GRNZQhA%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao74HcsUG20GyOK2mMGaRfqCPkE30iuw69ioradSbOsYE_iAW6H582N0E66pm9lqcCjWhjlOi77xUSHQO4AGIPrRnxi0CyGJ-4TXFX1N6ThdoahvqDWKkeegR7GAuqIjbdgF3SmNHBZhEkT_cT5zGKjA3a7orPDi6sOBETYVLMVY919-zn9Sgf52N2ILhatetar79fSluSRcSP5tWlLcG41pno8HGKYk7BzTFlRXkzZpOBCNpL53ZHcQgf5304zFHgNcme4ZbLmq4f91vZQvMhPJEDGXc0IEFPYyNyDngZkdPVD8f_yUaDnDuJ39k_e2ceMC6TjrdEszjINDZcaoqm95HWOjzwjQu97mM7_v0ftneQayD9Po3VR73WW6I07Bn9SwoDg9ZXapJwwAaJPMhs9og%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao74HcsUG20GyPEsu8ayOq8-Eoo0fY0Gy8vgb2bdr0EgmciwKQ_phWHufxFpfhZVbYmjh0eBbdrNB4pZzCPzVNmDiVSldnTLD4CbMo1MzvT3wezhY_Y7D_uqcbbB1a7l2LsTLkWeZWiH6BK-OGJj9d1M3vOtLO8QENBfiezH4yokbBCrZodOvkCFXPEn7zvWv8FdlyZzdYZZDuTUb1sqOYJq5DcyE9FK5XIGqYdf5UC2nBqetIMH6YnwRTUNHrLzaoyQqco3o-9d6yX27X-U7iy3iso4FIDU6u6fJjRf-j40MxWBNc41hRgm_Rz_4seSkrknYCf3AgmNuC3TBWkYeknBiPr0NLJ6Ycw9TtJkqCAQCj30x_no1RP6QCKzYTHLmv5S6Fk2kpLAe1KRllCe1EDng%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao74HcsUG20GyMZTZxTp9UqXd69ODOc7146zQ6cYXxm4vhfeOlBuxC2WxIioTsGNfALSVAdR7pgzhKw_7FMGfqGG1MZAgWZEyXRjRZTr2I7n9V-I_Jd9aZFVsyXyh-VNMf8tDmAke3JpdThYChdNmnH4oRhXE9DrdV4hjPfszSE2nZ_rvJf9W-rZZzJ9EsQzkvsNMP6mg_MGs4ulTaC-Ex39DY7ALiM-r7qa1APUK3dXPqf1-qe-u9Bs1iERSy8NvFDNX2ZG9GYMVeVbLXPZB_ZiX1FeYhvFJpOM3UqwlcJZDEmMTcm2yJDsd5xcU2tqQvZ2gGxuuolu9lc5iqLshpyrlsK_RWmTufGjOeQe4pvH030oTg-TUp6YRJzirxigSxVfdKZuzYxW50_fmIsHw5TGA%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao74HcsUG20GyNhP2-dkX-n68vNzDenT4FCA3KK4M1hk2pZ_z5g-IqCoP7XzLwYaGvqlPq2CXuYns08QZxKUk5vY6aUPnhswZkAvzSYG7xL2fFKGr8-34qBqIsnJQhuqJtIQeKQvYefo7LGW4zHPJsuiTY0BdpXMRt7nZcpdabgfhI5G5T3jSbid4pw-iWAT8PYuVwSbsiwWRRU6AxMJqNbzbm0OGag1O8uEnioBdHFT4puN95r2GvJUuz8U0vYi9vcxpijEWiyBfeddg9XicZEaS87dD0b_QoU22VtI2oA9icO_GNnjSs9TUvUntGjvhLBGNQqjsrqi6tsi3EDrGXPlN_Sgrq4EjAadk7XY_P4U3lt_nB8WKrNHEOYZIIxTfGWkyfbcfS3dXai5I9cU7XB2A%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao74HcsUG20GyNl5xFdfHXlbmaQaDGZzU5jkx5vTVaSMG0FJwht58jogjG3eWHUxrlE-RPc4nk3CJi_ttbPhUo-5u6ukDlSGPdSr9CZHawZXncmj43jQGEPgf_1uQBpQLgnIttfsDQl1c5gJQw4D745QNz89n-KR3KE91R82qqnV-nxkvLO5T5SVSSLP1Yi3AeWtBz_2YuA-tPb4F5LrKWQBoIzdzlB80SZgGXTefJwHYF5yBXeh8VEY6VbyFyqXx2bj74ESIpqRHbnkiJDbn1H9gMHUlPpagqk0fMMd48neWqB7MYaaZJQshwhn4xiiKA2EH8a3YJzAhKaxEvCRrHfQr_0a8Cx6cFzjbnFhKLJFG8h2i0yJG8K-srcQg3T2aBckTy0sqT8QugNSK_BauEfQw%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao7E5gbfNQQZL3hzUS96PeatOzeTrKR0bMQ_cVMtQyZ3T2yh5zMWu9QuSgrCawi3cOAm1ev1tMFITlHzk5v7m9zmu3xBN5VDmg-1d7sSan1QNObIIRakCBiKpG3120HW-SDwnOBMUbRf0C9jdK7rh0gVx5Sk5KBrtZmGu40kfun264w0exV3u4B4OsWt3wUL1BYwC7J3uEMcQ0iVsMS8QtYbaxktrLP8PvrTJcJdosk6tXQwBemGazvFliBFET3TwoipjLsO9uLAuOKb_yPJyIrOGqqNb4dkwUNvkIb9c_objwmtK2nE7QhBCKR3q0vhs3o8YD_D62pXMs-b_bGliGNZU99XqUs8w8EYxaUzsXWAQnr3VaoJxAeLHKGkFglpxULURvI9AoRs6PB35jtX4rKsQ%3D%3D& p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao7E5gbfNQQZL2l6XkE0fDNHDKQvaDFKNSCRmwSqUc3jh2qASSdOTQEKsTdzwXKVhApOGSfKekG1Y3wxUxKko2sKGTqD7pbM6c9pkoFw6qDXyq6F2HUepfMeDiPg6Zj1gRxWDhJubHVRrDMrhDQckf0cWBezcyr4IQEdCIxx_uSItV-_XOexQAjqGXjy6zj0g6uJTrw1D9ErAUH7pducKU-tLwUq0Wr4XwVueuqlBGu6BJj1tLA0rwKOOnL6UNrug_apx3zPFTwC-vwh7IgxlNqEyiskG8AZNHMunQGkmJZkrU3EZJ5Dgam0zxrnRWLaNHRHPo1cvOo_eu1JZnfpGGqwB6mx4pjMhQlqPIFlz1wK-kUFsIjpX2YBgW8Ak30hMc9GFMhk5ebDBcFScrs4arFXw%3D%3D& p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao7E5gbfNQQZL3orMIZMMZWlyEmB6YBDWBgD2MBK5UQNdd-hPWsbLJNC43_HAH0EgeSvG49isLaQ9HBplXKffUIXiHRyfxBa1p6WHVIBZKHwohvyr9yjx8wZ8cnzQ_YKwNYsWsNRwmRwM3HzYWNYc-z3PwwsVkHyoWxjbUHfU_eJYhRpHmhV05W6XZSZVpLrWrOl_eAchVOwZ1zjzt02u0fEJC7W5tZADe3QbIieBP_C9X2rgGNk6oIT0QnXrUTDFjLdUV4_BL9b51Rz3wX6lebWfcTb4kucC8fQyrS5eIClG6fRGpkE2ZPO7ewE1KTr1GdSRrCyzi0P7YGakHb3ht9tjWh04fSGQMozpSwbn1IpoD5Zn4skcLahqlqtK1lTzjvhDdKwBY5w7zMuqNog9FAhg%3D%3D& p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao7E5gbfNQQZL3qTThDbipH2gcwaxsbs8LmATOryrc6bWISk-yII2ziSoW9R8pNcnT0kZhafXpYASbxa6TCueqXx0EJBmXcsczVWK4ew60bjiDJTIIyYeGfykRZXt8ASXiE6OtmKR3mhnFak4IXS-IqIf74qXGaZHVXP6G0CktUc9bjtVUwOOS6mLbvI2Sgy_Fr6AV9Jll7zqF40f7bcx0VyRacCm8CXttjtqFvTjsAAfA2Zv5BAzvUb5GRoKPBFfq3BiTUwikKY1Cj1c6Fo5cPB7RZxxhRzE9eFUDSSVrxme8LAb1DNIQ1QBUM4RBeBtPecW6gztPBtZ_fRwt64tXk-nyGSJaJt9_ijhbOtEk4aJbR5a5u8SN4xZ9v5d5kK51HmNSl0tL7yNLHi0yI-HvLOA%3D%3D& p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao7E5gbfNQQZL1JEhoovStFgTWvju2OGwONmU6W92jpd88IfV6KMCfeTLyk2rgU52k7ov5xpr7Oy-zAdqXAoPetre88EvZZIyh9Fj_v6crE7xs3DAbzfjdPwfmj5NIwLlFLAEhm5Xr73Z0dA4WW17AWOKW9rUWG5xBB9WqayWdl48e8_vyuHEnUHW170Bno6TvGEY-2HVzig7KFa2rCG9R4r1h8Zu5Xqj9XBHgjwepByd_K_esrFypVJkTP43nlprtDuK893AS1YZjVgXeS1BCVxHqkikMxywMXfLkYI498t4QWOC1hf7MHDHRDaUrHtfcIvQKRZJmrgJyXVOHIgG20iyiCXWaUCx6madk29qfC9wbU6Bm7bvFfWyVVnPV3E_iuZLdHbyCUO9BGrBaxrcRNog%3D%3D& p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao7E5gbfNQQZL31aqipHuWEIwZ1pAAGtfOBW0OgtQjxJVPxicvH9OevmE9q39j09dAIREMC9y0dJtsYRT2j7JWcg05udKlpYc3JnI55Gdl-5gGBJENptek3p5UeJt6h2IcsgZzbe5GaNmWnz43VKgmD07Q0BYP_dp7e_bdlwqFmY-VRyLi5OWqtESfWVMXduVw2Ju7gS9McgaFOLHTdoCJHHqWDKZVLrrXBOF9HFUqj4MGFAG0SuN_BFXcSTfYeqki0-mJX4f42615IoZJTSvMCENsXmBfSWnJkPslJZwr_KeCu8RB81FwjfHdizJCyexcrSC-aHdBsI4KJrijKPB9gMJhKL3zkZqAUPxxRZbqqc_T3v43Vfzq7EqfHmDIGfy6ExyqyIcrEA4nsoVYIT45wdQ%3D%3D& p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao7E5gbfNQQZL25R7X8rHumPKLkb1vrt7FzszzNac97x6scO-l_CAJA2pp7vqAzoKaPWrQbaAdFX1EYtSGzwQ00_3rxfq9EC2N34MVqYvTpdOqD6VFOkydXUh8nag0FeW-5IdT8kqpc4l8BK7DYyiliINDFE8nGe-_tZ67GHpaeaEodwEPxwr5y9PEKZsK8AOqGb3W7mMNOXf5K2ifYtFHNEhkIwp7tX4c_r8wNkK4nI0OP9bSsqWfavKENKyd4hv11vZsQwMMqk4lHBj35895jnVJrVmuJIehDFnfXiWpCd8y1sPVt2Jj_KWI9WjprtzjSLmh4gapq6Th6-mb0cPd9Ir0BJ8VKd1y64Osp4wsAV3fqkI_LfxOM7qjxha7alyoeHWJbdWmpZMC2dk39Lzcn-A%3D%3D& p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao7E5gbfNQQZL2IjiakkLCB2e3LlKkaLpxem9U1TDkX1zXXSu0b1vygZZYQ2D-xO_g3TH38NNiVwXyXewXeY5oV-xb1z0w0iMs6_otnuSQiCS9kqvRlyFj6CFSxDWH7FdbvrWzrQBl1ZXPF3UN8_VRUqBDCo0Y0jRyVoeqfReKnw18z0Owqdaof4iGeKSAnbaHDUjMW3twhXCYoI8mfJMDSXIsdSuwdL8ic4RvGoYkCSFsJpOeVGIrASpcfs_BdNpfQ-wMntOuhuMzyfgfqug9SdC4ahysz1rrKhsRpYbeqnrfcEHhB_4XE9ZFiAyQh3FiT46FSDndXFuDYuSquq59WjjWXy-tYdG6TIuD5Qqm43y7HqgRcW6xHXKcMH54-yWknox9xNnLe6KW1rU7wzJtIXA%3D%3D& p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao7E5gbfNQQZL3cV4oaEf_HZr6luEI9v7oHfV5XfxYy-Tydc8NWRro1tY0PwQAx7zYbMQTyBEKKtADJfk72dQE7cAGBsLEFtoooxfsrtAdxSZumkZuLm-u0htOroZSssBc89h1GkltmTR02Wmcaic7cK_6FmZ_PYMSCtn681bmy73-wgHK1gOdfhrPIJ-vyEuEjZ62yK42nqTTURVv8fQaTi45WHAQTCD3OlrmDHFQv2N4SM1fEBKj962jWjCrqJiC_zTOqHI2G7kzmjlbYtYINm1-oZV7eFe3cSg0-z89p2yIwrHNgRFCx2chtJHvbZa43oZ-5JXmOH_fSP9FLpJNyRTje0xjXRYJauDpqvQt6y8d8SWKta30e_TEeeBAU-OD3QTk5om5RGgEYXB5iWr9L0A%3D%3D& p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao7E5gbfNQQZL3huhr3Q4Q37_DepnvQ8Dww_baGDgje2UgkefE5JxJUOgdltzJZPiboBTN1o4MXINHsiv6_2c2xSx_WQkpnqqThvTBeyXs9ydvJ0BLuRYh_9UX8FN30vQCCBY_NGrBf9yDnYWGcshMJjJ75H31r0Z1G3Lz10NmPxrQ0AOOToabNj-a14tXPoOSAmjpEWn3g9ppAcpj_majxwaRp2XmpyhyBvVS1A63VFiq-w_YsG2ud5jRvXsuucr-cvKKrzWeZlr84bcb5Dx2k0DEaMKrCBisYGi7z2zN5VprtkU945-2rrdJ3RIvUaAfsBQ-8hwio7-Brep58ed4YAksMTdmy8MHYlLVYVQzQWdzmt9q8QIV4SNdlRG_viBQkbrDgiJNb7UaQhOgmCwFhTg%3D%3D& p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao7E5gbfNQQZL0V7Ns63w32X7xsmMABGKGfTZ6lAueqcR4LI0zEiARH0J0QJMCTpOsz1EEiMl9ZfLO1dj9Q7_MjTpJiqKJxa0CBbG8YcorvPU4zhP7woGn3RL4Wxk9pUlcIR8weGZvuLjbZO4JzzK7QrCtOD9x63dRGR8UfwXqiI7e_-12T7sDKbvbvPiigMKXzx0KgTkaMo5QkeWJwnEDLU6sjKmxOJ0pOnR9t-TlUuZ_ZQOCin-Qh8v5ndvVUo--eWnka3h0Tya1AJTfERlYGLx8LVY_twgrqdCn0wLyEDx-dREPIkKLsOtVFyYPWYujT70RhTURXn-Gi4p1NWbo1g3PHhxH3AxqgFDfb5tpfwAY-vNaGPooMPeiBIkNoqEZRzwdSYt9IsRGQLPhXzdDZzA%3D%3D& p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0l0K3C6TqScvYCre8kU2AZs_elygMTao7E5gbfNQQZL06Jmtm4dp8lSYWJ5VHpIGVb2xyZPOgpUJfu-a66dGm-Zt2bV7HiT7dsTy4gHrhGkIhrof_GJpC1ikO0_YgUa9GLwVWeNtgkXSMlIKDy5MLCCEteJJIx2vUY0BheGLB_bTRjWi9f4llP1bwD2xgpdE1593O-HrNp2JwbGVlVx2yDMuhQtZwsOA-bHJAd3Z7w2Bg5G5Vx63r7KXET_epjCoK1G_-n4Ii9fzPlWn5dEKspO_Kw5PskdBuGD-yV5EcqsLbpGWOKXaZmBwLeQggbAybkzf9hAouIDkJwrSQqSi-V7DTYBYVFo0KWCStHhwR11GHASR1BG_qVceBg4Rh5z73tI4pCxOsLjwTT2-kQ-RwbbQ_GMFluovAXHDoU5JBLlv5YK28eXCY7w%3D%3D'

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
        await notify.sendNotify("中青看点看看赚账号：Tarit", '\n完成' + (lookArr.length + startArr.length) + '次任务，获得' + parseInt(lookscore + gainscore) + '个青豆')
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
