import React from 'react';
const LABEL_10782 = 'component_10782';
export function Component10782({ value = 10782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10782, 'data-value': derived.doubled }, children);
}
export default Component10782;
