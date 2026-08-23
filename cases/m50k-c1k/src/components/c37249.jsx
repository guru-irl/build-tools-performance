import React from 'react';
const LABEL_37249 = 'component_37249';
export function Component37249({ value = 37249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37249, 'data-value': derived.doubled }, children);
}
export default Component37249;
