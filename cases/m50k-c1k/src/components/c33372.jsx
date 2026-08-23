import React from 'react';
const LABEL_33372 = 'component_33372';
export function Component33372({ value = 33372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33372, 'data-value': derived.doubled }, children);
}
export default Component33372;
