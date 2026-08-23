import React from 'react';
const LABEL_5109 = 'component_5109';
export function Component5109({ value = 5109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5109, 'data-value': derived.doubled }, children);
}
export default Component5109;
