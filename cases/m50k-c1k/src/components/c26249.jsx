import React from 'react';
const LABEL_26249 = 'component_26249';
export function Component26249({ value = 26249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26249, 'data-value': derived.doubled }, children);
}
export default Component26249;
