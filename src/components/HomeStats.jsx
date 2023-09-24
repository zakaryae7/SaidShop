function HomeStats() {
    let Data = [
        {
            title: 'Satisfied Clients',
            numb: '+528'
        },
        {
            title: 'Best Products',
            numb: '+22'
        },
        {
            title: 'Satisfied Clients',
            numb: '+528'
        },
    ]
    return (
        <section className="text-gray-600 body-font my-20">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Stats Past Two Years</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Our primary focus is ensuring our customers' happiness. With a consistently high customer satisfaction rate of over 95%, we take pride in delivering quality products and exceptional service that keep our customers coming back.</p>
                </div>
                <div className="flex lg:flex-row flex-col text-center lg:text-start gap-10 lg:justify-around ">
                    {Data.map(val => {
                        return (
                            <div>
                                <h1 className="text-4xl lg:text-5xl font-semibold text-main">{val.numb}</h1>
                                <h1 className="text-xl mt-5 lg:mt-2">{val.title}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default HomeStats;