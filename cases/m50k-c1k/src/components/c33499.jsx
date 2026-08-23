import React from 'react';
const LABEL_33499 = 'component_33499';
export function Component33499({ value = 33499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33499, 'data-value': derived.doubled }, children);
}
export default Component33499;
