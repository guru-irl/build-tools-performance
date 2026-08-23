import React from 'react';
const LABEL_20511 = 'component_20511';
export function Component20511({ value = 20511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20511, 'data-value': derived.doubled }, children);
}
export default Component20511;
