import React from 'react';
const LABEL_30782 = 'component_30782';
export function Component30782({ value = 30782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30782, 'data-value': derived.doubled }, children);
}
export default Component30782;
