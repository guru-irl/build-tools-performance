import React from 'react';
const LABEL_6380 = 'component_6380';
export function Component6380({ value = 6380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6380, 'data-value': derived.doubled }, children);
}
export default Component6380;
