import React, { Component } from "react";
import "./OrderListMain.scss";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import SingleDay from "./SingleDay/SingleDay";
import SendOrderForm from "../SendOrderForm/SendOrderForm";
import Help from "./Help/Help";
import CloseDayTooltip from "./CloseDayTolltip";
import CloseDayOneInfoModal from "./CloseDayOneInfoModal/CloseDayOneInfoModal";
import CloseDayInfoModal from "./CloseDayInfoModal/CloseDayInfoModal";

class OrderListMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCloseDayOneInfo: false,
      showCloseDayInfo: false
    };
    this.isDayOneClosed = this.isDayTwoClosed = this.isDayThreeClosed = this.isDayFourClosed = this.isDayFiveClosed = this.isDaySixClosed = this.isDaySevenClosed = this.isDayEightClosed = this.isDayNineClosed = this.isDayTenClosed = false;
    this.dayOneDuration = this.dayTwoDuration = this.dayThreeDuration = this.dayFourDuration = this.dayFiveDuration = this.daySixDuration = this.daySevenDuration = this.dayEightDuration = this.dayNineDuration = this.dayTenDuration = 0;
    this.setedDayOneDuration = this.setedDayTwoDuration = this.setedDayThreeDuration = this.setedDayFourDuration = this.setedDayFiveDuration = this.setedDaySixDuration = this.setedDaySevenDuration = this.setedDayEightDuration = this.setedDayNineDuration = this.setedDayTenDuration = 4;
    this.handleShowCloseDayOneInfo = this.handleShowCloseDayOneInfo.bind(this);
    this.handleCloseCloseDayOneInfo = this.handleCloseCloseDayOneInfo.bind(
      this
    );
    this.handleShowCloseDayInfo = this.handleShowCloseDayInfo.bind(this);
  }
  handleCloseCloseDayOneInfo() {
    this.setState({ showCloseDayOneInfo: false });
  }
  handleShowCloseDayOneInfo() {
    this.setState({ showCloseDayOneInfo: true });
  }
  handleShowCloseDayInfo() {
    this.setState({ showCloseDayInfo: true });
    //**** Set info modal duration ****\\
    setTimeout(() => this.setState({ showCloseDayInfo: false }), 2000);
  }

  render() {
    let numberOfAddedModules = this.props.chosenModulesNames.length;
    /*-----------------------------------------------------------------*\
      buttons handlers
    \*-----------------------------------------------------------------*/
    this.handleCloseDayOne = () => {
      this.isDayOneClosed = true;
      this.setedDayOneDuration = numberOfAddedModules;
      this.closedDayOne = true;
      this.handleShowCloseDayOneInfo();
    };
    this.handleCloseDayTwo = () => {
      this.isDayTwoClosed = true;
      this.setedDayTwoDuration =
        numberOfAddedModules - this.setedDayOneDuration;
      this.handleShowCloseDayInfo();
    };
    this.handleCloseDayThree = () => {
      this.isDayThreeClosed = true;
      this.setedDayThreeDuration =
        numberOfAddedModules -
        (this.setedDayOneDuration + this.setedDayTwoDuration);
      this.handleShowCloseDayInfo();
    };
    this.handleCloseDayFour = () => {
      this.isDayFourClosed = true;
      this.setedDayFourDuration =
        numberOfAddedModules -
        (this.setedDayOneDuration +
          this.setedDayTwoDuration +
          this.setedDayThreeDuration);
      this.handleShowCloseDayInfo();
    };
    this.handleCloseDayFive = () => {
      this.isDayFiveClosed = true;
      this.setedDayFiveDuration =
        numberOfAddedModules -
        (this.setedDayOneDuration +
          this.setedDayTwoDuration +
          this.setedDayThreeDuration +
          this.setedDayFourDuration);
      this.handleShowCloseDayInfo();
    };
    this.handleCloseDaySix = () => {
      this.isDaySixClosed = true;
      this.setedDaySixDuration =
        numberOfAddedModules -
        (this.setedDayOneDuration +
          this.setedDayTwoDuration +
          this.setedDayThreeDuration +
          this.setedDayFourDuration +
          this.setedDayFiveDuration);
      this.handleShowCloseDayInfo();
    };
    this.handleCloseDaySeven = () => {
      this.isDaySevenClosed = true;
      this.setedDaySevenDuration =
        numberOfAddedModules -
        (this.setedDayOneDuration +
          this.setedDayTwoDuration +
          this.setedDayThreeDuration +
          this.setedDayFourDuration +
          this.setedDayFiveDuration +
          this.setedDaySixDuration);
      this.handleShowCloseDayInfo();
    };
    this.handleCloseDayEight = () => {
      this.isDayEightClosed = true;
      this.setedDayEightDuration =
        numberOfAddedModules -
        (this.setedDayOneDuration +
          this.setedDayTwoDuration +
          this.setedDayThreeDuration +
          this.setedDayFourDuration +
          this.setedDayFiveDuration +
          this.setedDaySixDuration +
          this.setedDaySevenDuration);
      this.handleShowCloseDayInfo();
    };
    this.handleCloseDayNine = () => {
      this.isDayNineClosed = true;
      this.setedDayNineDuration =
        numberOfAddedModules -
        (this.setedDayOneDuration +
          this.setedDayTwoDuration +
          this.setedDayThreeDuration +
          this.setedDayFourDuration +
          this.setedDayFiveDuration +
          this.setedDaySixDuration +
          this.setedDaySevenDuration +
          this.setedDayEightDuration);
      this.handleShowCloseDayInfo();
    };
    this.handleCloseDayTen = () => {
      this.isDayTenClosed = true;
      this.setedDayTenDuration =
        numberOfAddedModules -
        (this.setedDayOneDuration +
          this.setedDayTwoDuration +
          this.setedDayThreeDuration +
          this.setedDayFourDuration +
          this.setedDayFiveDuration +
          this.setedDaySixDuration +
          this.setedDaySevenDuration +
          this.setedDayEightDuration +
          this.setedDayNineDuration);
      this.handleShowCloseDayInfo();
    };
    /*----------------------------------------------------------------------------------------------------------------------*\
      logic of counting dayDuration and when isDayClosed is true/false by achiving maximum day capability (set to 4 modules)
    \*----------------------------------------------------------------------------------------------------------------------*/
    //Day One
    // eslint-disable-next-line
    numberOfAddedModules < 4 && this.isDayOneClosed === false
      ? (this.dayOneDuration = numberOfAddedModules)
      : ((this.isDayOneClosed = true),
        (this.dayOneDuration = this.setedDayOneDuration));
    //Day Two
    // eslint-disable-next-line
    numberOfAddedModules < this.dayOneDuration + this.setedDayTwoDuration
      ? (this.isDayTwoClosed === false,
        (this.dayTwoDuration = numberOfAddedModules - this.dayOneDuration))
      : (this.isDayTwoClosed === true,
        (this.dayTwoDuration = this.setedDayTwoDuration));
    //Day Three
    // eslint-disable-next-line
    numberOfAddedModules <
    this.dayOneDuration + this.dayTwoDuration + this.setedDayThreeDuration
      ? (this.isDayThreeClosed === false,
        (this.dayThreeDuration =
          numberOfAddedModules - (this.dayOneDuration + this.dayTwoDuration)))
      : (this.isDayThreeClosed === true,
        (this.dayThreeDuration = this.setedDayThreeDuration));
    //Day Four
    // eslint-disable-next-line
    numberOfAddedModules <
    this.dayOneDuration +
      this.dayTwoDuration +
      this.dayThreeDuration +
      this.setedDayFourDuration
      ? (this.isDayFourClosed === false,
        (this.dayFourDuration =
          numberOfAddedModules -
          (this.dayOneDuration + this.dayTwoDuration + this.dayThreeDuration)))
      : (this.isDayFourClosed === true,
        (this.dayFourDuration = this.setedDayFourDuration));
    //Day Five
    // eslint-disable-next-line
    numberOfAddedModules <
    this.dayOneDuration +
      this.dayTwoDuration +
      this.dayThreeDuration +
      this.dayFourDuration +
      this.setedDayFiveDuration
      ? (this.isDayFiveClosed === false,
        (this.dayFiveDuration =
          numberOfAddedModules -
          (this.dayOneDuration +
            this.dayTwoDuration +
            this.dayThreeDuration +
            this.dayFourDuration)))
      : (this.isDayFiveClosed === true,
        (this.dayFiveDuration = this.setedDayFiveDuration));
    //Day Six
    // eslint-disable-next-line
    numberOfAddedModules <
    this.dayOneDuration +
      this.dayTwoDuration +
      this.dayThreeDuration +
      this.dayFourDuration +
      this.dayFiveDuration +
      this.setedDaySixDuration
      ? (this.isDaySixClosed === false,
        (this.daySixDuration =
          numberOfAddedModules -
          (this.dayOneDuration +
            this.dayTwoDuration +
            this.dayThreeDuration +
            this.dayFourDuration +
            this.dayFiveDuration)))
      : (this.isDaySixClosed === true,
        (this.daySixDuration = this.setedDaySixDuration));
    //Day Seven
    // eslint-disable-next-line
    numberOfAddedModules <
    this.dayOneDuration +
      this.dayTwoDuration +
      this.dayThreeDuration +
      this.dayFourDuration +
      this.dayFiveDuration +
      this.daySixDuration +
      this.setedDaySevenDuration
      ? (this.isDaySevenClosed === false,
        (this.daySevenDuration =
          numberOfAddedModules -
          (this.dayOneDuration +
            this.dayTwoDuration +
            this.dayThreeDuration +
            this.dayFourDuration +
            this.dayFiveDuration +
            this.daySixDuration)))
      : (this.isDaySevenClosed === true,
        (this.daySevenDuration = this.setedDaySevenDuration));
    //Day Eight
    // eslint-disable-next-line
    numberOfAddedModules <
    this.dayOneDuration +
      this.dayTwoDuration +
      this.dayThreeDuration +
      this.dayFourDuration +
      this.dayFiveDuration +
      this.daySixDuration +
      this.daySevenDuration +
      this.setedDayEightDuration
      ? (this.isDayEightClosed === false,
        (this.dayEightDuration =
          numberOfAddedModules -
          (this.dayOneDuration +
            this.dayTwoDuration +
            this.dayThreeDuration +
            this.dayFourDuration +
            this.dayFiveDuration +
            this.daySixDuration +
            this.daySevenDuration)))
      : (this.isDayEightClosed === true,
        (this.dayEightDuration = this.setedDayEightDuration));
    //Day Nine
    // eslint-disable-next-line
    numberOfAddedModules <
    this.dayOneDuration +
      this.dayTwoDuration +
      this.dayThreeDuration +
      this.dayFourDuration +
      this.dayFiveDuration +
      this.daySixDuration +
      this.daySevenDuration +
      this.dayEightDuration +
      this.setedDayNineDuration
      ? (this.isDayNineClosed === false,
        (this.dayNineDuration =
          numberOfAddedModules -
          (this.dayOneDuration +
            this.dayTwoDuration +
            this.dayThreeDuration +
            this.dayFourDuration +
            this.dayFiveDuration +
            this.daySixDuration +
            this.daySevenDuration +
            this.dayEightDuration)))
      : (this.isDayNineClosed === true,
        (this.dayNineDuration = this.setedDayNineDuration));
    //Day Ten
    // eslint-disable-next-line
    numberOfAddedModules <
    this.dayOneDuration +
      this.dayTwoDuration +
      this.dayThreeDuration +
      this.dayFourDuration +
      this.dayFiveDuration +
      this.daySixDuration +
      this.daySevenDuration +
      this.dayEightDuration +
      this.dayNineDuration +
      this.setedDayTenDuration
      ? (this.isDayTenClosed === false,
        (this.dayTenDuration =
          numberOfAddedModules -
          (this.dayOneDuration +
            this.dayTwoDuration +
            this.dayThreeDuration +
            this.dayFourDuration +
            this.dayFiveDuration +
            this.daySixDuration +
            this.daySevenDuration +
            this.dayEightDuration +
            this.dayNineDuration)))
      : (this.isDayTenClosed === true,
        // eslint-disable-next-line
        (this.dayTenDuration = this.setedDayTenDuration));
    /*---------------------------------------------------------*\
      turning isDayClosed to 'false' when removing modules
    \*---------------------------------------------------------*/
    //Day One
    // eslint-disable-next-line
    this.dayOneDuration > numberOfAddedModules
      ? ((this.isDayOneClosed = false),
        (this.dayOneDuration = numberOfAddedModules),
        (this.setedDayOneDuration = 4))
      : numberOfAddedModules < 4 && this.isDayOneClosed !== true
      ? (this.dayOneDuration = numberOfAddedModules)
      : ((this.isDayOneClosed = true),
        (this.dayOneDuration = this.setedDayOneDuration));
    //Day Two
    // eslint-disable-next-line
    this.dayTwoDuration < this.setedDayTwoDuration
      ? ((this.isDayTwoClosed = false), (this.setedDayTwoDuration = 4))
      : ((this.isDayTwoClosed = true),
        (this.dayTwoDuration = this.setedDayTwoDuration));
    //Day Three
    // eslint-disable-next-line
    this.dayThreeDuration < this.setedDayThreeDuration
      ? ((this.isDayThreeClosed = false), (this.setedDayThreeDuration = 4))
      : ((this.isDayThreeClosed = true),
        (this.dayThreeDuration = this.setedDayThreeDuration));
    //Day Four
    // eslint-disable-next-line
    this.dayFourDuration < this.setedDayFourDuration
      ? ((this.isDayFourClosed = false), (this.setedDayFourDuration = 4))
      : ((this.isDayFourClosed = true),
        (this.dayFourDuration = this.setedDayFourDuration));
    //Day Five
    // eslint-disable-next-line
    this.dayFiveDuration < this.setedDayFiveDuration
      ? ((this.isDayFiveClosed = false), (this.setedDayFiveDuration = 4))
      : ((this.isDayFiveClosed = true),
        (this.dayFiveDuration = this.setedDayFiveDuration));
    //Day Six
    // eslint-disable-next-line
    this.daySixDuration < this.setedDaySixDuration
      ? ((this.isDaySixClosed = false), (this.setedDaySixDuration = 4))
      : ((this.isDaySixClosed = true),
        (this.daySixDuration = this.setedDaySixDuration));
    //Day Seven
    // eslint-disable-next-line
    this.daySevenDuration < this.setedDaySevenDuration
      ? ((this.isDaySevenClosed = false), (this.setedDaySevenDuration = 4))
      : ((this.isDaySevenClosed = true),
        (this.daySevenDuration = this.setedDaySevenDuration));
    //Day Eight
    // eslint-disable-next-line
    this.dayEightDuration < this.setedDayEightDuration
      ? ((this.isDayEightClosed = false), (this.setedDayEightDuration = 4))
      : ((this.isDayEightClosed = true),
        (this.dayEightDuration = this.setedDayEightDuration));
    //Day Nine
    // eslint-disable-next-line
    this.dayNineDuration < this.setedDayNineDuration
      ? ((this.isDayNineClosed = false), (this.setedDayNineDuration = 4))
      : ((this.isDayNineClosed = true),
        (this.dayNineDuration = this.setedDayNineDuration));
    //Day Ten
    // eslint-disable-next-line
    this.dayTenDuration < this.setedDayTenDuration
      ? ((this.isDayTenClosed = false), (this.setedDayTenDuration = 4))
      : ((this.isDayTenClosed = true),
        (this.dayTenDuration = this.setedDayTenDuration));
    /*---------------------------------------------------------------------*\
      preventing dayDuration be less then 0 and more then setedDayDuration
    \*----------------------------------------------------------------------*/
    //Day One
    this.dayTwoDuration < 0
      ? (this.dayTwoDuration = 0)
      : (this.dayTwoDuration = numberOfAddedModules - this.dayOneDuration);
    //Day Two
    this.dayTwoDuration >= this.setedDayTwoDuration
      ? (this.dayTwoDuration = this.setedDayTwoDuration)
      : this.dayTwoDuration < 0
      ? (this.dayTwoDuration = 0)
      : (this.dayTwoDuration = numberOfAddedModules - this.dayOneDuration);
    //Day Three
    this.dayThreeDuration >= this.setedDayThreeDuration
      ? (this.dayThreeDuration = this.setedDayThreeDuration)
      : this.dayThreeDuration < 0
      ? (this.dayThreeDuration = 0)
      : (this.dayThreeDuration =
          numberOfAddedModules - (this.dayOneDuration + this.dayTwoDuration));
    //Day Four
    this.dayFourDuration >= this.setedDayFourDuration
      ? (this.dayFourDuration = this.setedDayFourDuration)
      : this.dayFourDuration < 0
      ? (this.dayFourDuration = 0)
      : (this.dayFourDuration =
          numberOfAddedModules -
          (this.dayOneDuration + this.dayTwoDuration + this.dayThreeDuration));
    //Day Five
    this.dayFiveDuration >= this.setedDayFiveDuration
      ? (this.dayFiveDuration = this.setedDayFiveDuration)
      : this.dayFiveDuration < 0
      ? (this.dayFiveDuration = 0)
      : (this.dayFiveDuration =
          numberOfAddedModules -
          (this.dayOneDuration +
            this.dayTwoDuration +
            this.dayThreeDuration +
            this.dayFourDuration));
    //Day Six
    this.daySixDuration >= this.setedDaySixDuration
      ? (this.daySixDuration = this.setedDaySixDuration)
      : this.daySixDuration < 0
      ? (this.daySixDuration = 0)
      : (this.daySixDuration =
          numberOfAddedModules -
          (this.dayOneDuration +
            this.dayTwoDuration +
            this.dayThreeDuration +
            this.dayFourDuration +
            this.dayFiveDuration));
    //Day Seven
    this.daySevenDuration >= this.setedDaySevenDuration
      ? (this.daySevenDuration = this.setedDaySevenDuration)
      : this.daySevenDuration < 0
      ? (this.daySevenDuration = 0)
      : (this.daySevenDuration =
          numberOfAddedModules -
          (this.dayOneDuration +
            this.dayTwoDuration +
            this.dayThreeDuration +
            this.dayFourDuration +
            this.dayFiveDuration +
            this.daySixDuration));
    //Day Eight
    this.dayEightDuration >= this.setedDayEightDuration
      ? (this.dayEightDuration = this.setedDayEightDuration)
      : this.dayEightDuration < 0
      ? (this.dayEightDuration = 0)
      : (this.dayEightDuration =
          numberOfAddedModules -
          (this.dayOneDuration +
            this.dayTwoDuration +
            this.dayThreeDuration +
            this.dayFourDuration +
            this.dayFiveDuration +
            this.daySixDuration +
            this.daySevenDuration));
    //Day Nine
    this.dayNineDuration >= this.setedDayNineDuration
      ? (this.dayNineDuration = this.setedDayNineDuration)
      : this.dayNineDuration < 0
      ? (this.dayNineDuration = 0)
      : (this.dayNineDuration =
          numberOfAddedModules -
          (this.dayOneDuration +
            this.dayTwoDuration +
            this.dayThreeDuration +
            this.dayFourDuration +
            this.dayFiveDuration +
            this.daySixDuration +
            this.daySevenDuration +
            this.dayEightDuration));
    //Day Ten
    this.dayTenDuration >= this.setedDayTenDuration
      ? (this.dayTenDuration = this.setedDayTenDuration)
      : this.dayTenDuration < 0
      ? (this.dayTenDuration = 0)
      : (this.dayTenDuration =
          numberOfAddedModules -
          (this.dayOneDuration +
            this.dayTwoDuration +
            this.dayThreeDuration +
            this.dayFourDuration +
            this.dayFiveDuration +
            this.daySixDuration +
            this.daySevenDuration +
            this.dayEightDuration +
            this.dayNineDuration));
    return (
      <div className="order-list">
        <h2 className="order-list__header">
          Twoje szkolenie:
          <Help
            showHelpModal={this.props.showHelpModal}
            closeHelpModal={this.props.closeHelpModal}
          />
        </h2>
        <ListGroup>
          <CloseDayOneInfoModal
            showCloseDayOneInfo={this.state.showCloseDayOneInfo}
            handleCloseCloseDayOneInfo={this.handleCloseCloseDayOneInfo}
          />
          <CloseDayInfoModal
            showCloseDayInfo={this.state.showCloseDayInfo}
            handleCloseCloseDayInfo={this.handleCloseCloseDayInfo}
          />
          {this.props.chosenModulesNames.toString() === "" ? (
            <ListGroupItem className="order-list__add-first-module-info">
              {" "}
              Dodaj pierwszy moduł z listy po lewej!
            </ListGroupItem>
          ) : //******Day_One************Day_One************Day_One************Day_One************Day_One************Day_One******
          this.isDayOneClosed !== true || this.dayTwoDuration === 0 ? (
            <div>
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Pierwszy dzień: "}
              />{" "}
              <CloseDayTooltip
                tooltip="Aby skomponować następny dzień kliknij przycisk i dodaj kolejny moduł"
                id="tooltip-1"
              >
                <Button
                  className="order-list__single-day-close-day-button"
                  bsStyle="primary"
                  onClick={this.handleCloseDayOne}
                >
                  {" "}
                  Zamknij pierwszy dzień{" "}
                </Button>{" "}
              </CloseDayTooltip>
            </div>
          ) : //******Day Two************Day Two************Day Two************Day Two************Day Two************Day Two************Day Two******
          this.isDayTwoClosed !== true || this.dayThreeDuration === 0 ? (
            <div>
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  0,
                  this.dayOneDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Pierwszy dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration,
                  this.dayOneDuration + this.dayTwoDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Drugi dzień: "}
              />
              <CloseDayTooltip
                tooltip="Aby skomponować następny dzień kliknij przycisk i dodaj kolejny moduł"
                id="tooltip-1"
              >
                <Button
                  className="order-list__single-day-close-day-button"
                  bsStyle="primary"
                  onClick={this.handleCloseDayTwo}
                >
                  {" "}
                  Zamknij drugi dzień{" "}
                </Button>{" "}
              </CloseDayTooltip>
            </div>
          ) : //******Day Three************Day Three************Day Three************Day Three************Day Three************Day Three******
          this.isDayThreeClosed !== true || this.dayFourDuration === 0 ? (
            <div>
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  0,
                  this.dayOneDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Pierwszy dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration,
                  this.dayOneDuration + this.dayTwoDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Drugi dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration + this.dayTwoDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Trzeci dzień: "}
              />
              <CloseDayTooltip
                tooltip="Aby skomponować następny dzień kliknij przycisk i dodaj kolejny moduł"
                id="tooltip-1"
              >
                <Button
                  className="order-list__single-day-close-day-button"
                  bsStyle="primary"
                  onClick={this.handleCloseDayThree}
                >
                  {" "}
                  Zamknij trzeci dzień{" "}
                </Button>{" "}
              </CloseDayTooltip>
            </div>
          ) : //******Day Four************Day Four************Day Four************Day Four************Day Four************Day Four******
          this.isDayFourClosed !== true || this.dayFiveDuration === 0 ? (
            <div>
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  0,
                  this.dayOneDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Pierwszy dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration,
                  this.dayOneDuration + this.dayTwoDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Drugi dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration + this.dayTwoDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Trzeci dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Czwarty dzień: "}
              />
              <CloseDayTooltip
                tooltip="Aby skomponować następny dzień kliknij przycisk i dodaj kolejny moduł"
                id="tooltip-1"
              >
                <Button
                  className="order-list__single-day-close-day-button"
                  bsStyle="primary"
                  onClick={this.handleCloseDayFour}
                >
                  {" "}
                  Zamknij czwarty dzień{" "}
                </Button>{" "}
              </CloseDayTooltip>
            </div>
          ) : //******Day Five****** ******Day Five******Day Five******Day Five******Day Five******Day Five******Day Five******Day Five******
          this.isDayFiveClosed !== true || this.daySixDuration === 0 ? (
            <div>
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  0,
                  this.dayOneDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Pierwszy dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration,
                  this.dayOneDuration + this.dayTwoDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Drugi dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration + this.dayTwoDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Trzeci dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Czwarty dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Piąty dzień: "}
              />
              <CloseDayTooltip
                tooltip="Aby skomponować następny dzień kliknij przycisk i dodaj kolejny moduł"
                id="tooltip-1"
              >
                <Button
                  className="order-list__single-day-close-day-button"
                  bsStyle="primary"
                  onClick={this.handleCloseDayFive}
                >
                  {" "}
                  Zamknij piąty dzień{" "}
                </Button>{" "}
              </CloseDayTooltip>
            </div>
          ) : //******Day Six************Day Six************Day Six************Day Six************Day Six************Day Six******
          this.isDaySixClosed !== true || this.daySevenDuration === 0 ? (
            <div>
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  0,
                  this.dayOneDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Pierwszy dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration,
                  this.dayOneDuration + this.dayTwoDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Drugi dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration + this.dayTwoDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Trzeci dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Czwarty dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Piąty dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Szósty dzień: "}
              />
              <CloseDayTooltip
                tooltip="Aby skomponować następny dzień kliknij przycisk i dodaj kolejny moduł"
                id="tooltip-1"
              >
                <Button
                  className="order-list__single-day-close-day-button"
                  bsStyle="primary"
                  onClick={this.handleCloseDaySix}
                >
                  {" "}
                  Zamknij szósty dzień{" "}
                </Button>{" "}
              </CloseDayTooltip>
            </div>
          ) : //******Day Seven************Day Seven************Day Seven************Day Seven************Day Seven************Day Seven******
          this.isDaySevenClosed !== true || this.dayEightDuration === 0 ? (
            <div>
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  0,
                  this.dayOneDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Pierwszy dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration,
                  this.dayOneDuration + this.dayTwoDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Drugi dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration + this.dayTwoDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Trzeci dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Czwarty dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Piąty dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Szósty dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration +
                    this.daySevenDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Siódmy dzień: "}
              />
              <CloseDayTooltip
                tooltip="Aby skomponować następny dzień kliknij przycisk i dodaj kolejny moduł"
                id="tooltip-1"
              >
                <Button
                  className="order-list__single-day-close-day-button"
                  bsStyle="primary"
                  onClick={this.handleCloseDaySeven}
                >
                  {" "}
                  Zamknij siódmy dzień{" "}
                </Button>{" "}
              </CloseDayTooltip>
            </div>
          ) : //******Day Eight************Day Eight************Day Eight************Day Eight************Day Eight************Day Eight******
          this.isDayEightClosed !== true || this.dayNineDuration === 0 ? (
            <div>
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  0,
                  this.dayOneDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Pierwszy dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration,
                  this.dayOneDuration + this.dayTwoDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Drugi dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration + this.dayTwoDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Trzeci dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Czwarty dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Piąty dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Szósty dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration +
                    this.daySevenDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Siódmy dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration +
                    this.daySevenDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration +
                    this.daySevenDuration +
                    this.dayEightDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Ósmy dzień: "}
              />
              <CloseDayTooltip
                tooltip="Aby skomponować następny dzień kliknij przycisk i dodaj kolejny moduł"
                id="tooltip-1"
              >
                <Button
                  className="order-list__single-day-close-day-button"
                  bsStyle="primary"
                  onClick={this.handleCloseDayEight}
                >
                  {" "}
                  Zamknij ósmy dzień{" "}
                </Button>{" "}
              </CloseDayTooltip>
            </div>
          ) : //******Day Nine************Day Nine************Day Nine************Day Nine************Day Nine************Day Nine******
          this.isDayNineClosed !== true || this.dayTenDuration === 0 ? (
            <div>
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  0,
                  this.dayOneDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Pierwszy dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration,
                  this.dayOneDuration + this.dayTwoDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Drugi dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration + this.dayTwoDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Trzeci dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Czwarty dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Piąty dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Szósty dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration +
                    this.daySevenDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Siódmy dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration +
                    this.daySevenDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration +
                    this.daySevenDuration +
                    this.dayEightDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Ósmy dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration +
                    this.daySevenDuration +
                    this.dayEightDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration +
                    this.daySevenDuration +
                    this.dayEightDuration +
                    this.dayNineDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Dziewiąty dzień: "}
              />
              <CloseDayTooltip
                tooltip="Aby skomponować następny dzień kliknij przycisk i dodaj kolejny moduł"
                id="tooltip-1"
              >
                <Button
                  className="order-list__single-day-close-day-button"
                  bsStyle="primary"
                  onClick={this.handleCloseDayNine}
                >
                  {" "}
                  Zamknij dziewiąty dzień{" "}
                </Button>{" "}
              </CloseDayTooltip>
            </div>
          ) : //******Day Ten************Day Ten************Day Ten************Day Ten************Day Ten************Day Ten******
          this.isDayTenClosed !== true ? (
            <div>
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  0,
                  this.dayOneDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Pierwszy dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration,
                  this.dayOneDuration + this.dayTwoDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Drugi dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration + this.dayTwoDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Trzeci dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Czwarty dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Piąty dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Szósty dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration +
                    this.daySevenDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Siódmy dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration +
                    this.daySevenDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration +
                    this.daySevenDuration +
                    this.dayEightDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Ósmy dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration +
                    this.daySevenDuration +
                    this.dayEightDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration +
                    this.daySevenDuration +
                    this.dayEightDuration +
                    this.dayNineDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Dziewiąty dzień: "}
              />
              <SingleDay
                chosenModulesNames={this.props.chosenModulesNames.slice(
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration +
                    this.daySevenDuration +
                    this.dayEightDuration +
                    this.dayNineDuration,
                  this.dayOneDuration +
                    this.dayTwoDuration +
                    this.dayThreeDuration +
                    this.dayFourDuration +
                    this.dayFiveDuration +
                    this.daySixDuration +
                    this.daySevenDuration +
                    this.dayEightDuration +
                    this.dayNineDuration +
                    this.dayTenDuration
                )}
                removeModuleNameFromOrderList={
                  this.props.removeModuleNameFromOrderList
                }
                day={"Dziesiąty dzień: "}
              />
            </div> // More then Ten
          ) : (
            ~(
              <div>
                <SingleDay
                  chosenModulesNames={this.props.chosenModulesNames.slice(
                    0,
                    this.dayOneDuration
                  )}
                  removeModuleNameFromOrderList={
                    this.props.removeModuleNameFromOrderList
                  }
                  day={"Pierwszy dzień: "}
                />
                <SingleDay
                  chosenModulesNames={this.props.chosenModulesNames.slice(
                    this.dayOneDuration,
                    this.dayOneDuration + this.dayTwoDuration
                  )}
                  removeModuleNameFromOrderList={
                    this.props.removeModuleNameFromOrderList
                  }
                  day={"Drugi dzień: "}
                />
                <SingleDay
                  chosenModulesNames={this.props.chosenModulesNames.slice(
                    this.dayOneDuration + this.dayTwoDuration,
                    this.dayOneDuration +
                      this.dayTwoDuration +
                      this.dayThreeDuration
                  )}
                  removeModuleNameFromOrderList={
                    this.props.removeModuleNameFromOrderList
                  }
                  day={"Trzeci dzień: "}
                />
                <SingleDay
                  chosenModulesNames={this.props.chosenModulesNames.slice(
                    this.dayOneDuration +
                      this.dayTwoDuration +
                      this.dayThreeDuration,
                    this.dayOneDuration +
                      this.dayTwoDuration +
                      this.dayThreeDuration +
                      this.dayFourDuration
                  )}
                  removeModuleNameFromOrderList={
                    this.props.removeModuleNameFromOrderList
                  }
                  day={"Czwarty dzień: "}
                />
                <SingleDay
                  chosenModulesNames={this.props.chosenModulesNames.slice(
                    this.dayOneDuration +
                      this.dayTwoDuration +
                      this.dayThreeDuration +
                      this.dayFourDuration,
                    this.dayOneDuration +
                      this.dayTwoDuration +
                      this.dayThreeDuration +
                      this.dayFourDuration +
                      this.dayFiveDuration
                  )}
                  removeModuleNameFromOrderList={
                    this.props.removeModuleNameFromOrderList
                  }
                  day={"Piąty dzień: "}
                />
                <SingleDay
                  chosenModulesNames={this.props.chosenModulesNames.slice(
                    this.dayOneDuration +
                      this.dayTwoDuration +
                      this.dayThreeDuration +
                      this.dayFourDuration +
                      this.dayFiveDuration,
                    this.dayOneDuration +
                      this.dayTwoDuration +
                      this.dayThreeDuration +
                      this.dayFourDuration +
                      this.dayFiveDuration +
                      this.daySixDuration
                  )}
                  removeModuleNameFromOrderList={
                    this.props.removeModuleNameFromOrderList
                  }
                  day={"Szósty dzień: "}
                />
                <SingleDay
                  chosenModulesNames={this.props.chosenModulesNames.slice(
                    this.dayOneDuration +
                      this.dayTwoDuration +
                      this.dayThreeDuration +
                      this.dayFourDuration +
                      this.dayFiveDuration +
                      this.daySixDuration,
                    this.dayOneDuration +
                      this.dayTwoDuration +
                      this.dayThreeDuration +
                      this.dayFourDuration +
                      this.dayFiveDuration +
                      this.daySixDuration +
                      this.daySevenDuration
                  )}
                  removeModuleNameFromOrderList={
                    this.props.removeModuleNameFromOrderList
                  }
                  day={"Siódmy dzień: "}
                />
                <SingleDay
                  chosenModulesNames={this.props.chosenModulesNames.slice(
                    this.dayOneDuration +
                      this.dayTwoDuration +
                      this.dayThreeDuration +
                      this.dayFourDuration +
                      this.dayFiveDuration +
                      this.daySixDuration +
                      this.daySevenDuration,
                    this.dayOneDuration +
                      this.dayTwoDuration +
                      this.dayThreeDuration +
                      this.dayFourDuration +
                      this.dayFiveDuration +
                      this.daySixDuration +
                      this.daySevenDuration +
                      this.dayEightDuration
                  )}
                  removeModuleNameFromOrderList={
                    this.props.removeModuleNameFromOrderList
                  }
                  day={"Ósmy dzień: "}
                />
                <SingleDay
                  chosenModulesNames={this.props.chosenModulesNames.slice(
                    this.dayOneDuration +
                      this.dayTwoDuration +
                      this.dayThreeDuration +
                      this.dayFourDuration +
                      this.dayFiveDuration +
                      this.daySixDuration +
                      this.daySevenDuration +
                      this.dayEightDuration,
                    this.dayOneDuration +
                      this.dayTwoDuration +
                      this.dayThreeDuration +
                      this.dayFourDuration +
                      this.dayFiveDuration +
                      this.daySixDuration +
                      this.daySevenDuration +
                      this.dayEightDuration +
                      this.dayNineDuration
                  )}
                  removeModuleNameFromOrderList={
                    this.props.removeModuleNameFromOrderList
                  }
                  day={"Dziewiąty dzień: "}
                />
                <SingleDay
                  chosenModulesNames={this.props.chosenModulesNames.slice(
                    this.dayOneDuration +
                      this.dayTwoDuration +
                      this.dayThreeDuration +
                      this.dayFourDuration +
                      this.dayFiveDuration +
                      this.daySixDuration +
                      this.daySevenDuration +
                      this.dayEightDuration +
                      this.dayNineDuration,
                    this.dayOneDuration +
                      this.dayTwoDuration +
                      this.dayThreeDuration +
                      this.dayFourDuration +
                      this.dayFiveDuration +
                      this.daySixDuration +
                      this.daySevenDuration +
                      this.dayEightDuration +
                      this.dayNineDuration +
                      this.dayTenDuration
                  )}
                  removeModuleNameFromOrderList={
                    this.props.removeModuleNameFromOrderList
                  }
                  day={"Dziesiąty dzień: "}
                />
              </div>
            )
          )}
        </ListGroup>
        <SendOrderForm
          chosenModulesNames={this.props.chosenModulesNames}
          dayOneDuration={this.dayOneDuration}
          dayTwoDuration={this.dayTwoDuration}
          dayThreeDuration={this.dayThreeDuration}
          dayFourDuration={this.dayFourDuration}
          dayFiveDuration={this.dayFiveDuration}
          daySixDuration={this.daySixDuration}
          daySevenDuration={this.daySevenDuration}
          dayEightDuration={this.dayEightDuration}
          dayNineDuration={this.dayNineDuration}
          dayTenDuration={this.dayTenDuration}
          isDayOneClosed={this.isDayOneClosed}
          isDayTwoClosed={this.isDayTwoClosed}
          isDayThreeClosed={this.isDayThreeClosed}
          isDayFourClosed={this.isDayFourClosed}
          isDayFiveClosed={this.isDayFiveClosed}
          isDaySixClosed={this.isDaySixClosed}
          isDaySevenClosed={this.isDaySevenClosed}
          isDayEightClosed={this.isDayEightClosed}
          isDayNineClosed={this.isDayNineClosed}
          isDayTenClosed={this.isDayTenClosed}
        />
      </div>
    );
  }
}
export default OrderListMain;
