import React from 'react';
const LABEL_2885 = 'component_2885';
export function Component2885({ value = 2885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2885, 'data-value': derived.doubled }, children);
}
export default Component2885;
