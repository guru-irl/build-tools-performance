import React from 'react';
const LABEL_23777 = 'component_23777';
export function Component23777({ value = 23777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23777, 'data-value': derived.doubled }, children);
}
export default Component23777;
