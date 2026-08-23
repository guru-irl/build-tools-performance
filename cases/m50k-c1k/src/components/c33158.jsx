import React from 'react';
const LABEL_33158 = 'component_33158';
export function Component33158({ value = 33158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33158, 'data-value': derived.doubled }, children);
}
export default Component33158;
