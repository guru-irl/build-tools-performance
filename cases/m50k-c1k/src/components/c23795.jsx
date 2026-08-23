import React from 'react';
const LABEL_23795 = 'component_23795';
export function Component23795({ value = 23795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23795, 'data-value': derived.doubled }, children);
}
export default Component23795;
