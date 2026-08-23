import React from 'react';
const LABEL_33858 = 'component_33858';
export function Component33858({ value = 33858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33858, 'data-value': derived.doubled }, children);
}
export default Component33858;
