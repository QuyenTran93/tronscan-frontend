import React, { Fragment }  from 'react';
import { tu, t } from "../../../utils/i18n";
import { toThousands } from '../../../utils/number'
import { Link } from "react-router-dom";
import { loadUsdPrice } from "../../../actions/blockchain";
import { injectIntl, FormattedNumber } from "react-intl";
import { connect } from "react-redux";
@injectIntl
@connect(
  state => ({
    priceUSD: state.blockchain.usdPrice
  }),
  {
    loadUsdPrice
  }
)
class Overview extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:this.props.topData,
    };
  }
  async componentDidMount(){
    let { priceUSD } = this.props;
    !priceUSD && (await this.props.loadUsdPrice());
  }
  render(){
    const { match, topData, topTime, priceUSD } = this.props;
    let data = {};
    console.log('time',topTime)
    console.log('topData',topData)
    switch(topTime){
     case 1:
      data = {
        trx_transfer_amount: topData.last_hour_trx_transfer_amount,
        trx_transaction_number:topData.last_hour_trx_transaction_number,
        whole_freeze:topData.whole_freeze,
        whole_vote:topData.whole_vote,
        token_sum_transaction:topData.last_hour_token_sum_transaction,
        token_sum_transaction_amount:topData.last_hour_token_sum_transaction_amount,
        contract_whole_balance:topData.contract_whole_balance,
        contract_active_address:topData.last_hour_contract_active_address,
        contract_triggers:topData.last_hour_contract_triggers,
        energy_usage:topData.last_hour_energy_usage,
        net_usage:topData.last_hour_net_usage,
        whole_energy_use:topData.last_hour_whole_energy_use,
        whole_energy_burn:topData.last_hour_whole_energy_burn,
        whole_net_use:topData.last_hour_whole_net_use,
        whole_net_burn:topData.last_hour_whole_net_burn,
        token_all:topData.token_all,
        token_record:topData.token_record,
        trc10_all:topData.trc10_all,
        trc20_all:topData.trc20_all,
        trc10_record:topData.trc10_record,
        trc20_record:topData.trc20_record,
      }
      break;
      case 2:
        data = {
          trx_transfer_amount: topData.last_day_trx_transfer_amount,
          trx_transaction_number:topData.last_day_trx_transaction_number,
          whole_freeze:topData.whole_freeze,
          whole_vote:topData.whole_vote,
          token_sum_transaction:topData.last_day_token_sum_transaction,
          token_sum_transaction_amount:topData.last_day_token_sum_transaction_amount,
          contract_whole_balance:topData.contract_whole_balance,
          contract_active_address:topData.last_day_contract_active_address,
          contract_triggers:topData.last_day_contract_triggers,
          energy_usage:topData.last_day_energy_usage,
          net_usage:topData.last_day_net_usage,
          whole_energy_use:topData.last_day_whole_energy_use,
          whole_energy_burn:topData.last_day_whole_energy_burn,
          whole_net_use:topData.last_day_whole_net_use,
          whole_net_burn:topData.last_day_whole_net_burn,
          token_all:topData.token_all,
          token_record:topData.token_record,
          trc10_all:topData.trc10_all,
          trc20_all:topData.trc20_all,
          trc10_record:topData.trc10_record,
          trc20_record:topData.trc20_record,
        }
        break;
        case 3:
        data = {
          trx_transfer_amount: topData.last_week_trx_transfer_amount,
          trx_transaction_number:topData.last_week_trx_transaction_number,
          whole_freeze:topData.whole_freeze,
          whole_vote:topData.whole_vote,
          token_sum_transaction:topData.last_week_token_sum_transaction,
          token_sum_transaction_amount:topData.last_week_token_sum_transaction_amount,
          contract_whole_balance:topData.contract_whole_balance,
          contract_active_address:topData.last_week_contract_active_address,
          contract_triggers:topData.last_week_contract_triggers,
          energy_usage:topData.last_week_energy_usage,
          net_usage:topData.last_week_net_usage,
          whole_energy_use:topData.last_week_whole_energy_use,
          whole_energy_burn:topData.last_week_whole_energy_burn,
          whole_net_use:topData.last_week_whole_net_use,
          whole_net_burn:topData.last_week_whole_net_burn,
          token_all:topData.token_all,
          token_record:topData.token_record,
          trc10_all:topData.trc10_all,
          trc20_all:topData.trc20_all,
          trc10_record:topData.trc10_record,
          trc20_record:topData.trc20_record,
        }
        break;
    }
    return(
      <Fragment>
        <div className="data-overview-list">
          <div className="data-overview-row justify-content-between mt-0">
            <div className="item">
              <div className="title px-3 d-flex justify-content-between">
                <div>{t('data_account')}</div>
                <div>
                  <Link to="/blockchain/data/account">{t('data_check')}</Link>
                </div>
              </div>
              <div className="content">
                <div className="content-item-USD px-3 d-flex justify-content-between border-bottom">
                  <div className="content-item-USD-left">{tu('data_TRX_transfer_total')}</div>
                  <div className="content-item-USD-right num-font-bold">
                    <span className="d-block">
                      {toThousands(data.trx_transfer_amount)}{" "}TRX
                    </span>
                    <span className="d-block usd-amount float-right">
                    ≈
                    <FormattedNumber
                      value={data.trx_transfer_amount * priceUSD || 0}
                    ></FormattedNumber>{" "}USD
                   </span>
                  </div>
                  
                </div>
                <div className="content-item px-3 d-flex justify-content-between border-bottom">
                  <div>{tu('data_TRX_transfer_count')}</div>
                  <div>{toThousands(data.trx_transaction_number)}{" "}Txns</div>
                </div>
                <div className="content-item px-3 d-flex justify-content-between border-bottom">
                  <div>{tu('data_TRX_frozen_total')}</div>
                  <div> {toThousands(data.whole_freeze)}{" "}TRX</div>
                </div>
                <div className="content-item px-3 d-flex justify-content-between">
                  <div>{tu('data_votes_total')}</div>
                  <div> {toThousands(data.whole_vote)}{" "}TP</div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="title px-3 d-flex justify-content-between">
                <div>{t('data_token')}</div>
                <div>
                  <Link to="/blockchain/data/token">{t('data_check')}</Link>
                </div>
              </div>
              <div className="content">
                <div className="content-detail px-3 border-bottom">
                  <div className="detail-item d-flex justify-content-between">
                    <div>{tu('data_TRON_tokens_total')}</div>
                    <div className="font14"> {toThousands(data.token_all)}</div>
                  </div>
                  <div className="detail-item d-flex justify-content-between">
                    <div>{tu('data_TRC10_tokens_total')}</div>
                    <div> {toThousands(data.trc10_all)}</div>
                  </div>
                  <div className="detail-item d-flex justify-content-between">
                    <div>{tu('data_TRC20_tokens_total')}</div>
                    <div> {toThousands(data.trc20_all)}</div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="content-detail px-3">
                  <div className="detail-item d-flex justify-content-between">
                    <div>{tu('data_TRONSCAN_tokens_entered')}</div>
                    <div className="font14"> {toThousands(data.token_record)}</div>
                  </div>
                  <div className="detail-item d-flex justify-content-between">
                    <div>{tu('data_TRONSCAN_TRC10_entries')}</div>
                    <div> {toThousands(data.trc10_record)}</div>
                  </div>
                  <div className="detail-item d-flex justify-content-between">
                    <div>{tu('data_TRONSCAN_TRC20_entries')}</div>
                    <div> {toThousands(data.trc20_record)}</div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
          <div className="data-overview-row justify-content-between">
            <div className="item">
              <div className="title px-3 d-flex justify-content-between">
                <div>{t('data_contract')}</div>
                <div>
                  <Link to="/blockchain/data/contract">{t('data_check')}</Link>
                </div>
              </div>
              <div className="content">
                <div className="content-item-USD px-3 d-flex justify-content-between border-bottom">
                  <div className="content-item-USD-left">{tu('data_TRX_balance')}</div>
                  <div className="content-item-USD-right num-font-bold">
                    <span className="d-block">
                      {toThousands(data.contract_whole_balance)}{" "}TRX
                    </span>
                    <span className="d-block usd-amount float-right">
                    ≈
                    <FormattedNumber
                      value={data.contract_whole_balance * priceUSD || 0}
                    ></FormattedNumber>{" "}USD
                   </span>
                  </div>
                  
                </div>
                <div className="content-item px-3 d-flex justify-content-between border-bottom">
                  <div>{tu('data_calling_accounts')}</div>
                  <div>{toThousands(data.contract_active_address)}</div>
                </div>
                <div className="content-item px-3 d-flex justify-content-between border-bottom">
                  <div>{tu('data_calling_number')}</div>
                  <div>{toThousands(data.contract_triggers)}</div>
                </div>
                {/* <div className="content-item px-3 d-flex justify-content-between">
                  <div>投票总数</div>
                  <div> {toThousands(data.whole_vote)}{" "}TP</div>
                </div> */}
              </div>
            </div>
            <div className="item">
              <div className="title px-3 d-flex justify-content-between">
                <div>{t("data_recourse")}</div>
                <div>
                  <Link to="/blockchain/data/resource">{t('data_check')}</Link>
                </div>
              </div>
              <div className="content">
                <div className="content-detail px-3 border-bottom">
                  <div className="detail-item d-flex justify-content-between">
                    <div>{tu('data_energy_consumed_total')}</div>
                    <div className="font14 item-white-space"> {toThousands(data.energy_usage)}{" "}ENERGY</div>
                  </div>
                  <div className="detail-item d-flex justify-content-between">
                    <div>{tu('data_energy_freezed')}</div>
                    <div className="item-white-space">{toThousands(data.whole_energy_use)}{" "}ENERGY</div>
                  </div>
                  <div className="detail-item d-flex justify-content-between">
                    <div>{tu('data_energy_burned')}</div>
                    <div className="item-white-space">{toThousands(data.whole_energy_burn)}{" "}ENERGY</div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="content-detail px-3">
                  <div className="detail-item d-flex justify-content-between">
                    <div>{tu('data_bandwidth_consumed_total')}</div>
                    <div className="font14 item-white-space"> {toThousands(data.net_usage)}{" "}BANDWIDTH</div>
                  </div>
                  <div className="detail-item d-flex justify-content-between">
                    <div>{tu('data_bandwidth_freezed')}</div>
                    <div className="item-white-space"> {toThousands(data.whole_net_use)}{" "}BANDWIDTH</div>
                  </div>
                  <div className="detail-item d-flex justify-content-between">
                    <div>{tu('data_bandwidth_burned')}</div>
                    <div className="item-white-space">{toThousands(data.whole_net_burn)}{" "}BANDWIDTH</div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        
        </div>
      </Fragment>
    )
  }
}

export default Overview