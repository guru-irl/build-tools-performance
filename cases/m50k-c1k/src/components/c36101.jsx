import React from 'react';
const LABEL_36101 = 'component_36101';
export function Component36101({ value = 36101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36101, 'data-value': derived.doubled }, children);
}
export default Component36101;
