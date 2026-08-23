import React from 'react';
const LABEL_33518 = 'component_33518';
export function Component33518({ value = 33518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33518, 'data-value': derived.doubled }, children);
}
export default Component33518;
