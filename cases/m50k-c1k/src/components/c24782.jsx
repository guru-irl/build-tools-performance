import React from 'react';
const LABEL_24782 = 'component_24782';
export function Component24782({ value = 24782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24782, 'data-value': derived.doubled }, children);
}
export default Component24782;
