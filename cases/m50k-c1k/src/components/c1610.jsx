import React from 'react';
const LABEL_1610 = 'component_1610';
export function Component1610({ value = 1610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1610, 'data-value': derived.doubled }, children);
}
export default Component1610;
