import React from 'react';
const LABEL_33070 = 'component_33070';
export function Component33070({ value = 33070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33070, 'data-value': derived.doubled }, children);
}
export default Component33070;
