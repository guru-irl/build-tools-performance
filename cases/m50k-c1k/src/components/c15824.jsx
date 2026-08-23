import React from 'react';
const LABEL_15824 = 'component_15824';
export function Component15824({ value = 15824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15824, 'data-value': derived.doubled }, children);
}
export default Component15824;
