import React from 'react';
const LABEL_14533 = 'component_14533';
export function Component14533({ value = 14533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14533, 'data-value': derived.doubled }, children);
}
export default Component14533;
