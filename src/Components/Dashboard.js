import React, { useState } from 'react'
import CustomCard from './CustomCard'
import Switch from './Switch'
import Slider from './Slider'
import Select from './Select'

export default function Dashboard() {

    const [online, setOnline] = useState(true)

    return (
        <div className="ContentBox">
            <div className="ThreeCardsBox">
                <CustomCard
                    title="Online Mode"
                    description=" Is this application connected to the internet?"
                    component={Switch}
                    state={online}
                    setState={setOnline}
                />
                <CustomCard
                    title="Master Volumne"
                    description="Overides all other sound settings in this application"
                    component={Slider}
                    // state={online}
                    // setState={setOnline}
                />
                <CustomCard
                    title="Sound Quality"
                    description="Manually control the musci quality in event of poor connection"
                    component={Select}
                    state={online}
                    setState={setOnline}
                />

            </div>

            <div>
                <h4>System Notifications:</h4>
                {!online && <p>Your application is offline. You won't be able to share or stream music to other devices</p>}
            </div>
        </div>
    )
}
