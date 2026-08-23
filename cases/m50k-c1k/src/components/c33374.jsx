import React from 'react';
const LABEL_33374 = 'component_33374';
export function Component33374({ value = 33374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33374, 'data-value': derived.doubled }, children);
}
export default Component33374;
