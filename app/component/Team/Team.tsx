import { TeamCard } from "./TeamCard"

export const Team = () => {
    return (
        <div className="pt-[5rem] pb-[3rem]">
            <h1 className="heading">
                Meet Our Expert <span className="text-red-600">
                    Chefs
                </span>
            </h1>
            <div className="mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
                <div data-aos="fade-left" data-aos-anchor-point="top center">
                    <TeamCard image="/images/team/t1.png" name="Niraj Thakur" position="Master Chef" />

                </div>
                <div data-aos="flip-left" data-aos-anchor-point="center">
                    <TeamCard image="/images/team/t2.png" name="Dipesh Kushwaha" position="Executive Chef" />
                </div>
                <div data-aos="fade-right" data-aos-anchor-point="top center">
                    <TeamCard image="/images/team/t3.png" name="Chiranjivi Singh" position="Kitchen Porter" />
                </div>
            </div>
        </div>
    )
}