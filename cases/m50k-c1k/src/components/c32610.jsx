import React from 'react';
const LABEL_32610 = 'component_32610';
export function Component32610({ value = 32610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32610, 'data-value': derived.doubled }, children);
}
export default Component32610;
