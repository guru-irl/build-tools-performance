import React from 'react';
const LABEL_6610 = 'component_6610';
export function Component6610({ value = 6610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6610, 'data-value': derived.doubled }, children);
}
export default Component6610;
