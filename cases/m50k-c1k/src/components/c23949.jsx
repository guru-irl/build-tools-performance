import React from 'react';
const LABEL_23949 = 'component_23949';
export function Component23949({ value = 23949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23949, 'data-value': derived.doubled }, children);
}
export default Component23949;
