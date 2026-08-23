import React from 'react';
const LABEL_17043 = 'component_17043';
export function Component17043({ value = 17043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17043, 'data-value': derived.doubled }, children);
}
export default Component17043;
