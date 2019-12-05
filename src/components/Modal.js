//scr/components/Modal.js

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import DataTable from './DataTable'

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

export default function Modal({ isModalOpen, toggle }) {

  return (
    isModalOpen 
      ? (
        ReactDOM.createPortal(
        <Fragment>
          <div className="modal-overlay"/>
          <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
              <div className="modal-header">
                <h3>Modal Header</h3>
                <button 
                  type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" 
                  onClick={toggle}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <hr />
              <div className="modal-main">
                <DataTable />
              </div>
              <hr />
              <div className="modal-footer">
                <p>
                  Modal
                </p>
                <p>
                  Footer
                </p>
              </div>
            </div>
          </div>
        </Fragment>, document.body)
      ) 
    : null
  )
}
