import React from 'react';
const LABEL_11292 = 'component_11292';
export function Component11292({ value = 11292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11292, 'data-value': derived.doubled }, children);
}
export default Component11292;
