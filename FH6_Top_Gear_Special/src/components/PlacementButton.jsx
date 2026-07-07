export default function PlacementButton({ location, player, type }) {
    return (
        <>
            <label className="btn btn-secondary">
                <input type="radio" className={`p${player}-${type}`} name={`${location}-p${player}`} id={`${location}-p${player}-${type}`} autoComplete="off" />
                {type}
            </label>
        </>
    )
}