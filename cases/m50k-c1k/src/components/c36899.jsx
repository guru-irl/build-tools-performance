import React from 'react';
const LABEL_36899 = 'component_36899';
export function Component36899({ value = 36899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36899, 'data-value': derived.doubled }, children);
}
export default Component36899;
