import React from 'react';
const LABEL_2782 = 'component_2782';
export function Component2782({ value = 2782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2782, 'data-value': derived.doubled }, children);
}
export default Component2782;
