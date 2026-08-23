import React from 'react';
const LABEL_187 = 'component_187';
export function Component187({ value = 187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_187, 'data-value': derived.doubled }, children);
}
export default Component187;
