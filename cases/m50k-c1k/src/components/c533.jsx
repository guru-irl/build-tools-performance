import React from 'react';
const LABEL_533 = 'component_533';
export function Component533({ value = 533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_533, 'data-value': derived.doubled }, children);
}
export default Component533;
