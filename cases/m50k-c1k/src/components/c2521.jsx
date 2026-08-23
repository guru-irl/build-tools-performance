import React from 'react';
const LABEL_2521 = 'component_2521';
export function Component2521({ value = 2521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2521, 'data-value': derived.doubled }, children);
}
export default Component2521;
