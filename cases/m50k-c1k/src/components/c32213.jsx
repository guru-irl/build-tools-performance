import React from 'react';
const LABEL_32213 = 'component_32213';
export function Component32213({ value = 32213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32213, 'data-value': derived.doubled }, children);
}
export default Component32213;
