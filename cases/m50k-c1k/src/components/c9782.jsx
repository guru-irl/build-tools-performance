import React from 'react';
const LABEL_9782 = 'component_9782';
export function Component9782({ value = 9782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9782, 'data-value': derived.doubled }, children);
}
export default Component9782;
