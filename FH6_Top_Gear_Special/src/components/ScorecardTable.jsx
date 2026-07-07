import ButtonGroup from "./ButtonGroup"
import { Fragment } from "react"

export default function ScorecardTable({ numberOfPlayers }) {
    const locations = [
        "Fuji Shibazakura speed zone",
        "Hakone Turns speed zone",
        "Nangan Turn speed trap",
        "Irokawa Launch danger sign",
        "Irokawa Quarter Mile drag meet"
    ]

    const locationsShort = {
        "Fuji Shibazakura speed zone" : "fuji-shibaz",
        "Hakone Turns speed zone" : "hakone",
        "Nangan Turn speed trap" : "nangan",
        "Irokawa Launch danger sign" : "irokawa-launch",
        "Irokawa Quarter Mile drag meet" : "irokawa-drag"
    }

    const locationsColors = {
        "Fuji Shibazakura speed zone" : "border-primary",
        "Hakone Turns speed zone" : "border-primary",
        "Nangan Turn speed trap" : "border-warning",
        "Irokawa Launch danger sign" : "border-danger",
        "Irokawa Quarter Mile drag meet" : "border-success"
    }

    return (
        <table className="table table-striped table-bordered table-hover text-center align-middle">
            <thead>
                <tr>
                    <th scope="col">Event</th>
                    <th scope="col">Type</th>
                    {[...Array(numberOfPlayers).keys()].map(key => <th scope="col" key={key}>Player {key + 1}</th>)}
                </tr>
            </thead>
            <tbody>
                {locations.map((location, key) => (
                    <Fragment key={key}>
                        <tr>
                            <th scope="row">
                                <div className="d-flex flex-row justify-content-center">
                                    <div className="pe-2">
                                        {location}
                                    </div>
                                </div>
                            </th>
                            <td>
                                <div className={`border border-2 w-100 h-100 ${locationsColors[location]}`}>
                                    <div className="d-flex flex-row justify-content-center">
                                        <div className={`rounded `}>
                                            Speed Trap
                                        </div>
                                    </div>
                                </div>
                            </td>
                            {[...Array(numberOfPlayers).keys()].map(playerIdx => 
                                <td>
                                    <ButtonGroup location={locationsShort[location]} player={playerIdx + 1} />
                                </td>
                            )}
                        </tr>
                    </Fragment>
                ))}
            </tbody>
        </table>
    )
}