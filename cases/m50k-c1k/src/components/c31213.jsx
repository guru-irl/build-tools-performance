import React from 'react';
const LABEL_31213 = 'component_31213';
export function Component31213({ value = 31213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31213, 'data-value': derived.doubled }, children);
}
export default Component31213;
