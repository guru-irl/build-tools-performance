import React from 'react';
const LABEL_8533 = 'component_8533';
export function Component8533({ value = 8533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8533, 'data-value': derived.doubled }, children);
}
export default Component8533;
