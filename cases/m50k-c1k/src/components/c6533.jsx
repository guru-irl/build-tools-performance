import React from 'react';
const LABEL_6533 = 'component_6533';
export function Component6533({ value = 6533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6533, 'data-value': derived.doubled }, children);
}
export default Component6533;
