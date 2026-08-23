import React from 'react';
const LABEL_17782 = 'component_17782';
export function Component17782({ value = 17782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17782, 'data-value': derived.doubled }, children);
}
export default Component17782;
