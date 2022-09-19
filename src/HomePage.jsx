import React, { useEffect, useState } from "react"
import './HomePage.css'
import logo from './img/cerner.png'
import orgData from './org_data.json'
import ktData from './kt_data.json'
import Card from "./card.jsx";

export default function HomePage(props) {
    const [orgs, setOrgs] = useState([]);
    const [teams, setTeams] = useState([]);
    const [map, setMap] = useState({});
    const [currentTeamId, setCurrentTeamId] = useState();
    const [result, setresult] = useState([]);

    useEffect(() => {
        var dict = {}
        var orgs = []
        orgData.forEach((org) => {
            var teams = []
            org.teams.forEach((team) => {
                teams.push([team.name,team.id])
            })
            dict[org.organisation] = teams
            orgs.push(org.organisation)
        })
        setOrgs(orgs)
        setMap(dict)

    }, [])

    const handleOrgChange = (event) => {
        if(event.target.value === 'Select') {
            setTeams([])
            return
        }
        setTeams(map[event.target.value])
    }

    const handleTeamChange = (event) => {
        if(event.target.value === 'Select') {
            setCurrentTeamId(null)
        } else {
            setCurrentTeamId(event.target.value);
        }
        console.log(event.target.value)
    }

    const handleSubmit = () => {
        setresult(ktData.filter(ktFilter));

        function ktFilter(kt) {
            return kt.id === currentTeamId
        }
    }

    return (
        <div className="homepage">
            <div className="header">
                <p>Hello there {props.username}</p>
                <button onClick={props.logout}>logout</button>
            </div>
            <div className="dropdowns">
            <div>
                <label>
                    Organization
                    <select className="dropdown-select" onChange={handleOrgChange} defaultValue={orgs[0]}>
                    <option key={0} value="Select">Select</option>
                    { orgs.map((org, ind) => <option key={ind+1} value={org}>{org}</option>)}
                    </select>
                </label>
            </div>

            <div>
                <label>
                    Team
                    <select className="dropdown-select" onChange={handleTeamChange} defaultValue={teams[0]}>
                    <option key={0} value="Select">Select</option>
                    { teams.map((team, ind) => <option key={ind} value={team[1]}>{team[0]}</option>)}
                    </select>
                </label>
            </div>

            <button onClick={handleSubmit}>Submit</button>
            </div>
            <div>
                <div className="Container">
                    {result.map((item) => (
                    <Card {...item} key={item.id} />
                     ))}
                </div>
            </div>
        </div>
    )
}
