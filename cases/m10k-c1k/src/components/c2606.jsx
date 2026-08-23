import React from 'react';
const LABEL_2606 = 'component_2606';
export function Component2606({ value = 2606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2606, 'data-value': derived.doubled }, children);
}
export default Component2606;
