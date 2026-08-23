import React from 'react';
const LABEL_3610 = 'component_3610';
export function Component3610({ value = 3610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3610, 'data-value': derived.doubled }, children);
}
export default Component3610;
