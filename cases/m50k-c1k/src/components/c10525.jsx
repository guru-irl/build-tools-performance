import React from 'react';
const LABEL_10525 = 'component_10525';
export function Component10525({ value = 10525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10525, 'data-value': derived.doubled }, children);
}
export default Component10525;
