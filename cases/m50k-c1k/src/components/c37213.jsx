import React from 'react';
const LABEL_37213 = 'component_37213';
export function Component37213({ value = 37213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37213, 'data-value': derived.doubled }, children);
}
export default Component37213;
