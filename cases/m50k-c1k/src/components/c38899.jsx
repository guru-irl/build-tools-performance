import React from 'react';
const LABEL_38899 = 'component_38899';
export function Component38899({ value = 38899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38899, 'data-value': derived.doubled }, children);
}
export default Component38899;
