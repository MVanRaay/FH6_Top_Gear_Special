import { Fragment } from "react"
import SurfaceTypePill from "./SurfaceTypePill"
import EventTypePill from "./EventTypePill"
import ButtonGroup from "./ButtonGroup"

export default function ScorecardTable({ numberOfPlayers, events }) {
    return (
        <table className="table table-striped table-bordered table-hover text-center align-middle">
            <thead className="sticky-top">
                <tr>
                    <th scope="col">Episode</th>
                    <th scope="col">Chapter</th>
                    <th scope="col">Event</th>
                    <th scope="col">Road Surface</th>
                    <th scope="col">Type</th>
                    {[...Array(numberOfPlayers).keys()].map(key => 
                        <th scope="col" key={key}>Player {key + 1}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {events.map((event, key) => (
                    <Fragment key={key}>
                        <tr>
                            <td>
                                {event.episode}
                            </td>
                            <td>
                                {event.chapter}
                            </td>
                            <th scope="row">
                                {event.title}
                            </th>
                            <td>
                                <SurfaceTypePill surfaceType={event.surfaceType} />
                            </td>
                            <td>
                                <EventTypePill eventType={event.eventType} />
                            </td>
                            {[...Array(numberOfPlayers).keys()].map(playerIdx => 
                                <td>
                                    <ButtonGroup event={event.shortName} player={playerIdx + 1} />
                                </td>
                            )}
                        </tr>
                    </Fragment>
                ))}
            </tbody>
        </table>
    )
}