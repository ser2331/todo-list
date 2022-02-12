import React from "react";
import homeImage from '../../../assets/images/logo.png';

import './home-page.scss';

const HomePage = () => {
    return (
        <div className="HomePage">
            <div className="HomePage__content-wrapper">
                <div className="description-app">
                    {`Todo List – это список дел,
                    которые вам нужно выполнить или того,
                    что вы хотите сделать. Традиционно их пишут на листке бумаги и
                    организовывают в порядке приоритета.
                    При выполнении задачи, её обычно вычеркивают из списка.`}
                    <br/>
                    <br/>
                    {`В данном приложении у вас есть возможность запланировать любое дело,
                        отметить его как выполненное и удалить.`}
                    <br/>
                    <br/>
                    {`Для того чтоб удалить дело нажмите на кнопку с иконкой карзины,
                    для того чтоб отметить дело как выполненное просто нажмите на текст,
                    для того чтоб добавить новое дело введите текст и нажмите "enter".`}
                    <br/>
                    <br/>
                    {`Для перехода к списку дел нажмите в верху сайта "ToDo-List".`}
                </div>

                <div className="logo-app">
                    <img src={homeImage} alt="pic"/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;