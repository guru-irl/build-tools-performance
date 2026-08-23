import React from 'react';
const LABEL_29352 = 'component_29352';
export function Component29352({ value = 29352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29352, 'data-value': derived.doubled }, children);
}
export default Component29352;
