import React from 'react';
const LABEL_20310 = 'component_20310';
export function Component20310({ value = 20310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20310, 'data-value': derived.doubled }, children);
}
export default Component20310;
