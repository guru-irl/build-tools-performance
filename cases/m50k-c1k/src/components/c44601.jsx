import React from 'react';
const LABEL_44601 = 'component_44601';
export function Component44601({ value = 44601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44601, 'data-value': derived.doubled }, children);
}
export default Component44601;
