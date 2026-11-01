export default function Navbar() {
    return (
        <>
        <nav className="w-full flex items-center justify-around font-medium text-sm text-[#404756] px-5 py-2.5">
            <div className="flex items-center gap-2">
                <img className="h-9 w-auto" src="image.png" alt="" />
                <a className="text-[#5e687e] text-sm" href="">v19.3</a>
            </div>

            <input type="text" placeholder="Search" className="bg-[#99a1b333] w-[800px] text-sm px-5 py-2.5 rounded-full" name="" id="" />
            
            <a href="">Learn</a>
            <a href="">Reference</a>
            <a href="">Community</a>
            <a href="">Blog</a>
            <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd" transform="translate(-440 -200)"><path fill="currentColor" fill-rule="nonzero" stroke="currentColor" stroke-width="0.5" d="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z" transform="translate(354.5 192)"></path><polygon points="444 228 468 228 468 204 444 204"></polygon></g></svg>
            </a>
            <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "></path></svg>
            </a>
            <a href="">
                <img className="h-6" src="github.png" alt="" />
            </a>
            
        </nav>
        </>
    )
}