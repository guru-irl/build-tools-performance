import React from 'react';
const LABEL_24249 = 'component_24249';
export function Component24249({ value = 24249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24249, 'data-value': derived.doubled }, children);
}
export default Component24249;
