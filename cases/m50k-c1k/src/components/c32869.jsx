import React from 'react';
const LABEL_32869 = 'component_32869';
export function Component32869({ value = 32869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32869, 'data-value': derived.doubled }, children);
}
export default Component32869;
