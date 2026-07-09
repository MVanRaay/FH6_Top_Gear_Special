export default function SurfaceTypePill({ surfaceType }) {

    const surfaceTypeColors = {
        "Asphalt" : "border-dark bg-dark text-white",
        "Gravel" : "border-warning bg-warning text-dark",
        "Dirt" : "border-success bg-success text-white"
    }

    let surfaceTypeColor = surfaceTypeColors[surfaceType]

    return (
        <div className={`px-2 border border-4 rounded-4 ${surfaceTypeColor}`}>
            {surfaceType}
        </div>
    )
}