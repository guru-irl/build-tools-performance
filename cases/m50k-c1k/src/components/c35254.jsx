import React from 'react';
const LABEL_35254 = 'component_35254';
export function Component35254({ value = 35254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35254, 'data-value': derived.doubled }, children);
}
export default Component35254;
