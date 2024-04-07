// import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";

// import { MARGIN } from "./Config";
// import Tile from "./Tile";
// import SortableList from "./SortableList";
// import { View } from "react-native";

// const tiles = [
//   {
//     id: "spent",
//   },
//   {
//     id: "cashback",
//   },
//   {
//     id: "recent",
//   },
//   {
//     id: "cards",
//   },
// ];

// const WidgetList = () => {
//   return (
//     <SafeAreaView
//       style={{ flex: 1, backgroundColor: "black", paddingHorizontal: MARGIN }}
//     >
//       <SortableList
//         editing={true}
//         onDragEnd={(positions) =>
//           console.log(JSON.stringify(positions, null, 2))
//         }
//       >
//         {[...tiles, ...tiles].map((tile, index) => (
//             <Tile
//               onLongPress={() => true}
//               key={tile.id + "-" + index}
//               id={tile.id + "-" + index}
//             />
//         ))}
//       </SortableList>
//     </SafeAreaView>
//   );
// };

// export default WidgetList;


import React from 'react';

import { MARGIN } from './Config';
import Tile from './Tile';
import SortableList from './SortableList';
import { View } from 'react-native';

const tiles = [
  {
    id: 'spent',
  },
  {
    id: 'cashback',
  },
  {
    id: 'recent',
  },
  {
    id: 'cards',
  },
];

const WidgetList = () => {
  return (
    <View
      style={{
        paddingHorizontal: MARGIN,
        marginBottom: 80,
      }}>
      <SortableList
        editing={true}
        onDragEnd={(positions) => console.log(JSON.stringify(positions, null, 2))}>
        {[...tiles].map((tile, index) => (
          <Tile onLongPress={() => true} key={tile.id + '-' + index} id={tile.id} />
        ))}
      </SortableList>
    </View>
  );
};

export default WidgetList;