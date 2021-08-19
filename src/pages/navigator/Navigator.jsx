import React, {useState} from 'react';
import './Navigator.scss';

const Navigator = () => {
    const buttons = [
        {
            button: 'Sales',
            desc: `Sales Direction has strangers now believing.
                Respect enjoyed gay far exposed parlors towards.
                Enjoyment use tolerably dependent listening men.
                No peculiar in handsome together unlocked do by.
                Article concern joy anxious did picture sir her.
                Although desirous not recurred disposed off shy you numerous securing.
                Refounds Direction has strangers now believing.
                Respect enjoyed gay far exposed parlors towards.
                Enjoyment use tolerably dependent listening men.
                No peculiar in handsome together unlocked do by.
                Article concern joy anxious did picture sir her.
                Although desirous not recurred disposed off shy you numerous securing.`
        },
        {
            button: 'Statistic',
            desc: `Statistic Direction has strangers now believing.
                Respect enjoyed gay far exposed parlors towards.
                Enjoyment use tolerably dependent listening men.
                No peculiar in handsome together unlocked do by.
                Article concern joy anxious did picture sir her.
                Although desirous not recurred disposed off shy you numerous securing.
                Refounds Direction has strangers now believing.
                Respect enjoyed gay far exposed parlors towards.
                Enjoyment use tolerably dependent listening men.
                No peculiar in handsome together unlocked do by.
                Article concern joy anxious did picture sir her.
                Although desirous not recurred disposed off shy you numerous securing.`
        },
        {
            button: 'Offers',
            desc: `Offers Direction has strangers now believing.
                Respect enjoyed gay far exposed parlors towards.
                Enjoyment use tolerably dependent listening men.
                No peculiar in handsome together unlocked do by.
                Article concern joy anxious did picture sir her.
                Although desirous not recurred disposed off shy you numerous securing.
                Refounds Direction has strangers now believing.
                Respect enjoyed gay far exposed parlors towards.
                Enjoyment use tolerably dependent listening men.
                No peculiar in handsome together unlocked do by.
                Article concern joy anxious did picture sir her.
                Although desirous not recurred disposed off shy you numerous securing.`
        },
        {
            button: 'Refounds',
            desc: `Refounds Direction has strangers now believing.
                Respect enjoyed gay far exposed parlors towards.
                Enjoyment use tolerably dependent listening men.
                No peculiar in handsome together unlocked do by.
                Article concern joy anxious did picture sir her.
                Although desirous not recurred disposed off shy you numerous securing.
                Refounds Direction has strangers now believing.
                Respect enjoyed gay far exposed parlors towards.
                Enjoyment use tolerably dependent listening men.
                No peculiar in handsome together unlocked do by.
                Article concern joy anxious did picture sir her.
                Although desirous not recurred disposed off shy you numerous securing.`
        }
    ]

    const [active, setActive] = useState(0)


    return (
        <div className='header'>
            <div className='header__headingDesc'>
                <h3>Check Form Controls</h3>
                <p>Use this elements, if you want to show some hints or additional information</p>
            </div>
            <div className='headerBlock'>
                <div className='header__title'>
                    <h4>DEFAULT TABS</h4>
                    <p>Use default tabs</p>
                </div>
                <div className='header__buttons'>
                    {
                        buttons.map((item, index) =>
                            <div
                                onClick={()=>setActive(index)}
                                className={index === active ? "header__button__active" : ""
                                }>
                                <p>{item.button}</p>
                            </div>
                        )
                    }
                </div>
                <hr/>
                <div className='header__desc'>
                    <p>
                        {buttons[active].desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Navigator;