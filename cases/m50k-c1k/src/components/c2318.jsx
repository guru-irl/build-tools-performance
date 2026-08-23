import React from 'react';
const LABEL_2318 = 'component_2318';
export function Component2318({ value = 2318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2318, 'data-value': derived.doubled }, children);
}
export default Component2318;
