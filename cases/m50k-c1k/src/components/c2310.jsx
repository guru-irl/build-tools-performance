import React from 'react';
const LABEL_2310 = 'component_2310';
export function Component2310({ value = 2310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2310, 'data-value': derived.doubled }, children);
}
export default Component2310;
