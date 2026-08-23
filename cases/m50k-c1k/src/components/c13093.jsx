import React from 'react';
const LABEL_13093 = 'component_13093';
export function Component13093({ value = 13093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13093, 'data-value': derived.doubled }, children);
}
export default Component13093;
