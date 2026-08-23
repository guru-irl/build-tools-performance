import React from 'react';
const LABEL_15830 = 'component_15830';
export function Component15830({ value = 15830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15830, 'data-value': derived.doubled }, children);
}
export default Component15830;
