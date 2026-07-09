import PlacementButton from "./PlacementButton"

export default function ButtonGroup({ event, player }) {
    return (
        <div className="btn-group btn-group-toggle" role="group" data-toggle="buttons" aria-label="Finishing Position Button Group">
            <PlacementButton event={event} player={player} type="Won" />
            <PlacementButton event={event} player={player} type="Tied" />
            <PlacementButton event={event} player={player} type="2nd" />
            <PlacementButton event={event} player={player} type="Finished" />
            <PlacementButton event={event} player={player} type="DNF" />
        </div>
    )
}