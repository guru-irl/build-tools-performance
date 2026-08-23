import React from 'react';
const LABEL_33653 = 'component_33653';
export function Component33653({ value = 33653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33653, 'data-value': derived.doubled }, children);
}
export default Component33653;
