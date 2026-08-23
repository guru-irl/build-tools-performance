import React from 'react';
const LABEL_2642 = 'component_2642';
export function Component2642({ value = 2642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2642, 'data-value': derived.doubled }, children);
}
export default Component2642;
