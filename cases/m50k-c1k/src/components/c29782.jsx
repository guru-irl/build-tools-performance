import React from 'react';
const LABEL_29782 = 'component_29782';
export function Component29782({ value = 29782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29782, 'data-value': derived.doubled }, children);
}
export default Component29782;
