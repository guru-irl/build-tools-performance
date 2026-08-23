import React from 'react';
const LABEL_39158 = 'component_39158';
export function Component39158({ value = 39158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39158, 'data-value': derived.doubled }, children);
}
export default Component39158;
