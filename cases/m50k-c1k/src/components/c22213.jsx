import React from 'react';
const LABEL_22213 = 'component_22213';
export function Component22213({ value = 22213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22213, 'data-value': derived.doubled }, children);
}
export default Component22213;
