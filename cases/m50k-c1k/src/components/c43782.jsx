import React from 'react';
const LABEL_43782 = 'component_43782';
export function Component43782({ value = 43782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43782, 'data-value': derived.doubled }, children);
}
export default Component43782;
