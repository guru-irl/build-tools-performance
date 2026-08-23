import React from 'react';
const LABEL_15170 = 'component_15170';
export function Component15170({ value = 15170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15170, 'data-value': derived.doubled }, children);
}
export default Component15170;
