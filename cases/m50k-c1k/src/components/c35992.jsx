import React from 'react';
const LABEL_35992 = 'component_35992';
export function Component35992({ value = 35992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35992, 'data-value': derived.doubled }, children);
}
export default Component35992;
