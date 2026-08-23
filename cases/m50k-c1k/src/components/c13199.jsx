import React from 'react';
const LABEL_13199 = 'component_13199';
export function Component13199({ value = 13199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13199, 'data-value': derived.doubled }, children);
}
export default Component13199;
