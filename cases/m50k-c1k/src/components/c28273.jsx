import React from 'react';
const LABEL_28273 = 'component_28273';
export function Component28273({ value = 28273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28273, 'data-value': derived.doubled }, children);
}
export default Component28273;
