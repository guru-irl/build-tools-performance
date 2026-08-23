import React from 'react';
const LABEL_21781 = 'component_21781';
export function Component21781({ value = 21781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21781, 'data-value': derived.doubled }, children);
}
export default Component21781;
