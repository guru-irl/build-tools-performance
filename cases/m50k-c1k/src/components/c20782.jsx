import React from 'react';
const LABEL_20782 = 'component_20782';
export function Component20782({ value = 20782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20782, 'data-value': derived.doubled }, children);
}
export default Component20782;
