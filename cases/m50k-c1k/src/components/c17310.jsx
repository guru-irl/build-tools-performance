import React from 'react';
const LABEL_17310 = 'component_17310';
export function Component17310({ value = 17310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17310, 'data-value': derived.doubled }, children);
}
export default Component17310;
