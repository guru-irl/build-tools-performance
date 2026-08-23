import React from 'react';
const LABEL_23118 = 'component_23118';
export function Component23118({ value = 23118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23118, 'data-value': derived.doubled }, children);
}
export default Component23118;
