import React from 'react';
const LABEL_1782 = 'component_1782';
export function Component1782({ value = 1782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1782, 'data-value': derived.doubled }, children);
}
export default Component1782;
