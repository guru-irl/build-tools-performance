import React from 'react';
const LABEL_213 = 'component_213';
export function Component213({ value = 213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_213, 'data-value': derived.doubled }, children);
}
export default Component213;
