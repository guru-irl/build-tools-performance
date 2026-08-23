import React from 'react';
const LABEL_28571 = 'component_28571';
export function Component28571({ value = 28571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28571, 'data-value': derived.doubled }, children);
}
export default Component28571;
