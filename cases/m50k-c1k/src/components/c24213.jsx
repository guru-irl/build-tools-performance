import React from 'react';
const LABEL_24213 = 'component_24213';
export function Component24213({ value = 24213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24213, 'data-value': derived.doubled }, children);
}
export default Component24213;
