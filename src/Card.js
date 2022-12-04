export default function Card(props) {
    return (
        <div> 
        <div className="xl:flex xl:flex-row xl:items-start lg:flex lg:flex-row xl:p-2 xl:px-24 md:flex md:flex-row md:items-start  sm:px-12 sm:flex sm:flex-col sm:items-center">
            <div className="lg:p-none sm:p-4 p-2 md:ml-8 lg:ml-8 flex justify-center ">
                <img src={`image/${props.img}`} alt="" className=" rounded-lg  " />
            </div>

            <div className="xl:ml-4 flex flex-col xl:pl-8 xl:pt-8  md:pl-4 md:pt-2 sm:mt-6 sm:ml-6 sm:pl-2 px-2">
                <div className="flex flex-row">
                    <img src="image/placeholder.png" alt="" className="h-4 mr-1 mt-1" />
                    <h3>{props.location}</h3>
                    <a href={props.mapLink} className="text-sm underline text-gray-300 ml-2 mt-1">View on Google Maps</a>
                </div>
                <h1 className="text-4xl font-semibold ">{props.title}</h1>
                <div className="flex mt-3 mb-1 text-base font-semibold ">
                    <p className="">{props.startDate}- </p>
                    <p>{props.endDate}</p>
                </div>
                <div>
                    <p className="text-xs lg:text-sm md:pr-40  ">
                    {props.about}
                    </p>
                </div>

            </div>
        </div>
        <hr class="my-4 mx-auto w-48 h-0.5 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-600"></hr>
        </div>
    )
}