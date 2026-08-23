import React from 'react';
const LABEL_9350 = 'component_9350';
export function Component9350({ value = 9350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9350, 'data-value': derived.doubled }, children);
}
export default Component9350;
