import React from 'react';
const LABEL_33802 = 'component_33802';
export function Component33802({ value = 33802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33802, 'data-value': derived.doubled }, children);
}
export default Component33802;
