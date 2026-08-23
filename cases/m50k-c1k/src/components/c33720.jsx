import React from 'react';
const LABEL_33720 = 'component_33720';
export function Component33720({ value = 33720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33720, 'data-value': derived.doubled }, children);
}
export default Component33720;
