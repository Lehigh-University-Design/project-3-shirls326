import React from 'react'
import './Timeline.css'

export default function Timeline() {
  return (
    <>

    <div id = 'timeline' className='timelineContainer'>
        <h1>Tournaments & Games</h1>
        <div className='tournamentTimeline'>
            <div className='timelineLine'></div>



            <div className='timeLineItem'>
                <div className='leftGrid'>
                    <h3>KENTUCKY STATE CHAMPIONSHIP (1963)</h3>
                    <p>
                        In the charged atmosphere of the Kentucky State Championship, the clash between Beth Harmon, a rising star of chess, and the reigning champion, Harry Beltik, was eagerly anticipated. Beltik's late arrival and demeanor hinted at a lack of respect towards Beth, fueling the intensity of the encounter.

                        As the pieces took their places on the board, the players embarked on a journey through the Caro-Kann Defense, a strategic battleground known for its complexities and nuances. What unfolded was a remarkable homage to a historic confrontation between two chess titans: the attacking genius IM Rashid Nezhmetdinov and the renowned IM Genrikh Kasparian in 1955.

                        The echoes of Nezhmetdinov's audacious attacks and Kasparian's stoic defense reverberated in the moves of Beth and Beltik, as they meticulously recreated the timeless battle on the chessboard. With each pawn advance and piece maneuver, the tension mounted, mirroring the intensity of the original encounter.

                        Beltik's calculated strategy seemed to echo Kasparian's resilient defense, while Beth channeled Nezhmetdinov's bold aggression, seizing the initiative and probing for weaknesses in her opponent's position. The ebb and flow of the game kept spectators on the edge of their seats, as the players navigated the intricacies of the Caro-Kann Defense with skill and determination.

                        In the end, as the final moves unfolded, it became clear that Beth's inspired play had left Beltik on the back foot. With a masterful combination reminiscent of Nezhmetdinov's daring sacrifices, she broke through Beltik's defenses and delivered a decisive blow, securing a victory that would go down in the annals of chess history.

                        The game between Beth Harmon and Harry Beltik was not just a battle for supremacy in the Kentucky State Championship; it was a tribute to the enduring legacy of chess and the indomitable spirit of those who dare to challenge its boundless possibilities.

                    </p>
                </div>
                <div className='rightGrid'>
                    <iframe
                    width="100%"
                    height="400"
                    src="https://lichess.org/study/embed/dffUtue4/e0PQ75ms"
                    title="Chess Study"
                    allowFullScreen
                    />               
                </div>
            </div>


            <div className='timeLineItem'>
                <div className='leftGrid'>
                    <h3>CINCINNATI TOURNAMENT (1963)</h3>
                    <p>
                        In the high-stakes atmosphere of the Cincinnati tournament, viewers are treated to a front-row seat in Beth Harmon's gripping match against the formidable Benny. Taking the white pieces, Beth meticulously visualizes various opening lines, her mind a whirlwind of strategic possibilities. The miniseries expertly showcases a diverse array of openings, from the dynamic Sicilian Scheveningen to the classic Ruy Lopez, as Beth contemplates her first move.

                        Benny, a formidable opponent, opts for the Najdorf Defense, setting the stage for an intense battle of wits. Despite Beth's formidable skills, she finds herself grappling with a disadvantageous position as the game progresses. In a critical moment, she overlooks a crucial resource that could have salvaged a draw. With a devastating fork maneuver, Benny exploits Beth's lapse, leading to her first official loss in the show.

                        The game between Beth and Benny epitomizes the unforgiving nature of competitive chess, where one misstep can lead to defeat. Yet, it also underscores the depth of Beth's journey, showcasing her resilience in the face of adversity and setting the stage for even greater triumphs to come.
                    </p>
                </div>
                <div className='rightGrid'>
                    <iframe
                    width="100%"
                    height="400"
                    src="https://lichess.org/study/embed/dffUtue4/Mbkozl4S"
                    title="Chess Study"
                    allowFullScreen
                    />               
                </div>
            </div>
            
        </div>
    </div>
    
    </>
  )
}
