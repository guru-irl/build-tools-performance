import React from 'react';
const LABEL_13487 = 'component_13487';
export function Component13487({ value = 13487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13487, 'data-value': derived.doubled }, children);
}
export default Component13487;
