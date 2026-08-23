import React from 'react';
const LABEL_6782 = 'component_6782';
export function Component6782({ value = 6782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6782, 'data-value': derived.doubled }, children);
}
export default Component6782;
