import React from 'react';
const LABEL_15489 = 'component_15489';
export function Component15489({ value = 15489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15489, 'data-value': derived.doubled }, children);
}
export default Component15489;
