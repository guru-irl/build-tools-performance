import React from 'react';
const LABEL_7533 = 'component_7533';
export function Component7533({ value = 7533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7533, 'data-value': derived.doubled }, children);
}
export default Component7533;
