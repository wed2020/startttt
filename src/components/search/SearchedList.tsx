import React, { Fragment, useEffect } from "react";
import { List, Spin } from "antd";

import { data } from "../../data/data";

//Redux
import { connect, ConnectedProps } from "react-redux";

// Types declaration
interface GetData {
  searchReducer: {
    search: string;
  };
  getDataReducer: {
    loading: boolean;
    data: {}[];
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

const SearchedList = ({ loading, search, getData }: PropsFromRedux) => {
  useEffect(() => {
    getData();
  }, []);

  let stations = data();
  console.log("undefined22", stations, search, loading);

  return (
    <Fragment>
      {loading ? (
        <Spin />
      ) : (
        <List
          size="small"
          bordered
          dataSource={stations}
          renderItem={(station) => (
            <List.Item>
              <i className="fas fa-subway"></i> {station.Haltestelle}
            </List.Item>
          )}
        />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state: GetData) => ({
  loading: state.getDataReducer.loading,
  data: state.getDataReducer.data,
  search: state.searchReducer.search,
});

const mapDispatchToProps = {
  getData: () => ({ type: "GET_SUCCESS" }),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(SearchedList);
