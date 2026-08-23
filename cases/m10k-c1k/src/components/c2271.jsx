import React from 'react';
const LABEL_2271 = 'component_2271';
export function Component2271({ value = 2271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2271, 'data-value': derived.doubled }, children);
}
export default Component2271;
