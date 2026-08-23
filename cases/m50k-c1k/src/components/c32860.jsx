import React from 'react';
const LABEL_32860 = 'component_32860';
export function Component32860({ value = 32860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32860, 'data-value': derived.doubled }, children);
}
export default Component32860;
