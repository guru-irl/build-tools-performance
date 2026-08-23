import React from 'react';
const LABEL_28095 = 'component_28095';
export function Component28095({ value = 28095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28095, 'data-value': derived.doubled }, children);
}
export default Component28095;
