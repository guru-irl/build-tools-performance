import React from 'react';
const LABEL_28782 = 'component_28782';
export function Component28782({ value = 28782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28782, 'data-value': derived.doubled }, children);
}
export default Component28782;
