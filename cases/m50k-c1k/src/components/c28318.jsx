import React from 'react';
const LABEL_28318 = 'component_28318';
export function Component28318({ value = 28318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28318, 'data-value': derived.doubled }, children);
}
export default Component28318;
