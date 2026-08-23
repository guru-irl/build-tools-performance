import React from 'react';
const LABEL_5782 = 'component_5782';
export function Component5782({ value = 5782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5782, 'data-value': derived.doubled }, children);
}
export default Component5782;
