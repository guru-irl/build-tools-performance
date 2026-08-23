import React from 'react';
const LABEL_5145 = 'component_5145';
export function Component5145({ value = 5145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5145, 'data-value': derived.doubled }, children);
}
export default Component5145;
