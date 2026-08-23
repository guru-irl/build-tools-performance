import React from 'react';
const LABEL_29310 = 'component_29310';
export function Component29310({ value = 29310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29310, 'data-value': derived.doubled }, children);
}
export default Component29310;
