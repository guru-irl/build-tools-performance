import React from 'react';
const LABEL_18782 = 'component_18782';
export function Component18782({ value = 18782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18782, 'data-value': derived.doubled }, children);
}
export default Component18782;
