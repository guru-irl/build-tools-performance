import React from 'react';
const LABEL_23044 = 'component_23044';
export function Component23044({ value = 23044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23044, 'data-value': derived.doubled }, children);
}
export default Component23044;
