import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { bindActionCreators } from "redux";
import {
  historyAction,
  viewHistoryByIdAction,
  DeleteHistory,
} from "../../redux/action/ProductAction";
import { HistoryList } from "./historyList";
import { ViewModal } from "./historyViewModal";

const History = (props) => {
  debugger;
  const [isview, setview] = useState(0);

  useEffect(() => {
    props.history.length === 0 && props.action.getHistory();
  }, [props.history]);

  const ViewHistoryById = (id) => {
    props.action.ViewHistoryById(props.history, id);
    setview(true);
  };

  const DeleteHistoryById = (id) => {
    props.action.DeleteHistory(id);
    toast.success("   Deleted Successfully!!!");
  };
  return (
    <div>
      <HistoryList
        history={props.history}
        ViewHistoryById={ViewHistoryById}
        DeleteHistoryById={DeleteHistoryById}
      />
      <ViewModal isView={isview} setView={setview} view={props.viewHistory} />
    </div>
  );
};

const mapStateToProps = (state) => {
  debugger;
  return {
    viewHistory: state.ViewHistoryReducer,
    history: state.HistoryReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: {
      DeleteHistory: bindActionCreators(DeleteHistory, dispatch),
      ViewHistoryById: bindActionCreators(viewHistoryByIdAction, dispatch),
      getHistory: bindActionCreators(historyAction, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
