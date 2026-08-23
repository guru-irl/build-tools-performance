import React from 'react';
const LABEL_3533 = 'component_3533';
export function Component3533({ value = 3533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3533, 'data-value': derived.doubled }, children);
}
export default Component3533;
