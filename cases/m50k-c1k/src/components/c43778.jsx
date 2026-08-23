import React from 'react';
const LABEL_43778 = 'component_43778';
export function Component43778({ value = 43778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43778, 'data-value': derived.doubled }, children);
}
export default Component43778;
