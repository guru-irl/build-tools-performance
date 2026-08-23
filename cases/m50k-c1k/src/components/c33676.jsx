import React from 'react';
const LABEL_33676 = 'component_33676';
export function Component33676({ value = 33676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33676, 'data-value': derived.doubled }, children);
}
export default Component33676;
