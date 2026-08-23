import React from 'react';
const LABEL_35065 = 'component_35065';
export function Component35065({ value = 35065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35065, 'data-value': derived.doubled }, children);
}
export default Component35065;
