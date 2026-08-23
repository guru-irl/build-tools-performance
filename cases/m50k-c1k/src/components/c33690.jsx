import React from 'react';
const LABEL_33690 = 'component_33690';
export function Component33690({ value = 33690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33690, 'data-value': derived.doubled }, children);
}
export default Component33690;
