import React from 'react';
const LABEL_33395 = 'component_33395';
export function Component33395({ value = 33395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33395, 'data-value': derived.doubled }, children);
}
export default Component33395;
