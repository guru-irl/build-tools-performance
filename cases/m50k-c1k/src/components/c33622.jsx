import React from 'react';
const LABEL_33622 = 'component_33622';
export function Component33622({ value = 33622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33622, 'data-value': derived.doubled }, children);
}
export default Component33622;
