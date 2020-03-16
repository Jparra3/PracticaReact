import React from 'react'
import Card from './card'


function MyPageList(props){
    return (
        <div>
            {
                props.myPage.map((myPage) => {
                    return (

                        <Card key = {myPage.id}
                            title={myPage.title}
                            description={myPage.description}
                            image={myPage.img}
                            leftColor={myPage.leftColor}
                            rightColor={myPage.rightColor}
                    
                        />
                    )
                })
            }
            
        </div>
    )
}

export default MyPageList