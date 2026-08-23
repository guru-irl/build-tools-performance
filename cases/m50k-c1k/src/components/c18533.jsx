import React from 'react';
const LABEL_18533 = 'component_18533';
export function Component18533({ value = 18533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18533, 'data-value': derived.doubled }, children);
}
export default Component18533;
