import React from 'react';
const LABEL_5213 = 'component_5213';
export function Component5213({ value = 5213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5213, 'data-value': derived.doubled }, children);
}
export default Component5213;
