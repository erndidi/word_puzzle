import { Nav } from "grommet"

const NavBar = () => {
    return (
        <Box
            tag='header'    // sets the HTML tag Box is rendered as to header
            direction='row' // sets the flex direction to row
            align='center'
            justify='between' // spreads out the content of the box
            background='brand' // sets the background to the brand, or main, color of the theme.
            pad='10px' // sets the padding, or space around all content within the box
            elevation='medium' // how high above the background this element will seem. Gives a box shadow.
            {...props} // spreads any children elements passed in as props
        />
    )
}

export default NavBar;