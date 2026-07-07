import PlacementButton from "./PlacementButton"

export default function ButtonGroup({ location, player }) {
    return (
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <PlacementButton location={location} player={player} type="Won" />
            <PlacementButton location={location} player={player} type="2nd" />
            <PlacementButton location={location} player={player} type="Finished" />
            <PlacementButton location={location} player={player} type="DNF" />
        </div>
    )
}