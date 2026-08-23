import React from 'react';
const LABEL_6213 = 'component_6213';
export function Component6213({ value = 6213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6213, 'data-value': derived.doubled }, children);
}
export default Component6213;
