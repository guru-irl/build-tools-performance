import React from 'react';
const LABEL_2469 = 'component_2469';
export function Component2469({ value = 2469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2469, 'data-value': derived.doubled }, children);
}
export default Component2469;
