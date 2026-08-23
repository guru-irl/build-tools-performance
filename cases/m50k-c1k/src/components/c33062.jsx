import React from 'react';
const LABEL_33062 = 'component_33062';
export function Component33062({ value = 33062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33062, 'data-value': derived.doubled }, children);
}
export default Component33062;
