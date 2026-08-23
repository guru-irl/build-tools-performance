import React from 'react';
const LABEL_11782 = 'component_11782';
export function Component11782({ value = 11782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11782, 'data-value': derived.doubled }, children);
}
export default Component11782;
