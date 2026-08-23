import React from 'react';
const LABEL_33249 = 'component_33249';
export function Component33249({ value = 33249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33249, 'data-value': derived.doubled }, children);
}
export default Component33249;
