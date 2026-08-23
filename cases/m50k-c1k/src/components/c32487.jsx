import React from 'react';
const LABEL_32487 = 'component_32487';
export function Component32487({ value = 32487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32487, 'data-value': derived.doubled }, children);
}
export default Component32487;
