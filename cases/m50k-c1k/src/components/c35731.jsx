import React from 'react';
const LABEL_35731 = 'component_35731';
export function Component35731({ value = 35731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35731, 'data-value': derived.doubled }, children);
}
export default Component35731;
