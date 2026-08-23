import React from 'react';
const LABEL_2278 = 'component_2278';
export function Component2278({ value = 2278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2278, 'data-value': derived.doubled }, children);
}
export default Component2278;
