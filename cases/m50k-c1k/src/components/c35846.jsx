import React from 'react';
const LABEL_35846 = 'component_35846';
export function Component35846({ value = 35846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35846, 'data-value': derived.doubled }, children);
}
export default Component35846;
