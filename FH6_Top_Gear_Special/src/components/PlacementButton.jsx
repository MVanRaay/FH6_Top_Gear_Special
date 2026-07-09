export default function PlacementButton({ event, player, type }) {
    return (
        <>
            <label className="btn btn-secondary">
                <input type="radio" className={`p${player}-${type}`} name={`${event}-p${player}`} id={`${event}-p${player}-${type}`} autoComplete="off" />
                {type}
            </label>
        </>
    )
}