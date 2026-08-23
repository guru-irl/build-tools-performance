import React from 'react';
const LABEL_39533 = 'component_39533';
export function Component39533({ value = 39533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39533, 'data-value': derived.doubled }, children);
}
export default Component39533;
