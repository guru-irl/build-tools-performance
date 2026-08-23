import React from 'react';
const LABEL_36533 = 'component_36533';
export function Component36533({ value = 36533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36533, 'data-value': derived.doubled }, children);
}
export default Component36533;
