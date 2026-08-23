import React from 'react';
const LABEL_20754 = 'component_20754';
export function Component20754({ value = 20754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20754, 'data-value': derived.doubled }, children);
}
export default Component20754;
