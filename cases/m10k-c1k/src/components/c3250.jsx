import React from 'react';
const LABEL_3250 = 'component_3250';
export function Component3250({ value = 3250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3250, 'data-value': derived.doubled }, children);
}
export default Component3250;
