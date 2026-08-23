import React from 'react';
const LABEL_2653 = 'component_2653';
export function Component2653({ value = 2653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2653, 'data-value': derived.doubled }, children);
}
export default Component2653;
