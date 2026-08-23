import React from 'react';
const LABEL_32626 = 'component_32626';
export function Component32626({ value = 32626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32626, 'data-value': derived.doubled }, children);
}
export default Component32626;
