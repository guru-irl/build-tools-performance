import React from 'react';
const LABEL_36170 = 'component_36170';
export function Component36170({ value = 36170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36170, 'data-value': derived.doubled }, children);
}
export default Component36170;
