import React from 'react';
const LABEL_28985 = 'component_28985';
export function Component28985({ value = 28985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28985, 'data-value': derived.doubled }, children);
}
export default Component28985;
