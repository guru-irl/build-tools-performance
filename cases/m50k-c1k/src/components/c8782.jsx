import React from 'react';
const LABEL_8782 = 'component_8782';
export function Component8782({ value = 8782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8782, 'data-value': derived.doubled }, children);
}
export default Component8782;
