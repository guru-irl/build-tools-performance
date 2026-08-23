import React from 'react';
const LABEL_14145 = 'component_14145';
export function Component14145({ value = 14145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14145, 'data-value': derived.doubled }, children);
}
export default Component14145;
