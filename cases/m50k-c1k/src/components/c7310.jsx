import React from 'react';
const LABEL_7310 = 'component_7310';
export function Component7310({ value = 7310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7310, 'data-value': derived.doubled }, children);
}
export default Component7310;
