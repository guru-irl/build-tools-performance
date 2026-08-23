import React from 'react';
const LABEL_44782 = 'component_44782';
export function Component44782({ value = 44782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44782, 'data-value': derived.doubled }, children);
}
export default Component44782;
