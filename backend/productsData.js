
const products = [
    {
        id: 1,
        productName: "Coca-Cola 0,33 dl",
        shortDesc: "Aenean viverra libero sit amet erat pulvinar dapibus. Fusce eros tellus, consequat vitae risus nec, pulvinar placerat turpis, Vivamus varius lacus blandit nisl tempus.",
        longDesc: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin eget nisi ac mi cursus venenatis. Duis iaculis purus eu tristique iaculis. Sed eget libero pulvinar, tincidunt magna nec, efficitur ligula. In nec augue vel nunc molestie pretium. Phasellus id elit ac leo tincidunt ullamcorper et in justo. Integer sed mi nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ac commodo eros. Aenean ultricies ligula turpis, eget facilisis leo facilisis eget. Cras consequat turpis quis diam dignissim, eu malesuada sapien semper. Quisque eu purus eros. Suspendisse vitae cursus augue, vitae facilisis neque. Morbi turpis augue, aliquam eu pulvinar ac, pulvinar at metus. Proin auctor convallis vulputate. Maecenas eget tempus arcu. Etiam feugiat augue ac risus interdum vulputate et eu erat. Vivamus eleifend pharetra libero ac cursus. Nunc a justo orci. Donec consectetur ultricies lorem, tincidunt mattis nisi tempor cursus. Nullam a lacus ex. Donec libero arcu, malesuada in nibh id, blandit ornare tortor. Nullam sapien est, lacinia at ultricies ut, vulputate ac velit. Donec ullamcorper, eros et faucibus fringilla, ligula ipsum blandit lorem, eu fringilla nibh massa at magna.",
        originalPrice: 290,
        lowerPrice: 240,
        imgURL: "/product_images/coca_cola.png",
        new:true
    },
    {
        id: 2,
        productName: "Hell Energiaital",
        shortDesc: "Aenean viverra libero sit amet erat pulvinar dapibus. Fusce eros tellus, consequat vitae risus nec, pulvinar placerat turpis, Vivamus varius lacus blandit nisl tempus.",
        longDesc: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin eget nisi ac mi cursus venenatis. Duis iaculis purus eu tristique iaculis. Sed eget libero pulvinar, tincidunt magna nec, efficitur ligula. In nec augue vel nunc molestie pretium. Phasellus id elit ac leo tincidunt ullamcorper et in justo. Integer sed mi nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ac commodo eros. Aenean ultricies ligula turpis, eget facilisis leo facilisis eget. Cras consequat turpis quis diam dignissim, eu malesuada sapien semper. Quisque eu purus eros. Suspendisse vitae cursus augue, vitae facilisis neque. Morbi turpis augue, aliquam eu pulvinar ac, pulvinar at metus. Proin auctor convallis vulputate. Maecenas eget tempus arcu. Etiam feugiat augue ac risus interdum vulputate et eu erat. Vivamus eleifend pharetra libero ac cursus. Nunc a justo orci. Donec consectetur ultricies lorem, tincidunt mattis nisi tempor cursus. Nullam a lacus ex. Donec libero arcu, malesuada in nibh id, blandit ornare tortor. Nullam sapien est, lacinia at ultricies ut, vulputate ac velit. Donec ullamcorper, eros et faucibus fringilla, ligula ipsum blandit lorem, eu fringilla nibh massa at magna.",
        originalPrice: 290,
        lowerPrice: 240,
        imgURL:"/product_images/hell.png",
        new:true
    },
    {
        id: 3,
        productName: "Balaton szelet",
        shortDesc: "Aenean viverra libero sit amet erat pulvinar dapibus. Fusce eros tellus, consequat vitae risus nec, pulvinar placerat turpis, Vivamus varius lacus blandit nisl tempus.",
        longDesc: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin eget nisi ac mi cursus venenatis. Duis iaculis purus eu tristique iaculis. Sed eget libero pulvinar, tincidunt magna nec, efficitur ligula. In nec augue vel nunc molestie pretium. Phasellus id elit ac leo tincidunt ullamcorper et in justo. Integer sed mi nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ac commodo eros. Aenean ultricies ligula turpis, eget facilisis leo facilisis eget. Cras consequat turpis quis diam dignissim, eu malesuada sapien semper. Quisque eu purus eros. Suspendisse vitae cursus augue, vitae facilisis neque. Morbi turpis augue, aliquam eu pulvinar ac, pulvinar at metus. Proin auctor convallis vulputate. Maecenas eget tempus arcu. Etiam feugiat augue ac risus interdum vulputate et eu erat. Vivamus eleifend pharetra libero ac cursus. Nunc a justo orci. Donec consectetur ultricies lorem, tincidunt mattis nisi tempor cursus. Nullam a lacus ex. Donec libero arcu, malesuada in nibh id, blandit ornare tortor. Nullam sapien est, lacinia at ultricies ut, vulputate ac velit. Donec ullamcorper, eros et faucibus fringilla, ligula ipsum blandit lorem, eu fringilla nibh massa at magna.",
        originalPrice: 290,
        lowerPrice: 240,
        imgURL:"/product_images/balaton.png",
        new:true
    },
    {
        id: 4,
        productName: "Mars szelet",
        shortDesc: "Aenean viverra libero sit amet erat pulvinar dapibus. Fusce eros tellus, consequat vitae risus nec, pulvinar placerat turpis, Vivamus varius lacus blandit nisl tempus.",
        longDesc: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin eget nisi ac mi cursus venenatis. Duis iaculis purus eu tristique iaculis. Sed eget libero pulvinar, tincidunt magna nec, efficitur ligula. In nec augue vel nunc molestie pretium. Phasellus id elit ac leo tincidunt ullamcorper et in justo. Integer sed mi nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ac commodo eros. Aenean ultricies ligula turpis, eget facilisis leo facilisis eget. Cras consequat turpis quis diam dignissim, eu malesuada sapien semper. Quisque eu purus eros. Suspendisse vitae cursus augue, vitae facilisis neque. Morbi turpis augue, aliquam eu pulvinar ac, pulvinar at metus. Proin auctor convallis vulputate. Maecenas eget tempus arcu. Etiam feugiat augue ac risus interdum vulputate et eu erat. Vivamus eleifend pharetra libero ac cursus. Nunc a justo orci. Donec consectetur ultricies lorem, tincidunt mattis nisi tempor cursus. Nullam a lacus ex. Donec libero arcu, malesuada in nibh id, blandit ornare tortor. Nullam sapien est, lacinia at ultricies ut, vulputate ac velit. Donec ullamcorper, eros et faucibus fringilla, ligula ipsum blandit lorem, eu fringilla nibh massa at magna.",
        originalPrice: 290,
        lowerPrice: 240,
        imgURL:"/product_images/mars.png",
        new:true
    },
    {
        id: 5,
        productName: "Twix szelet",
        shortDesc: "Aenean viverra libero sit amet erat pulvinar dapibus. Fusce eros tellus, consequat vitae risus nec, pulvinar placerat turpis, Vivamus varius lacus blandit nisl tempus.",
        longDesc: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin eget nisi ac mi cursus venenatis. Duis iaculis purus eu tristique iaculis. Sed eget libero pulvinar, tincidunt magna nec, efficitur ligula. In nec augue vel nunc molestie pretium. Phasellus id elit ac leo tincidunt ullamcorper et in justo. Integer sed mi nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ac commodo eros. Aenean ultricies ligula turpis, eget facilisis leo facilisis eget. Cras consequat turpis quis diam dignissim, eu malesuada sapien semper. Quisque eu purus eros. Suspendisse vitae cursus augue, vitae facilisis neque. Morbi turpis augue, aliquam eu pulvinar ac, pulvinar at metus. Proin auctor convallis vulputate. Maecenas eget tempus arcu. Etiam feugiat augue ac risus interdum vulputate et eu erat. Vivamus eleifend pharetra libero ac cursus. Nunc a justo orci. Donec consectetur ultricies lorem, tincidunt mattis nisi tempor cursus. Nullam a lacus ex. Donec libero arcu, malesuada in nibh id, blandit ornare tortor. Nullam sapien est, lacinia at ultricies ut, vulputate ac velit. Donec ullamcorper, eros et faucibus fringilla, ligula ipsum blandit lorem, eu fringilla nibh massa at magna.",
        originalPrice: 290,
        lowerPrice: 240,
        imgURL:"/product_images/twix.png",
        new:true
    },
    {
        id: 6,
        productName: "Milky Way",
        shortDesc: "Aenean viverra libero sit amet erat pulvinar dapibus. Fusce eros tellus, consequat vitae risus nec, pulvinar placerat turpis, Vivamus varius lacus blandit nisl tempus.",
        longDesc: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin eget nisi ac mi cursus venenatis. Duis iaculis purus eu tristique iaculis. Sed eget libero pulvinar, tincidunt magna nec, efficitur ligula. In nec augue vel nunc molestie pretium. Phasellus id elit ac leo tincidunt ullamcorper et in justo. Integer sed mi nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ac commodo eros. Aenean ultricies ligula turpis, eget facilisis leo facilisis eget. Cras consequat turpis quis diam dignissim, eu malesuada sapien semper. Quisque eu purus eros. Suspendisse vitae cursus augue, vitae facilisis neque. Morbi turpis augue, aliquam eu pulvinar ac, pulvinar at metus. Proin auctor convallis vulputate. Maecenas eget tempus arcu. Etiam feugiat augue ac risus interdum vulputate et eu erat. Vivamus eleifend pharetra libero ac cursus. Nunc a justo orci. Donec consectetur ultricies lorem, tincidunt mattis nisi tempor cursus. Nullam a lacus ex. Donec libero arcu, malesuada in nibh id, blandit ornare tortor. Nullam sapien est, lacinia at ultricies ut, vulputate ac velit. Donec ullamcorper, eros et faucibus fringilla, ligula ipsum blandit lorem, eu fringilla nibh massa at magna.",
        originalPrice: 290,
        lowerPrice: 240,
        imgURL:"/product_images/milky.png",
        new:true
    }
]

export default products