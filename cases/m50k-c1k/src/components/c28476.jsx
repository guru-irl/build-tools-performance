import React from 'react';
const LABEL_28476 = 'component_28476';
export function Component28476({ value = 28476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28476, 'data-value': derived.doubled }, children);
}
export default Component28476;
