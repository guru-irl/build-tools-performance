import React from 'react';
const LABEL_43493 = 'component_43493';
export function Component43493({ value = 43493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43493, 'data-value': derived.doubled }, children);
}
export default Component43493;
