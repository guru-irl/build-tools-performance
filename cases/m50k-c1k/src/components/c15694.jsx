import React from 'react';
const LABEL_15694 = 'component_15694';
export function Component15694({ value = 15694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15694, 'data-value': derived.doubled }, children);
}
export default Component15694;
