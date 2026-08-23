import React from 'react';
const LABEL_2545 = 'component_2545';
export function Component2545({ value = 2545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2545, 'data-value': derived.doubled }, children);
}
export default Component2545;
