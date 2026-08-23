import React from 'react';
const LABEL_13782 = 'component_13782';
export function Component13782({ value = 13782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13782, 'data-value': derived.doubled }, children);
}
export default Component13782;
