import React from 'react';
const LABEL_28546 = 'component_28546';
export function Component28546({ value = 28546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28546, 'data-value': derived.doubled }, children);
}
export default Component28546;
