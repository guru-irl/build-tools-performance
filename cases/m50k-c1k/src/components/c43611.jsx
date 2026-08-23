import React from 'react';
const LABEL_43611 = 'component_43611';
export function Component43611({ value = 43611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43611, 'data-value': derived.doubled }, children);
}
export default Component43611;
