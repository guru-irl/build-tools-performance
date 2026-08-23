import React from 'react';
const LABEL_15772 = 'component_15772';
export function Component15772({ value = 15772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15772, 'data-value': derived.doubled }, children);
}
export default Component15772;
