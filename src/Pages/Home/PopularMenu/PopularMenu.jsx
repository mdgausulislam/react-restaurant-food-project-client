import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu]=useMenu();
    const popular = menu.filter(item=>item.category=='popular')

    return (
        <section className='mb-12'>
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"Check it out"}
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center mt-5'>
                <button className="btn btn-outline uppercase text-[#BB8506] border-0 border-b-4  text-lg rounded-lg px-5 mt-4">View Full Menu</button>
            </div>
        </section >
    );
};

export default PopularMenu;