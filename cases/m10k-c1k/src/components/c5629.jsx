import React from 'react';
const LABEL_5629 = 'component_5629';
export function Component5629({ value = 5629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5629, 'data-value': derived.doubled }, children);
}
export default Component5629;
