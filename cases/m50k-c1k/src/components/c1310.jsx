import React from 'react';
const LABEL_1310 = 'component_1310';
export function Component1310({ value = 1310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1310, 'data-value': derived.doubled }, children);
}
export default Component1310;
