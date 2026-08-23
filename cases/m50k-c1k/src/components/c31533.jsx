import React from 'react';
const LABEL_31533 = 'component_31533';
export function Component31533({ value = 31533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31533, 'data-value': derived.doubled }, children);
}
export default Component31533;
