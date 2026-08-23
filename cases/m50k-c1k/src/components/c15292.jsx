import React from 'react';
const LABEL_15292 = 'component_15292';
export function Component15292({ value = 15292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15292, 'data-value': derived.doubled }, children);
}
export default Component15292;
