import React from 'react';
const LABEL_15413 = 'component_15413';
export function Component15413({ value = 15413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15413, 'data-value': derived.doubled }, children);
}
export default Component15413;
