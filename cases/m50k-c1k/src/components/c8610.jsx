import React from 'react';
const LABEL_8610 = 'component_8610';
export function Component8610({ value = 8610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8610, 'data-value': derived.doubled }, children);
}
export default Component8610;
