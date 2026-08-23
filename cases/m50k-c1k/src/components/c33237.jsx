import React from 'react';
const LABEL_33237 = 'component_33237';
export function Component33237({ value = 33237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33237, 'data-value': derived.doubled }, children);
}
export default Component33237;
