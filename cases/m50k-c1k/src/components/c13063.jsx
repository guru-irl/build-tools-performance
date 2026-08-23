import React from 'react';
const LABEL_13063 = 'component_13063';
export function Component13063({ value = 13063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13063, 'data-value': derived.doubled }, children);
}
export default Component13063;
