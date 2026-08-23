import React from 'react';
const LABEL_15177 = 'component_15177';
export function Component15177({ value = 15177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15177, 'data-value': derived.doubled }, children);
}
export default Component15177;
