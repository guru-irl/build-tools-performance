import React from 'react';
const LABEL_2435 = 'component_2435';
export function Component2435({ value = 2435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2435, 'data-value': derived.doubled }, children);
}
export default Component2435;
