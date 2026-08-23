import React from 'react';
const LABEL_46899 = 'component_46899';
export function Component46899({ value = 46899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46899, 'data-value': derived.doubled }, children);
}
export default Component46899;
