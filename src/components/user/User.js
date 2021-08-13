
export function User({item}){

    return (
        <div>
            <h2>{item.id}.{item.name}  - {item.username}</h2>

                <li><strong>Street:</strong> {item.address.street}</li>
            <li><strong>Suite:</strong></li>
                    <p><strong>email:</strong> {item.email}</p>
                <ul>
                    <li><strong>Address:</strong>ong> {item.address.suite}</li>
                <li><strong>City:</strong> {item.address.city}</li>
                <li><strong>Zipcode:</strong> {item.address.zipcode}</li>
                <strong>Geo:</strong>
                <li><strong>Lat:</strong> {item.address.geo.lat}</li>
                <li><strong>Lng:</strong> {item.address.geo.lng}</li>
                <p><strong>Phone:</strong> {item.phone}</p>
                <p><strong>Website:</strong> {item.website}</p>
                <strong>Company:</strong>
                <li><strong>NameCompany:</strong> {item.company.name}</li>
                <li><strong>CatchPhrase:</strong> {item.company.catchPhrase}</li>
                <li><strong>Bs:</strong> {item.company.bs}</li>
            </ul>
            <button>details</button>
            <div>

                {/*<Posts posts={posts}/>*/}
            </div>
        </div>
    )
}