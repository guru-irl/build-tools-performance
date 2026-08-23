import React from 'react';
const LABEL_23857 = 'component_23857';
export function Component23857({ value = 23857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23857, 'data-value': derived.doubled }, children);
}
export default Component23857;
