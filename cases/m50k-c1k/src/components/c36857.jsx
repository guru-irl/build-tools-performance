import React from 'react';
const LABEL_36857 = 'component_36857';
export function Component36857({ value = 36857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36857, 'data-value': derived.doubled }, children);
}
export default Component36857;
