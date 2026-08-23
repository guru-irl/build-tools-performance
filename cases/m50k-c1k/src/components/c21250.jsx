import React from 'react';
const LABEL_21250 = 'component_21250';
export function Component21250({ value = 21250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21250, 'data-value': derived.doubled }, children);
}
export default Component21250;
