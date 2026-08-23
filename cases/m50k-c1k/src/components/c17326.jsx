import React from 'react';
const LABEL_17326 = 'component_17326';
export function Component17326({ value = 17326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17326, 'data-value': derived.doubled }, children);
}
export default Component17326;
