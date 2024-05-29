import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./form.css";
import { DropdownList, NumberPicker, Combobox } from "react-widgets";

function SearchBox(props) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  //Handling pstcode search
  const handlePostCodeChange = (value) => {
    // Pass the selected or typed postcode to the searchProperty function
    props.searchProperty(value);
  };
  // Handling Date
  const handleDateChange = (date) => {
    // Pass the selected date to the date function
    props.date(date);
  };

  return (
    <section>
      <form onSubmit={handleClick} method="post" className="form-section">
        <h3 className="searchText">SEARCH MY PROPERTY</h3>

        <div className="flex">
          {/* <div className="box">
                    <p>Enter location</p>
                    <input onChange={(e) => props.handleSearch(e.target.value)}  type="text" name="location" required  placeholder="enter city name" className="input" />
                    </div> */}

          <div className="box">
            <label htmlFor="postcode"></label>
            <p>Enter postal code</p>
            <input
              onChange={(e) => props.searchProperty(e.target.value)}
              type="text"
              name="postcode"
              required
              placeholder="ex: NPW231"
              className="input"
            />
          </div>
          {/* <Combobox
                        onChange={(value) => handlePostCodeChange(value)}
                        // Use your own data source for suggestions
                        data={['NPW1', 'NPW2', 'BR6']} //  postcode data for auto suggest
                        caseSensitive={false}
                        suggest
                        placeholder="ex: 1"
                    /> */}

          <div className="box">
            <p>Property type</p>
            <select
              onChange={(e) => props.selectType(e.target.value)}
              name="type"
              className="input"
            >
              <option value="">Any</option>
              <option value="house">House</option>
              <option value="flat">Flat</option>
            </select>
            {/* <label htmlFor="type">Property type</label>
                    <DropdownList
                        className="input"
                        onChange={(value) => props.selectType(value)}
                        data={["Any", "House", "Flat"]}
                        value={props.selectPropType}
                        /> */}
          </div>

          <div className="box">
            <p>How many Bedrooms Min</p>
            <select
              onChange={(e) => props.minRooms(e.target.value)}
              name="bhk"
              className="input"
            >
              <option value="0">Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
            {/* <NumberPicker
                            onChange={(value) => props.minRooms(value)}
                            min={0}
                            max={9}
                            defaultValue={0}
                            className="input" 
                            /> */}
          </div>
          <div className="box">
            <p>How many Bedrooms Max</p>
            <select
              onChange={(e) => props.maxRooms(e.target.value)}
              name="bhk"
              className="input"
            >
              <option value="9999999">Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
            {/* <NumberPicker
                            onChange={(value) => props.maxRooms(value)}
                            min={0}
                            max={9}
                            defaultValue={0}
                            className="input" 
                            /> */}
          </div>
          <div className="box">
            <p>Minimum budget</p>
            <select
              onChange={(e) => props.minPrice(e.target.value)}
              name="minimum"
              className="input"
            >
              <option value="0">Any</option>
              <option value="100000">100000</option>
              <option value="200000">200000</option>
              <option value="300000">300000</option>
              <option value="400000">400000</option>
              <option value="500000">500000</option>
              <option value="600000">600000</option>
              <option value="700000">700000</option>
              <option value="800000">800000</option>
              <option value="900000">900000</option>
            </select>
            {/* <NumberPicker
                        onChange={(value) => props.minPrice(value)}
                        min={0}
                        max={900000}
                        step={10000}
                        format="$#,###"
                        placeholder="Select minimum budget"
                        defaultValue={0}
                    /> */}
          </div>
          <div className="box">
            <p>Maximum budget</p>
            <select
              onChange={(e) => props.maxPrice(e.target.value)}
              name="maximum"
              className="input"
              required
            >
              <option value="999999999999999">Any</option>
              <option value="100000">100000</option>
              <option value="200000">200000</option>
              <option value="300000">300000</option>
              <option value="400000">400000</option>
              <option value="500000">500000</option>
              <option value="600000">600000</option>
              <option value="700000">700000</option>
              <option value="800000">800000</option>
              <option value="900000">900000</option>
            </select>
            {/* <div className="box">
                        <label htmlFor="date">Select a Date</label>
                        
                        </div> */}

            {/* <NumberPicker
                            onChange={(value) => props.maxPrice(value)}
                            min={0}
                            max={1000000}
                            step={100000}
                            defaultValue={0}
                            className="input" 
                            />
                     */}
          </div>

          {/*} <div className="box">
                    <p> Select a Date</p>
                    <DatePicker selected={selectedDate} onChange={(date) => {
                    setSelectedDate(date)
                    props.date(date)
                    }} />
                    {/* Get date as parameter and we set it to selecrted date /}
                    </div> */}
        </div>
        {/* <input type="submit" value="search property" className="search btn"  /> */}
        {/* <label>Show Favorites</label>
        <input
          type="checkbox"
          checked={showOnlyFavorites}
          onChange={toggleShowFavorites}
        /> */}
      </form>
    </section>
  );
}

function handleClick(event) {
  event.preventDefault();
}

export default SearchBox;
