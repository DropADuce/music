import React from 'react';
import '../baseStyle.scss'
import ParallaxSection from "../../components/ParallaxSection/ParallaxSection";

const MainPage = () => {

    const defaultBlur = {min: -15, max: 15}

    return (
        <div className={"page"}>
            <ParallaxSection alt={'BMTH'}
                             url={'https://vistapointe.net/images/bring-me-the-horizon-2.jpg'}
                             blur={defaultBlur}
                             strength={-200}>
                <div className={"section__item section__item_bordered"}>
                    <h1>
                        Добро пожаловать на проект Druce Music
                    </h1>
                </div>
                <div>
                    <ul className={"section__item"}>
                        В этом проекте я хочу попрактиковать следубщие вещи:
                        <li>
                            Верстка по БЭМ
                        </li>
                        <li>
                            Работа с Redux + Redux-thunk
                        </li>
                        <li>
                            Работа с TypeScript
                        </li>
                        <li>
                            Планирую разработать простенький бэкенд
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className={"section__item"}>
                        А так же хочу поработать с такими вещами как
                        <li>
                            WebSocket
                        </li>
                        <li>
                            Хочу использовать Formik для типизации форм
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className={"section__item"}>
                        Технологии, которых точно не будет:
                        <li>
                            StyledComponents
                        </li>
                        <li>
                            Material UI, AntDesign, и других UI библиотек
                        </li>
                    </ul>
                </div>
            </ParallaxSection>
            <ParallaxSection alt={'STRKL'}
                             url={'https://img3.goodfon.ru/original/1920x1080/4/c7/yuriy-kaplan-gruppa-valentin.jpg'}
                             blur={defaultBlur}
                             strength={-200}>
                <div className={"section__item section__item_bordered"}>
                    <h1>
                        План развития
                    </h1>
                </div>
                <div>
                    <ul className={"section__item"}>
                        Будут реализованы следующие штуки:
                        <li>
                            Логин/Разлогин, авторизация
                        </li>
                        <li>
                            Будет создан личный кабинет
                        </li>
                        <li>
                            Простенький бэкенд
                        </li>
                        <li>
                            Возможность добавлять и удалять аудиозаписи
                        </li>
                        <li>
                            Возможность слушать добавленные аудиозаписи
                        </li>
                        <li>
                            Возможность добавлять чужие аудиозаписи в свою библиотеку
                        </li>
                    </ul>
                </div>
            </ParallaxSection>
        </div>
    )
}
//     <div className={"page"}>
//         <ParallaxSection alt={'BMTH'}
//                          url={'https://vistapointe.net/images/bring-me-the-horizon-2.jpg'}
//                          blur={{...defaultBlur}} strength={-200}>
//             <div className={"section__item section__item_bordered"}>
//                 <h1>
//                     Добро пожаловать на проект Druce Music
//                 </h1>
//             </div>
//             <div>
//                 <ul className={"section__item"}>
//                     В этом проекте я хочу попрактиковать следубщие вещи:
//                     <li>
//                         Верстка по БЭМ
//                     </li>
//                     <li>
//                         Работа с Redux + Redux-thunk
//                     </li>
//                     <li>
//                         Работа с TypeScript
//                     </li>
//                     <li>
//                         Планирую разработать простенький бэкенд
//                     </li>
//                 </ul>
//             </div>
//             <div>
//                 <ul className={"section__item"}>
//                     А так же хочу поработать с такими вещами как
//                     <li>
//                         WebSocket
//                     </li>
//                     <li>
//                         Хочу использовать Formik для типизации форм
//                     </li>
//                 </ul>
//             </div>
//             <div>
//                 <ul className={"section__item"}>
//                     Технологии, которых точно не будет:
//                     <li>
//                         StyledComponents
//                     </li>
//                     <li>
//                         Material UI, AntDesign, и других UI библиотек
//                     </li>
//                 </ul>
//             </div>
//         </ParallaxSection>
//
//     </section>
// </Parallax>
//
//
// )
// ;
// }
// ;

export default MainPage;