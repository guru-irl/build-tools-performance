import React from 'react';
const LABEL_8879 = 'component_8879';
export function Component8879({ value = 8879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8879, 'data-value': derived.doubled }, children);
}
export default Component8879;
