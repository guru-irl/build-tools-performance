import React from 'react';
const LABEL_5310 = 'component_5310';
export function Component5310({ value = 5310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5310, 'data-value': derived.doubled }, children);
}
export default Component5310;
