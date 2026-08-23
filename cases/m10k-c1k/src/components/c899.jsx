import React from 'react';
const LABEL_899 = 'component_899';
export function Component899({ value = 899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_899, 'data-value': derived.doubled }, children);
}
export default Component899;
