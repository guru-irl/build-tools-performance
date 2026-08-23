import React from 'react';
const LABEL_28899 = 'component_28899';
export function Component28899({ value = 28899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28899, 'data-value': derived.doubled }, children);
}
export default Component28899;
