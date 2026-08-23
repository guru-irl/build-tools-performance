import React from 'react';
const LABEL_10533 = 'component_10533';
export function Component10533({ value = 10533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10533, 'data-value': derived.doubled }, children);
}
export default Component10533;
