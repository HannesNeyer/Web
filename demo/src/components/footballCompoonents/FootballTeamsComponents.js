import React, { useEffect, useState } from 'react';
import TeamsContent from './TeamsContent';
 
export default function FootballTeamsReact() {
    const [teams, setTeams] = useState([]);
    const [groupedTeams, setGroupedTeams] = useState({});
 
    useEffect(() => {
        fetch("https://api.openligadb.de/getavailableteams/bl1/2023")
            .then(res => res.json())
            .then(data => {
                setTeams(data);
            });
    }, []);
 
    useEffect(() => {
        const groupByLetter = teams.reduce((acc, team) => {
            const letter = team.teamName[0].toUpperCase();

            if (!acc[letter]) {
                acc[letter] = [];
            }

            acc[letter].push(team);
            return acc;
        }, {});
 
        setGroupedTeams(groupByLetter);

    }, [teams]);
 
    return (
        <>
            {Object.entries(groupedTeams).map(([letter, teams]) => (
                <div>
                    <h4 className="relative font-sans-serif text-[50px] z-[-2]">{letter}</h4>
                    <div key={letter} className="flex overflow-x-scroll">
                        <div className="flex z-[-5]">
                            {teams.map(team => (
                                <TeamsContent key={team.TeamId} teamName={team.teamName} teamIconUrl={team.teamIconUrl} />
                            ))}
                        </div>
                    </div>
                </div>

            ))}

        </>

    );

}