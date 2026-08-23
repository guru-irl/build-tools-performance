import React from 'react';
const LABEL_3261 = 'component_3261';
export function Component3261({ value = 3261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3261, 'data-value': derived.doubled }, children);
}
export default Component3261;
