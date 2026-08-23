import React from 'react';
const LABEL_10649 = 'component_10649';
export function Component10649({ value = 10649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10649, 'data-value': derived.doubled }, children);
}
export default Component10649;
