import React from 'react';
const LABEL_39731 = 'component_39731';
export function Component39731({ value = 39731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39731, 'data-value': derived.doubled }, children);
}
export default Component39731;
