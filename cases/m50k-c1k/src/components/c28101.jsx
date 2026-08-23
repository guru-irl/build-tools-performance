import React from 'react';
const LABEL_28101 = 'component_28101';
export function Component28101({ value = 28101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28101, 'data-value': derived.doubled }, children);
}
export default Component28101;
