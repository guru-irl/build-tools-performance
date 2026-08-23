import React from 'react';
const LABEL_18610 = 'component_18610';
export function Component18610({ value = 18610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18610, 'data-value': derived.doubled }, children);
}
export default Component18610;
