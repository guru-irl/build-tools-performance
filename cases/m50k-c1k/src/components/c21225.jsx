import React from 'react';
const LABEL_21225 = 'component_21225';
export function Component21225({ value = 21225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21225, 'data-value': derived.doubled }, children);
}
export default Component21225;
