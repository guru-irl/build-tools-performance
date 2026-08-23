import React from 'react';
const LABEL_33000 = 'component_33000';
export function Component33000({ value = 33000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33000, 'data-value': derived.doubled }, children);
}
export default Component33000;
