import React from 'react';
const LABEL_36464 = 'component_36464';
export function Component36464({ value = 36464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36464, 'data-value': derived.doubled }, children);
}
export default Component36464;
