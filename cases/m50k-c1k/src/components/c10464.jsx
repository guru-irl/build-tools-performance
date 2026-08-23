import React from 'react';
const LABEL_10464 = 'component_10464';
export function Component10464({ value = 10464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10464, 'data-value': derived.doubled }, children);
}
export default Component10464;
