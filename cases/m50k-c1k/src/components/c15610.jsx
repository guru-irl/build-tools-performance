import React from 'react';
const LABEL_15610 = 'component_15610';
export function Component15610({ value = 15610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15610, 'data-value': derived.doubled }, children);
}
export default Component15610;
