import React from 'react';
const LABEL_21783 = 'component_21783';
export function Component21783({ value = 21783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21783, 'data-value': derived.doubled }, children);
}
export default Component21783;
