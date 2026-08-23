import React from 'react';
const LABEL_36233 = 'component_36233';
export function Component36233({ value = 36233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36233, 'data-value': derived.doubled }, children);
}
export default Component36233;
