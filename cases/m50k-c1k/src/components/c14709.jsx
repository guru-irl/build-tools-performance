import React from 'react';
const LABEL_14709 = 'component_14709';
export function Component14709({ value = 14709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14709, 'data-value': derived.doubled }, children);
}
export default Component14709;
