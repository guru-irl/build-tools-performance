import React from 'react';
const LABEL_33747 = 'component_33747';
export function Component33747({ value = 33747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33747, 'data-value': derived.doubled }, children);
}
export default Component33747;
