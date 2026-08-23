import React from 'react';
const LABEL_23992 = 'component_23992';
export function Component23992({ value = 23992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23992, 'data-value': derived.doubled }, children);
}
export default Component23992;
