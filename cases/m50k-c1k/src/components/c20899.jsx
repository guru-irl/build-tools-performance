import React from 'react';
const LABEL_20899 = 'component_20899';
export function Component20899({ value = 20899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20899, 'data-value': derived.doubled }, children);
}
export default Component20899;
