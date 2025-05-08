import { Button } from "../ui/button"
// add random 6 images in a fade in and fade out effect
function ImageGallery() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex w-full mb-20 flex-wrap">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Gallery</h1>
                    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base"> Houbung Events, Kaikhom na program a lim jatchom chom ho.... </p>
                </div>
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="Christmas" className="rounded-sm hover:scale-110 w-full object-cover h-full object-center block overflow-hidden transition ease-in-out duration-300" src="https://scontent.fblr20-2.fna.fbcdn.net/v/t39.30808-6/471688137_3881596262061457_8882837375343667236_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=ipJlT2x_ZtIQ7kNvwGFNWqH&_nc_oc=AdmqL5_7-A0L7Fc8cb0eGIZWDoy8X_Z_KammU2TO9wnH86P3cd8GWWBVKE6DFZJFN7jyA-jM6NWcg_Ih3VTWkQ6l&_nc_zt=23&_nc_ht=scontent.fblr20-2.fna&_nc_gid=Iyqfh06qmGD2nV_m9QUTZg&oh=00_AfJ15SZlwVHD7Nm8ZgNqgtw-eb1u3TYB2RHVMoUfiCguxA&oe=6822E2D8" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="rounded-sm hover:scale-110 w-full object-cover h-full object-center block overflow-hidden transition ease-in-out duration-300" src="https://scontent.fblr20-4.fna.fbcdn.net/v/t39.30808-6/492362691_3991769854377430_8728643538353388964_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=Z8RC_2yOij4Q7kNvwHGY1Wd&_nc_oc=AdmbB_aowK9i-jygvR1MpkRGM3wlI74i7ZEhFgk1asAM0BAfOp-rRgJTVyzJw_oua488bz-TyDxKOKisHOq18J52&_nc_zt=23&_nc_ht=scontent.fblr20-4.fna&_nc_gid=0m3OxyGfG3f-hZsSlZtH3w&oh=00_AfL8DEQPKTPyX9Z5bVwUCSyBtbkPbQIPCJCtVRyk4Hv6Sg&oe=6822CC31" />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="rounded-sm hover:scale-110 w-full h-full object-cover object-center block overflow-hidden transition ease-in-out duration-300" src="https://scontent.fblr20-3.fna.fbcdn.net/v/t39.30808-6/489925679_3983951211825961_1816801148918018786_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=5qJWKT6KZh4Q7kNvwGT2_ry&_nc_oc=Adl_ityhFkIGgCQtJ84LZK1UOkxVzs8ZVOsHphTDHJ2f_5d3_4FL19yWNDWAFqIwQY3HZypPfFJGu7ocNOj5TME4&_nc_zt=23&_nc_ht=scontent.fblr20-3.fna&_nc_gid=Od5PFmUq8ubtEZYQEPNJiw&oh=00_AfK3S54CmGZ0lAddobjTFaX7SKQYs5ukbz55DBX6dIoKyw&oe=6822D53C" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="rounded-sm hover:scale-110 w-full h-full object-cover object-center block overflow-hidden transition ease-in-out duration-300" src="https://scontent.fblr20-2.fna.fbcdn.net/v/t39.30808-6/491408790_3983950405159375_5132683846440956797_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=5Xi84Bg6W2EQ7kNvwGihSXJ&_nc_oc=AdnUU1crWn2V_KkRBL-IQmOaE3Y7HTdM_leq4EAzDiBPYemi4sUIUGmEHLU2TqxihXPcgLKo6hlCGeULpB1wG025&_nc_zt=23&_nc_ht=scontent.fblr20-2.fna&_nc_gid=dG2dZ5JtdwmULPbUeALd4w&oh=00_AfKTULtPPL_Qc8o268G9kAfstD7HxfRzlk_pMhnfFaA8Lg&oe=6822E696" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="rounded-sm hover:scale-110 w-full object-cover h-full object-center block overflow-hidden transition ease-in-out duration-300" src="https://scontent.fblr20-2.fna.fbcdn.net/v/t39.30808-6/480608224_3923812977839785_103108473246605764_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=mdZKJl-mOo0Q7kNvwElVqlJ&_nc_oc=Adm9i0ZYmgIpTCZCMI-bIaUEESZpBNr0x2u-KWbcZwjbESM_5SDwgBo_S8sKqTPOSa6dtEhTZ_XJ4ZzCuCtFmAAc&_nc_zt=23&_nc_ht=scontent.fblr20-2.fna&_nc_gid=7pTmWhYI6yYRTIXKslsU8Q&oh=00_AfLjhPivnagEpLRkhSItj8lYBAA_am_71IzX57FZKGTZYw&oe=6822E52E" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2 overflow-hidden">
                            <img alt="gallery" className=" rounded-sm hover:scale-110 w-full object-cover overflow-hidden transition ease-in-out duration-300 h-full object-center block" src="https://scontent.fblr20-2.fna.fbcdn.net/v/t39.30808-6/475010780_3905523389668744_2859685798832071857_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=euQsIlDUOz8Q7kNvwEynnpu&_nc_oc=Adldr50pOTWqSUJdG5C08-nw5Pwuux5fSt1hJE29fuIMu4ONltNktWiHEli3L7D_XtQPZBzr6wrNAv9uSQQaGJ8s&_nc_zt=23&_nc_ht=scontent.fblr20-2.fna&_nc_gid=kl4c-sr42mb5RQ90Wbm5jw&oh=00_AfKFjDXYKZQtsb4GatjrflfxRgpHfvf0G2JpjenhWesz0w&oe=6822C871" />
                        </div>
                    </div>

                    <Button asChild className="mx-auto inline-flex items-center text-white bg-indigo-500 border-0 py-6 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0">
                        <a
                            href="https://www.facebook.com/groups/kwsbangalore/media"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-center"
                        >
                            click to view more...
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default ImageGallery