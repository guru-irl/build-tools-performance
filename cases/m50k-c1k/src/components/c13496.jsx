import React from 'react';
const LABEL_13496 = 'component_13496';
export function Component13496({ value = 13496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13496, 'data-value': derived.doubled }, children);
}
export default Component13496;
