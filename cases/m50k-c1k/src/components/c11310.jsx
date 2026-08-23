import React from 'react';
const LABEL_11310 = 'component_11310';
export function Component11310({ value = 11310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11310, 'data-value': derived.doubled }, children);
}
export default Component11310;
