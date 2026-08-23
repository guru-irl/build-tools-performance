import React from 'react';
const LABEL_28292 = 'component_28292';
export function Component28292({ value = 28292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28292, 'data-value': derived.doubled }, children);
}
export default Component28292;
