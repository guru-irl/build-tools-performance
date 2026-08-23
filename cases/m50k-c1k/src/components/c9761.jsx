import React from 'react';
const LABEL_9761 = 'component_9761';
export function Component9761({ value = 9761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9761, 'data-value': derived.doubled }, children);
}
export default Component9761;
