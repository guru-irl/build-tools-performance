import React from 'react';
const LABEL_23782 = 'component_23782';
export function Component23782({ value = 23782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23782, 'data-value': derived.doubled }, children);
}
export default Component23782;
