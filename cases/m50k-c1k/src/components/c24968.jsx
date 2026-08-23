import React from 'react';
const LABEL_24968 = 'component_24968';
export function Component24968({ value = 24968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24968, 'data-value': derived.doubled }, children);
}
export default Component24968;
