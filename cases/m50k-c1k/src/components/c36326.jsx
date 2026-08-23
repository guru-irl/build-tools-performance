import React from 'react';
const LABEL_36326 = 'component_36326';
export function Component36326({ value = 36326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36326, 'data-value': derived.doubled }, children);
}
export default Component36326;
