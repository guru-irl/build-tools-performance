import React from 'react';
const LABEL_7081 = 'component_7081';
export function Component7081({ value = 7081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7081, 'data-value': derived.doubled }, children);
}
export default Component7081;
