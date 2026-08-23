import React from 'react';
const LABEL_2694 = 'component_2694';
export function Component2694({ value = 2694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2694, 'data-value': derived.doubled }, children);
}
export default Component2694;
