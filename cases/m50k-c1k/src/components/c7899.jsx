import React from 'react';
const LABEL_7899 = 'component_7899';
export function Component7899({ value = 7899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7899, 'data-value': derived.doubled }, children);
}
export default Component7899;
