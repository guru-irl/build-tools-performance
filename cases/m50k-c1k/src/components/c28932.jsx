import React from 'react';
const LABEL_28932 = 'component_28932';
export function Component28932({ value = 28932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28932, 'data-value': derived.doubled }, children);
}
export default Component28932;
