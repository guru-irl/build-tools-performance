import React from 'react';
const LABEL_28525 = 'component_28525';
export function Component28525({ value = 28525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28525, 'data-value': derived.doubled }, children);
}
export default Component28525;
