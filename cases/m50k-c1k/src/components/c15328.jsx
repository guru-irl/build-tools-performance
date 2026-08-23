import React from 'react';
const LABEL_15328 = 'component_15328';
export function Component15328({ value = 15328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15328, 'data-value': derived.doubled }, children);
}
export default Component15328;
