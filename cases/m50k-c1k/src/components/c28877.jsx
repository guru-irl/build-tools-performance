import React from 'react';
const LABEL_28877 = 'component_28877';
export function Component28877({ value = 28877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28877, 'data-value': derived.doubled }, children);
}
export default Component28877;
