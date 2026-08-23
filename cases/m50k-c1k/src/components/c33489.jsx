import React from 'react';
const LABEL_33489 = 'component_33489';
export function Component33489({ value = 33489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33489, 'data-value': derived.doubled }, children);
}
export default Component33489;
