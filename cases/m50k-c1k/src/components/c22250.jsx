import React from 'react';
const LABEL_22250 = 'component_22250';
export function Component22250({ value = 22250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22250, 'data-value': derived.doubled }, children);
}
export default Component22250;
