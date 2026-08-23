import React from 'react';
const LABEL_26610 = 'component_26610';
export function Component26610({ value = 26610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26610, 'data-value': derived.doubled }, children);
}
export default Component26610;
