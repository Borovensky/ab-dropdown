import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './index';
// import './test-styles.sass';

const SOURCE = [
  { id: '5383130f646', desc: null, name: 'name', type: 'string', label: 'name', visible: true, source: null },
  { id: '5d4988fff91', desc: null, name: 'customer_fit_segment', type: 'string', label: 'Customer Fit Segment', visible: true, source: 'salesmachine' },
  { id: '5d4988fff92', desc: null, name: 'customer_fit_score', type: 'number', label: 'Customer Fit Score', visible: true, source: 'salesmachine' },
  { id: '5d4988fff93', desc: null, name: 'product_adoption_segment', type: 'string', label: 'Product Adoption Segment', visible: true, source: 'salesmachine' },
  { id: '5d4988fff94', desc: null, name: 'product_adoption_score', type: 'number', label: 'Product Adoption Score', visible: true, source: 'salesmachine' },
  { id: '5d4988fff95', desc: null, name: 'status', type: 'string', label: 'Status', visible: true, source: 'salesmachine' },
  { id: '590a14cd2ed', desc: null, name: 'mrr', type: 'number', label: 'MRR', visible: true, source: null },
  { id: '5b0d8bf5155', desc: null, name: 'session_at', type: 'date', label: 'session_at', visible: true, source: null },
  { id: '55716b6b310', desc: null, name: 'created_at', type: 'date', label: 'created_at', visible: true, source: null },
  { id: '5a251696ec8', desc: null, name: 'contact_id', type: 'string', label: 'Contact ID', visible: true, source: null },
  { id: '5383136f6c0', desc: null, name: 'api_calls_count', type: 'number', label: 'api_calls_count', visible: false, source: null },
  { id: '5383130f64f', desc: null, name: 'api_user_count', type: 'number', label: 'api_user_count', visible: false, source: null },
  { id: '5383130f640', desc: null, name: 'events_count', type: 'number', label: 'events_count', visible: false, source: null },
  { id: '5383513a646', desc: null, name: 'emails_count', type: 'number', label: 'emails_count', visible: false, source: null },
  { id: '53835603646', desc: null, name: 'contacts_count', type: 'number', label: 'contacts_count', visible: false, source: 'salesmachine' },
  { id: '544773c4646f', desc: null, name: 'accounts_count', type: 'number', label: 'accounts_count', visible: false, source: null },
  { id: '55dc741b3c5a', desc: null, name: 'email_provider', type: 'string', label: 'email_provider', visible: false, source: null },
  { id: 'ff52b90040fa', desc: null, name: 'contacts_segments_count', type: 'number', label: 'contacts_segments_count', visible: false, source: null },
  { id: 'ff52b90040fd', desc: null, name: 'account_segments_count', type: 'number', label: 'account_segments_count', visible: false, source: null },
  { id: 'ff52b90040fe', desc: null, name: 'workflows_count', type: 'number', label: 'workflows_count', visible: false, source: null },
  { id: 'ff52b9004101', desc: null, name: 'tasks_created_count', type: 'number', label: 'tasks_created_count', visible: false, source: null },
  { id: 'ff52b9004102', desc: null, name: 'emails_layouts_count', type: 'number', label: 'emails_layouts_count', visible: false, source: null },
  { id: 'ff52b9004103', desc: null, name: 'emails_sent_count', type: 'number', label: 'emails_sent_count', visible: false, source: null },
  { id: 'ff1e07000276', desc: null, name: 'updated_at', type: 'date', label: 'updated_at', visible: false, source: null },
  { id: 'ff62870a8d19', desc: null, name: 'api_token', type: 'string', label: 'api_token', visible: false, source: null },
];

const listItemRender = (item) => (
  <div className="list_item">{item.label}</div>
);

const elem = (
  <div
    style={{
      display: 'flex',
      height: '100%',
      // width: '100%',
      marginLeft: '400px',
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Dropdown
      // label="Select Item"
      // classNames={{
      //   dropdown: 'custom-db',
      //   trigger: 'custom-tg',
      // }}
      // triggerIcon={false}
      // styles={{
      //   dropdown: { minWidth: '150px' },
      //   trigger: { width: '120px' },
      // }}
      // disabled={!SOURCE}
      // onChange={(item) => item}
      source={SOURCE}
      // labelRenderer={(item) => item.label}
      listItemRender={listItemRender}
    />
  </div>
);

ReactDOM.render(elem, document.getElementById('root'));
