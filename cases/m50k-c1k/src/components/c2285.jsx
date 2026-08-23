import React from 'react';
const LABEL_2285 = 'component_2285';
export function Component2285({ value = 2285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2285, 'data-value': derived.doubled }, children);
}
export default Component2285;
