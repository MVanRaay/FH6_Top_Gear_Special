export default function EventTypePill({ eventType }) {

    const eventTypeColors = {
        "Speed Zone" : "border-primary bg-primary text-white",
        "Speed Trap" : "border-warning bg-warning text-dark",
        "Danger Sign" : "border-danger bg-danger text-white",
        "Drag Meet" : "border-success bg-success text-white",
        "Drift Zone" : "border-secondary bg-secondary text-white",
        "Time Attack" : "border-info bg-info text-dark"
    }

    let eventColorScheme = eventTypeColors[eventType]

    return (
        <div className={`px-2 border border-4 rounded-4 ${eventColorScheme}`}>
            {eventType}
        </div>
    )
}