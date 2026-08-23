import React from 'react';
const LABEL_26318 = 'component_26318';
export function Component26318({ value = 26318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26318, 'data-value': derived.doubled }, children);
}
export default Component26318;
