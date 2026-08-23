import React from 'react';
const LABEL_15782 = 'component_15782';
export function Component15782({ value = 15782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15782, 'data-value': derived.doubled }, children);
}
export default Component15782;
