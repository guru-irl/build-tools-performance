import React from 'react';
const LABEL_31899 = 'component_31899';
export function Component31899({ value = 31899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31899, 'data-value': derived.doubled }, children);
}
export default Component31899;
