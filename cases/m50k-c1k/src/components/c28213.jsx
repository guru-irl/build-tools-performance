import React from 'react';
const LABEL_28213 = 'component_28213';
export function Component28213({ value = 28213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28213, 'data-value': derived.doubled }, children);
}
export default Component28213;
