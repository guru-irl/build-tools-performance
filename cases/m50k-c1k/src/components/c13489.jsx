import React from 'react';
const LABEL_13489 = 'component_13489';
export function Component13489({ value = 13489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13489, 'data-value': derived.doubled }, children);
}
export default Component13489;
