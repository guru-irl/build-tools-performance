import React from 'react';
const LABEL_782 = 'component_782';
export function Component782({ value = 782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_782, 'data-value': derived.doubled }, children);
}
export default Component782;
