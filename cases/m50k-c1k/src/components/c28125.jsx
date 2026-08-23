import React from 'react';
const LABEL_28125 = 'component_28125';
export function Component28125({ value = 28125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28125, 'data-value': derived.doubled }, children);
}
export default Component28125;
