import React from 'react'
import Card from './card'

// aplicando ES6
const MyPageList = ({myPage}) => (
    <div>
            {
                myPage.map((myPage) => {
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

// //sin aplicar ES6
// function MyPageList(props){
//     return (
        
//     )
// }

export default MyPageList