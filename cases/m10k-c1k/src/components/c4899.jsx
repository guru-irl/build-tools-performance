import React from 'react';
const LABEL_4899 = 'component_4899';
export function Component4899({ value = 4899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4899, 'data-value': derived.doubled }, children);
}
export default Component4899;
