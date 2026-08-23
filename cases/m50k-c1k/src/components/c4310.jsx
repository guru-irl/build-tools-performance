import React from 'react';
const LABEL_4310 = 'component_4310';
export function Component4310({ value = 4310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4310, 'data-value': derived.doubled }, children);
}
export default Component4310;
