import React from 'react';
const LABEL_8213 = 'component_8213';
export function Component8213({ value = 8213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8213, 'data-value': derived.doubled }, children);
}
export default Component8213;
