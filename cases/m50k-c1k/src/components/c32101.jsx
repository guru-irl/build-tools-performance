import React from 'react';
const LABEL_32101 = 'component_32101';
export function Component32101({ value = 32101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32101, 'data-value': derived.doubled }, children);
}
export default Component32101;
