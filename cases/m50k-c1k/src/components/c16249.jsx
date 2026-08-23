import React from 'react';
const LABEL_16249 = 'component_16249';
export function Component16249({ value = 16249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16249, 'data-value': derived.doubled }, children);
}
export default Component16249;
