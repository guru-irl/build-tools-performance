import React from 'react';
const LABEL_15431 = 'component_15431';
export function Component15431({ value = 15431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15431, 'data-value': derived.doubled }, children);
}
export default Component15431;
