import React from 'react';
const LABEL_19782 = 'component_19782';
export function Component19782({ value = 19782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19782, 'data-value': derived.doubled }, children);
}
export default Component19782;
