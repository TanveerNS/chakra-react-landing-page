import { GridItem, chakra, } from "@chakra-ui/react"
import { FeatureCardData } from "../../../mockData/data"

const FeatureCard = () =>
    FeatureCardData.map((f) => {
        return <GridItem>
            <chakra.h3 fontSize="xl" fontWeight="600">{f.heading}</chakra.h3>
            <chakra.p>{f.text}</chakra.p>
        </GridItem>
    })


export default FeatureCard