// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import styles from './layout.module.scss'
// import { useContext } from "react";
// import { Context } from "../stores";

// const linkInfos = [
//   {
//     title: 'AUROEA',
//     route: '/'
//   },
//   {
//     title: 'TEAM',
//     route: '/team'
//   },
//   {
//     title: 'INVITE',
//     route: '/invite'
//   },
//   {
//     title: 'CONTACT',
//     route: '/contact'
//   }
// ]

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  // const pathName = usePathname()
  // const { curHeadBarBg } = useContext(Context)
  return (
    <div className="w-full relative">
      {/* <div style={{ backgroundColor: curHeadBarBg }} className="w-full flex flex-row justify-between items-center absolute top-0 z-50 md:pt-32 md:px-80 pt-4 px-4">
        <Image
          src={'/logo.png'}
          alt="sviwo"
          className="w-[22.5rem]"
          width={225}
          height={57}
        ></Image>
        <div className="flex-1 flex flex-row justify-end items-center md:ml-40">
          {
            linkInfos.map(item => {
              return (
                <div key={item.route} className={`flex-1 flex flex-row justify-end items-center`}>
                  <div className="flex flex-col justify-start items-center">
                    <Link href={item.route} className="text-6xl mix-blend-difference text-white font-semibold mb-2">
                      {item.title}
                    </Link>
                    {
                      pathName === item.route ? (
                        <div className={`w-36 h-1 bg-sviwoPrimary ${styles.linkBtm}`}></div>
                      ) : (
                        <></>
                      )
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div> */}
      {children}
    </div>
  );
}

export default PageLayout