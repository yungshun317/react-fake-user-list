import React from "react";
import faker from "faker";
import { FixedSizeList } from "react-window";

const bigList = [...Array(5000)].map(() => ({
	name: faker.name.findName(),
	email: faker.internet.email(),
	avatar: faker.internet.avatar()
}));

/* [1] Render a large array of fake data
function List({ data = [], renderItem, renderEmpty }) {
	return !data.length ? (
		renderEmpty
	) : (
	    <ul>
	        {data.map((item, i) => (
	        	<li key={i}>{renderItem(item)}</li>
	        ))}
	    </ul>
	);
}

export default function App() {
    const renderItem = item => (
    	<div style={{ display: "flex" }}>
    	    <img src={item.avatar} alt={item.name} width={50} />
    	    <p>
    	        {item.name} - {item.email}
    	    </p>
    	</div>
    )

	return <List data={bigList} renderItem={renderItem} />;
}
*/

// [2] Virtualized list
export default function App() {
	// Modified from `renderItem`
	const renderRow = ({ index, style }) => (
		<div style={{ ...style, ...{ display: "flex" } }}>
		    <img
		        src={bigList[index].avatar}
		        alt={bigList[index].name}
		        width={50}
		    />
		    <p>
		        {bigList[index].name} - {bigList[index].email}
		    </p>
		</div>
	);

	return (
		<FixedSizeList
		    height={window.innerHeight}
		    width={window.innerWidth - 20}
		    itemCount={bigList.length}
		    itemSize={50}
		>
		    {renderRow}
		</FixedSizeList>
	);
}