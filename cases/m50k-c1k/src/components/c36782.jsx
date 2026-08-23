import React from 'react';
const LABEL_36782 = 'component_36782';
export function Component36782({ value = 36782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36782, 'data-value': derived.doubled }, children);
}
export default Component36782;
