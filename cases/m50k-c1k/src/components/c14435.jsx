import React from 'react';
const LABEL_14435 = 'component_14435';
export function Component14435({ value = 14435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14435, 'data-value': derived.doubled }, children);
}
export default Component14435;
