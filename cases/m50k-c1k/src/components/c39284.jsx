import React from 'react';
const LABEL_39284 = 'component_39284';
export function Component39284({ value = 39284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39284, 'data-value': derived.doubled }, children);
}
export default Component39284;
