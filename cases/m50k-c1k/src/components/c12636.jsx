import React from 'react';
const LABEL_12636 = 'component_12636';
export function Component12636({ value = 12636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12636, 'data-value': derived.doubled }, children);
}
export default Component12636;
