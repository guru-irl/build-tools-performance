import React from 'react';
const LABEL_10065 = 'component_10065';
export function Component10065({ value = 10065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10065, 'data-value': derived.doubled }, children);
}
export default Component10065;
