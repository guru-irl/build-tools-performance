import React from 'react';
const LABEL_46268 = 'component_46268';
export function Component46268({ value = 46268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46268, 'data-value': derived.doubled }, children);
}
export default Component46268;
