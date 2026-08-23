import React from 'react';
const LABEL_2638 = 'component_2638';
export function Component2638({ value = 2638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2638, 'data-value': derived.doubled }, children);
}
export default Component2638;
