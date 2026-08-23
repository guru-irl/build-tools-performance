import React from 'react';
const LABEL_10435 = 'component_10435';
export function Component10435({ value = 10435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10435, 'data-value': derived.doubled }, children);
}
export default Component10435;
