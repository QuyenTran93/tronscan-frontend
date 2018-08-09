import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {loadAccounts} from "../actions/app";
import {tu} from "../utils/i18n";
import {FormattedNumber, injectIntl} from "react-intl";
import {filter} from "lodash";
import {AddressLink} from "./common/Links";
import Paging from "./common/Paging";
import {Client} from "../services/api";
import {CIRCULATING_SUPPLY, ONE_TRX} from "../constants";
import {Sticky, StickyContainer} from "react-sticky";
import {TRXPrice} from "./common/Price";
import {WidgetIcon} from "./common/Icon";
import {Table, Input, Button, Icon} from 'antd';
import xhr from "axios/index";

class Accounts extends Component {

  constructor() {
    super();

    this.state = {
      loading: true,
      searchString: "",
      accounts: [],
      total: 0,
    }
  }

  componentDidMount() {
    this.loadAccounts();
  }

  loadAccounts = async (page = 1, pageSize = 40) => {

    this.setState({loading: true});

    /*
    let {accounts, total} = await Client.getAccounts({
      sort: '-balance',
      limit: pageSize,
      start: (page-1) * pageSize,
    });
    */
    let data = await xhr.get("/foundation_addresses.json");
    
    this.setState({
      loading: false,
      accounts: data.data,
      total: data.total,
    });
  };

  componentDidUpdate() {
  }


  renderAccounts() {

    let {accounts} = this.state;
    let {intl} = this.props;
    if (accounts.length === 0) {
      return;
    }
    let column = [
      {
        title: '#',
        dataIndex: 'key',
        key: 'key',
        width: 100,
        className: 'ant_table'
      },
      {
        title: intl.formatMessage({id: 'address'}),
        dataIndex: 'address',
        key: 'address',
        render: (text, record, index) => {
          return (
              <AddressLink address={text}/>
          )
        }
      },
      {
        title: intl.formatMessage({id: 'balance'}),
        dataIndex: 'balance',
        key: 'balance',
        width: 150,
        render: (text, record, index) => {
          return (
              <FormattedNumber value={text}/>
          )
        }
      }
    ];
    return (
        <Fragment>
          <Table columns={column} dataSource={accounts}/>
        </Fragment>
    )
  }

  render() {

    let {match} = this.props;
    let {total, loading} = this.state;

    return (
        <main className="container header-overlap pb-3">
          <div className="row">
            <div className="col-md-4 mt-3 mt-md-0">
              <div className="card h-100 text-center widget-icon">
                <div className="card-body">
                  <h3 className="text-primary">
                    <FormattedNumber value={1000}/>
                  </h3>
                  {tu("addresses_number")}
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-3 mt-md-0 position-relative">
              <div className="card h-100 widget-icon">

                <div className="card-body text-center">
                  <h3 className="text-secondary">
                    <FormattedNumber value={total}/>
                  </h3>
                  {tu("foundation_address")}
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-3 mt-md-0">
              <div className="card h-100 widget-icon">

                <div className="card-body text-center">
                  <h3 className="text-success">
                   2020/01/01
                  </h3>
                  {tu("unfreeze_time")}
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-md-12">
              <div className="card mt-1">
                {this.renderAccounts()}
              </div>
            </div>
          </div>
        </main>
    )
  }
}

function mapStateToProps(state) {
  return {
    accounts: state.app.accounts,
  };
}

const mapDispatchToProps = {
  loadAccounts,
};


export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Accounts))
