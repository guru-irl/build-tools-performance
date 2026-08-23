import React from 'react';
const LABEL_10731 = 'component_10731';
export function Component10731({ value = 10731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10731, 'data-value': derived.doubled }, children);
}
export default Component10731;
