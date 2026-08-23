import React from 'react';
const LABEL_38533 = 'component_38533';
export function Component38533({ value = 38533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38533, 'data-value': derived.doubled }, children);
}
export default Component38533;
