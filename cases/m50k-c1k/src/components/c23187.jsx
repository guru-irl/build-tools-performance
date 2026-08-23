import React from 'react';
const LABEL_23187 = 'component_23187';
export function Component23187({ value = 23187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23187, 'data-value': derived.doubled }, children);
}
export default Component23187;
