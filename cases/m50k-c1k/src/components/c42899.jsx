import React from 'react';
const LABEL_42899 = 'component_42899';
export function Component42899({ value = 42899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42899, 'data-value': derived.doubled }, children);
}
export default Component42899;
