import React from 'react';
const LABEL_33668 = 'component_33668';
export function Component33668({ value = 33668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33668, 'data-value': derived.doubled }, children);
}
export default Component33668;
