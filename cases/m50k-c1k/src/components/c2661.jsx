import React from 'react';
const LABEL_2661 = 'component_2661';
export function Component2661({ value = 2661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2661, 'data-value': derived.doubled }, children);
}
export default Component2661;
