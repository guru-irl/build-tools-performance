import React from 'react';
const LABEL_2382 = 'component_2382';
export function Component2382({ value = 2382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2382, 'data-value': derived.doubled }, children);
}
export default Component2382;
