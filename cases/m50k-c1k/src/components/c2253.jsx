import React from 'react';
const LABEL_2253 = 'component_2253';
export function Component2253({ value = 2253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2253, 'data-value': derived.doubled }, children);
}
export default Component2253;
