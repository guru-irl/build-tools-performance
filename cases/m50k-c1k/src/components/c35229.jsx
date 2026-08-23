import React from 'react';
const LABEL_35229 = 'component_35229';
export function Component35229({ value = 35229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35229, 'data-value': derived.doubled }, children);
}
export default Component35229;
