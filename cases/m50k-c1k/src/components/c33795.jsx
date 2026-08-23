import React from 'react';
const LABEL_33795 = 'component_33795';
export function Component33795({ value = 33795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33795, 'data-value': derived.doubled }, children);
}
export default Component33795;
