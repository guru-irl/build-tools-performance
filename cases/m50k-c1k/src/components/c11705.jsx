import React from 'react';
const LABEL_11705 = 'component_11705';
export function Component11705({ value = 11705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11705, 'data-value': derived.doubled }, children);
}
export default Component11705;
