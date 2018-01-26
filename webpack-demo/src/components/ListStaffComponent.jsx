import React from 'react';
import {connect} from 'react-redux';

class ListStaffComponent extends React.Component {
    render() {
        return (
            <div className="epc-page-container">
                <main role="main" className="main">
                    <div className="epc-page cf">
                        <div className="default-title"><span className="loc-text">Compensation Rules</span></div>
                        <div className="message-contain">
                            <div className="message-img">MM</div>
                            <span className="message-content">This page is only viewable by internal users.</span>
                            <button type="button" className="btn-secondary btn-action createNewClass"><span
                                className="btn-label"><span className="loc-text">Create new rule</span></span>
                            </button>
                        </div>
                        <div className="compensation-list">
                            <div>
                                <div className="compensation-list">
                                    <div className="compensation-list inline theme-inline-pills" id="tabs-container"
                                         data-control="tabs">
                                        <ul className="tabs cf">
                                            <li role="presentation" className="tab">
                                                <button type="button" className="on"><span
                                                    className="tab-label active-fontSize">Active</span></button>
                                            </li>
                                            <li role="presentation" className="tab">
                                                <button type="button" className=""><span
                                                    className="tab-label active-fontSize">Inactive</span></button>
                                            </li>
                                        </ul>
                                        <div className="tabs-container">
                                            <div className="">
                                                <section className="tab-pane" styleA="display: none;">
                                                    <div className="cols-row compensation-rule">
                                                        <div className="col col-9-10">
                                                            <div className="header">
                                                                <div>17d44aa2-b51d-45fe-a580-2e3d0110f458</div>
                                                            </div>
                                                            <div className="body">
                                                                <div>
                                                                    <span>Hotel collect: 25% | Applies to 0  rate plan</span>
                                                                </div>
                                                            </div>
                                                            <div className="footer">
                                                                <div><span><span className="icon icon-time undefined"
                                                                                 aria-hidden="true"></span> This rule has 0 date specific setting</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-1-10">
                              <span>
                                 <div className="active-fontSize">
                                    <div className="menu-bar " id="epc-kg1q3r7">
                                       <ul className="menu-bar-inner">
                                          <li className="">
                                             <button type="button" data-control="menu" data-auto-pos="true"
                                                     className="menu-trigger theme-standard trigger-link pin-left btn-text menu-arrow"
                                                     aria-expanded="false"><span className="btn-label">Actions<span
                                                 className="icon icon-toggle180 "
                                                 aria-hidden="true"></span></span></button>
                                             <div className="menu" aria-hidden="true" tabIndex="0">
                                                <div className="menu-main">
                                                   <div><button type="button" className="btn-primary btn-text"><span
                                                       className="btn-label"><span
                                                       className="loc-text">View Details</span></span></button></div>
                                                   <div>
                                                      <div><button type="button" className="btn-primary btn-text"><span
                                                          className="btn-label"><span
                                                          className="loc-text">Edit</span></span></button></div>
                                                   </div>
                                                </div>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </span>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div className="">
                                                <section className="tab-pane" styleA="display: none;">
                                                    <div className="cols-row compensation-rule">
                                                        <div className="col col-9-10">
                                                            <div className="header">
                                                                <div>25% to 20% Commission Pricing-test2</div>
                                                            </div>
                                                            <div className="body">
                                                                <div>
                                                                    <span>Hotel collect: 20% | Applies to 0  rate plan</span>
                                                                </div>
                                                            </div>
                                                            <div className="footer">
                                                                <div><span><span className="icon icon-time undefined"
                                                                                 aria-hidden="true"></span> This rule has 1 date specific setting</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-1-10">
                              <span>
                                 <div className="active-fontSize">
                                    <div className="menu-bar " id="epc-q7t001e">
                                       <ul className="menu-bar-inner">
                                          <li className="">
                                             <button type="button" data-control="menu" data-auto-pos="true"
                                                     className="menu-trigger theme-standard trigger-link pin-left btn-text menu-arrow"
                                                     aria-expanded="false"><span className="btn-label">Actions<span
                                                 className="icon icon-toggle180 "
                                                 aria-hidden="true"></span></span></button>
                                             <div className="menu" aria-hidden="true" tabIndex="0">
                                                <div className="menu-main">
                                                   <div><button type="button" className="btn-primary btn-text"><span
                                                       className="btn-label"><span
                                                       className="loc-text">View Details</span></span></button></div>
                                                   <div>
                                                      <div><button type="button" className="btn-primary btn-text"><span
                                                          className="btn-label"><span
                                                          className="loc-text">Edit</span></span></button></div>
                                                   </div>
                                                </div>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </span>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div className="">
                                                <section className="tab-pane" styleA="display: none;">
                                                    <div className="cols-row compensation-rule">
                                                        <div className="col col-9-10">
                                                            <div className="header">
                                                                <div>25% to 20% Commission Pricing-test3</div>
                                                            </div>
                                                            <div className="body">
                                                                <div>
                                                                    <span>Hotel collect: 20% | Applies to 0  rate plan</span>
                                                                </div>
                                                            </div>
                                                            <div className="footer">
                                                                <div><span><span className="icon icon-time undefined"
                                                                                 aria-hidden="true"></span> This rule has 1 date specific setting</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-1-10">
                              <span>
                                 <div className="active-fontSize">
                                    <div className="menu-bar " id="epc-1gapke2">
                                       <ul className="menu-bar-inner">
                                          <li className="">
                                             <button type="button" data-control="menu" data-auto-pos="true"
                                                     className="menu-trigger theme-standard trigger-link pin-left btn-text menu-arrow"
                                                     aria-expanded="false"><span className="btn-label">Actions<span
                                                 className="icon icon-toggle180 "
                                                 aria-hidden="true"></span></span></button>
                                             <div className="menu" aria-hidden="true" tabIndex="0">
                                                <div className="menu-main">
                                                   <div><button type="button" className="btn-primary btn-text"><span
                                                       className="btn-label"><span
                                                       className="loc-text">View Details</span></span></button></div>
                                                   <div>
                                                      <div><button type="button" className="btn-primary btn-text"><span
                                                          className="btn-label"><span
                                                          className="loc-text">Edit</span></span></button></div>
                                                   </div>
                                                </div>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </span>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div className="">
                                                <section className="tab-pane" styleA="display: block;">
                                                    <div className="cols-row compensation-rule">
                                                        <div className="col col-9-10">
                                                            <div className="header">
                                                                <div>25% to 20% Margin Pricing &amp; 25% to 20%
                                                                    Commission
                                                                    Pricing
                                                                </div>
                                                            </div>
                                                            <div className="body">
                                                                <div className="combinedBody">
                                                                    <div>Expedia collect: 20% | Hotel collect: 15%</div>
                                                                    <div>Applies to: 7 ETP-EC rate plans, 7 ETP-HC rate
                                                                        plans, 6 EC rate plans, 1 HC rate plan
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="footer">
                                                                <div><span><span className="icon icon-time undefined"
                                                                                 aria-hidden="true"></span> This rule has 1 date specific setting</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-1-10">
                              <span>
                                 <div className="active-fontSize">
                                    <div className="menu-bar " id="epc-58vsqim">
                                       <ul className="menu-bar-inner">
                                          <li className="">
                                             <button type="button" data-control="menu" data-auto-pos="true"
                                                     className="menu-trigger theme-standard trigger-link pin-left btn-text menu-arrow"
                                                     aria-expanded="false"><span className="btn-label">Actions<span
                                                 className="icon icon-toggle180 "
                                                 aria-hidden="true"></span></span></button>
                                             <div className="menu" aria-hidden="true" tabIndex="0">
                                                <div className="menu-main">
                                                   <div><button type="button" className="btn-primary btn-text"><span
                                                       className="btn-label"><span
                                                       className="loc-text">View Details</span></span></button></div>
                                                   <div>
                                                      <div><button type="button" className="btn-primary btn-text"><span
                                                          className="btn-label"><span
                                                          className="loc-text">Edit</span></span></button></div>
                                                   </div>
                                                </div>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </span>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div className="">
                                                <section className="tab-pane" styleA="display: none;">
                                                    <div className="cols-row compensation-rule">
                                                        <div className="col col-9-10">
                                                            <div className="header">
                                                                <div>40de0c6c-dffb-4048-9265-2068dbec3e0a</div>
                                                            </div>
                                                            <div className="body">
                                                                <div>
                                                                    <span>Hotel collect: 26% | Applies to 0  rate plan</span>
                                                                </div>
                                                            </div>
                                                            <div className="footer">
                                                                <div><span><span className="icon icon-time undefined"
                                                                                 aria-hidden="true"></span> This rule has 0 date specific setting</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-1-10">
                              <span>
                                 <div className="active-fontSize">
                                    <div className="menu-bar " id="epc-1ivl839">
                                       <ul className="menu-bar-inner">
                                          <li className="">
                                             <button type="button" data-control="menu" data-auto-pos="true"
                                                     className="menu-trigger theme-standard trigger-link pin-left btn-text menu-arrow"
                                                     aria-expanded="false"><span className="btn-label">Actions<span
                                                 className="icon icon-toggle180 "
                                                 aria-hidden="true"></span></span></button>
                                             <div className="menu" aria-hidden="true" tabIndex="0">
                                                <div className="menu-main">
                                                   <div><button type="button" className="btn-primary btn-text"><span
                                                       className="btn-label"><span
                                                       className="loc-text">View Details</span></span></button></div>
                                                   <div>
                                                      <div><button type="button" className="btn-primary btn-text"><span
                                                          className="btn-label"><span
                                                          className="loc-text">Edit</span></span></button></div>
                                                   </div>
                                                </div>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </span>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div className="">
                                                <section className="tab-pane" styleA="display: block;">
                                                    <div className="cols-row compensation-rule">
                                                        <div className="col col-9-10">
                                                            <div className="header">
                                                                <div>Corporate Margin Pricing</div>
                                                            </div>
                                                            <div className="body">
                                                                <div>
                                                                    <span>Expedia collect: 26% | Applies to 1  rate plan</span>
                                                                </div>
                                                            </div>
                                                            <div className="footer">
                                                                <div><span><span className="icon icon-time undefined"
                                                                                 aria-hidden="true"></span> This rule has 1 date specific setting</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-1-10">
                              <span>
                                 <div className="active-fontSize">
                                    <div className="menu-bar " id="epc-4ob7gem">
                                       <ul className="menu-bar-inner">
                                          <li className="">
                                             <button type="button" data-control="menu" data-auto-pos="true"
                                                     className="menu-trigger theme-standard trigger-link pin-left btn-text menu-arrow"
                                                     aria-expanded="false"><span className="btn-label">Actions<span
                                                 className="icon icon-toggle180 "
                                                 aria-hidden="true"></span></span></button>
                                             <div className="menu" aria-hidden="true" tabIndex="0">
                                                <div className="menu-main">
                                                   <div><button type="button" className="btn-primary btn-text"><span
                                                       className="btn-label"><span
                                                       className="loc-text">View Details</span></span></button></div>
                                                   <div>
                                                      <div><button type="button" className="btn-primary btn-text"><span
                                                          className="btn-label"><span
                                                          className="loc-text">Edit</span></span></button></div>
                                                   </div>
                                                </div>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </span>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div className="">
                                                <section className="tab-pane" styleA="display: none;">
                                                    <div className="cols-row compensation-rule">
                                                        <div className="col col-9-10">
                                                            <div className="header">
                                                                <div>f2511d64-1530-4ebb-9d9e-636a52466dda</div>
                                                            </div>
                                                            <div className="body">
                                                                <div>
                                                                    <span>Hotel collect: 26% | Applies to 0  rate plan</span>
                                                                </div>
                                                            </div>
                                                            <div className="footer">
                                                                <div><span><span className="icon icon-time undefined"
                                                                                 aria-hidden="true"></span> This rule has 0 date specific setting</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-1-10">
                              <span>
                                 <div className="active-fontSize">
                                    <div className="menu-bar " id="epc-ime9g6a">
                                       <ul className="menu-bar-inner">
                                          <li className="">
                                             <button type="button" data-control="menu" data-auto-pos="true"
                                                     className="menu-trigger theme-standard trigger-link pin-left btn-text menu-arrow"
                                                     aria-expanded="false"><span className="btn-label">Actions<span
                                                 className="icon icon-toggle180 "
                                                 aria-hidden="true"></span></span></button>
                                             <div className="menu" aria-hidden="true" tabIndex="0">
                                                <div className="menu-main">
                                                   <div><button type="button" className="btn-primary btn-text"><span
                                                       className="btn-label"><span
                                                       className="loc-text">View Details</span></span></button></div>
                                                   <div>
                                                      <div><button type="button" className="btn-primary btn-text"><span
                                                          className="btn-label"><span
                                                          className="loc-text">Edit</span></span></button></div>
                                                   </div>
                                                </div>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </span>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div className="">
                                                <section className="tab-pane" styleA="display: block;">
                                                    <div className="cols-row compensation-rule">
                                                        <div className="col col-9-10">
                                                            <div className="header">
                                                                <div>onlyfortest</div>
                                                            </div>
                                                            <div className="body">
                                                                <div>
                                                                    <span>Hotel collect: 20% | Applies to 2  rate plans</span>
                                                                </div>
                                                            </div>
                                                            <div className="footer">
                                                                <div><span><span className="icon icon-time undefined"
                                                                                 aria-hidden="true"></span> This rule has 1 date specific setting</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-1-10">
                              <span>
                                 <div className="active-fontSize">
                                    <div className="menu-bar " id="epc-qanjolv">
                                       <ul className="menu-bar-inner">
                                          <li className="">
                                             <button type="button" data-control="menu" data-auto-pos="true"
                                                     className="menu-trigger theme-standard trigger-link pin-left btn-text menu-arrow"
                                                     aria-expanded="false"><span className="btn-label">Actions<span
                                                 className="icon icon-toggle180 "
                                                 aria-hidden="true"></span></span></button>
                                             <div className="menu" aria-hidden="true" tabIndex="0">
                                                <div className="menu-main">
                                                   <div><button type="button" className="btn-primary btn-text"><span
                                                       className="btn-label"><span
                                                       className="loc-text">View Details</span></span></button></div>
                                                   <div>
                                                      <div><button type="button" className="btn-primary btn-text"><span
                                                          className="btn-label"><span
                                                          className="loc-text">Edit</span></span></button></div>
                                                   </div>
                                                </div>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </span>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div className="">
                                                <section className="tab-pane" styleA="display: none;">
                                                    <div className="cols-row compensation-rule">
                                                        <div className="col col-9-10">
                                                            <div className="header">
                                                                <div>onlyfortest2</div>
                                                            </div>
                                                            <div className="body">
                                                                <div>
                                                                    <span>Hotel collect: 20% | Applies to 0  rate plan</span>
                                                                </div>
                                                            </div>
                                                            <div className="footer">
                                                                <div><span><span className="icon icon-time undefined"
                                                                                 aria-hidden="true"></span> This rule has 1 date specific setting</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-1-10">
                              <span>
                                 <div className="active-fontSize">
                                    <div className="menu-bar " id="epc-6yyjk3d">
                                       <ul className="menu-bar-inner">
                                          <li className="">
                                             <button type="button" data-control="menu" data-auto-pos="true"
                                                     className="menu-trigger theme-standard trigger-link pin-left btn-text menu-arrow"
                                                     aria-expanded="false"><span className="btn-label">Actions<span
                                                 className="icon icon-toggle180 "
                                                 aria-hidden="true"></span></span></button>
                                             <div className="menu" aria-hidden="true" tabIndex="0">
                                                <div className="menu-main">
                                                   <div><button type="button" className="btn-primary btn-text"><span
                                                       className="btn-label"><span
                                                       className="loc-text">View Details</span></span></button></div>
                                                   <div>
                                                      <div><button type="button" className="btn-primary btn-text"><span
                                                          className="btn-label"><span
                                                          className="loc-text">Edit</span></span></button></div>
                                                   </div>
                                                </div>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </span>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div className="">
                                                <section className="tab-pane" styleA="display: none;">
                                                    <div className="cols-row compensation-rule">
                                                        <div className="col col-9-10">
                                                            <div className="header">
                                                                <div>onlyfortest3</div>
                                                            </div>
                                                            <div className="body">
                                                                <div>
                                                                    <span>Hotel collect: 15% | Applies to 0  rate plan</span>
                                                                </div>
                                                            </div>
                                                            <div className="footer">
                                                                <div><span><span className="icon icon-time undefined"
                                                                                 aria-hidden="true"></span> This rule has 1 date specific setting</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-1-10">
                              <span>
                                 <div className="active-fontSize">
                                    <div className="menu-bar " id="epc-z7zaqy3">
                                       <ul className="menu-bar-inner">
                                          <li className="">
                                             <button type="button" data-control="menu" data-auto-pos="true"
                                                     className="menu-trigger theme-standard trigger-link pin-left btn-text menu-arrow"
                                                     aria-expanded="false"><span className="btn-label">Actions<span
                                                 className="icon icon-toggle180 "
                                                 aria-hidden="true"></span></span></button>
                                             <div className="menu" aria-hidden="true" tabIndex="0">
                                                <div className="menu-main">
                                                   <div><button type="button" className="btn-primary btn-text"><span
                                                       className="btn-label"><span
                                                       className="loc-text">View Details</span></span></button></div>
                                                   <div>
                                                      <div><button type="button" className="btn-primary btn-text"><span
                                                          className="btn-label"><span
                                                          className="loc-text">Edit</span></span></button></div>
                                                   </div>
                                                </div>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </span>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div className="">
                                                <section className="tab-pane" styleA="display: none;">
                                                    <div className="cols-row compensation-rule">
                                                        <div className="col col-9-10">
                                                            <div className="header">
                                                                <div>Package Margin Pricing</div>
                                                            </div>
                                                            <div className="body">
                                                                <div>
                                                                    <span>Expedia collect: 28% | Applies to 0  rate plan</span>
                                                                </div>
                                                            </div>
                                                            <div className="footer">
                                                                <div><span><span className="icon icon-time undefined"
                                                                                 aria-hidden="true"></span> This rule has 0 date specific setting</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-1-10">
                              <span>
                                 <div className="active-fontSize">
                                    <div className="menu-bar " id="epc-667ca4n">
                                       <ul className="menu-bar-inner">
                                          <li className="">
                                             <button type="button" data-control="menu" data-auto-pos="true"
                                                     className="menu-trigger theme-standard trigger-link pin-left btn-text menu-arrow"
                                                     aria-expanded="false"><span className="btn-label">Actions<span
                                                 className="icon icon-toggle180 "
                                                 aria-hidden="true"></span></span></button>
                                             <div className="menu" aria-hidden="true" tabIndex="0">
                                                <div className="menu-main">
                                                   <div><button type="button" className="btn-primary btn-text"><span
                                                       className="btn-label"><span
                                                       className="loc-text">View Details</span></span></button></div>
                                                   <div>
                                                      <div><button type="button" className="btn-primary btn-text"><span
                                                          className="btn-label"><span
                                                          className="loc-text">Edit</span></span></button></div>
                                                   </div>
                                                </div>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </span>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div className="">
                                                <section className="tab-pane" styleA="display: block;">
                                                    <div className="cols-row compensation-rule">
                                                        <div className="col col-9-10">
                                                            <div className="header">
                                                                <div>Standalone Margin Pricing</div>
                                                            </div>
                                                            <div className="body">
                                                                <div>
                                                                    <span>Expedia collect: 25% | Applies to 1  rate plan</span>
                                                                </div>
                                                            </div>
                                                            <div className="footer">
                                                                <div><span><span className="icon icon-time undefined"
                                                                                 aria-hidden="true"></span> This rule has 0 date specific setting</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-1-10">
                              <span>
                                 <div className="active-fontSize">
                                    <div className="menu-bar " id="epc-af4vcds">
                                       <ul className="menu-bar-inner">
                                          <li className="">
                                             <button type="button" data-control="menu" data-auto-pos="true"
                                                     className="menu-trigger theme-standard trigger-link pin-left btn-text menu-arrow"
                                                     aria-expanded="false"><span className="btn-label">Actions<span
                                                 className="icon icon-toggle180 "
                                                 aria-hidden="true"></span></span></button>
                                             <div className="menu" aria-hidden="true" tabIndex="0">
                                                <div className="menu-main">
                                                   <div><button type="button" className="btn-primary btn-text"><span
                                                       className="btn-label"><span
                                                       className="loc-text">View Details</span></span></button></div>
                                                   <div>
                                                      <div><button type="button" className="btn-primary btn-text"><span
                                                          className="btn-label"><span
                                                          className="loc-text">Edit</span></span></button></div>
                                                   </div>
                                                </div>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </span>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn-secondary btn-action createNewClass"><span
                                        className="btn-label"><span className="loc-text">Create new rule</span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default ListStaffComponent;