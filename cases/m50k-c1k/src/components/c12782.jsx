import React from 'react';
const LABEL_12782 = 'component_12782';
export function Component12782({ value = 12782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12782, 'data-value': derived.doubled }, children);
}
export default Component12782;
