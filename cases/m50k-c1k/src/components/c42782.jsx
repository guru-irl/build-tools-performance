import React from 'react';
const LABEL_42782 = 'component_42782';
export function Component42782({ value = 42782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42782, 'data-value': derived.doubled }, children);
}
export default Component42782;
