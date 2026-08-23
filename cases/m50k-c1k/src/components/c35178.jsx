import React from 'react';
const LABEL_35178 = 'component_35178';
export function Component35178({ value = 35178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35178, 'data-value': derived.doubled }, children);
}
export default Component35178;
