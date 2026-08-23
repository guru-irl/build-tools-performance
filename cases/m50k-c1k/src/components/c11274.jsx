import React from 'react';
const LABEL_11274 = 'component_11274';
export function Component11274({ value = 11274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11274, 'data-value': derived.doubled }, children);
}
export default Component11274;
