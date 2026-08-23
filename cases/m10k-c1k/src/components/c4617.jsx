import React from 'react';
const LABEL_4617 = 'component_4617';
export function Component4617({ value = 4617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4617, 'data-value': derived.doubled }, children);
}
export default Component4617;
