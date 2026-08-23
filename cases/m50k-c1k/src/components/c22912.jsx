import React from 'react';
const LABEL_22912 = 'component_22912';
export function Component22912({ value = 22912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22912, 'data-value': derived.doubled }, children);
}
export default Component22912;
