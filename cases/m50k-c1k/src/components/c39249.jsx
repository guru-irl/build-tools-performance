import React from 'react';
const LABEL_39249 = 'component_39249';
export function Component39249({ value = 39249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39249, 'data-value': derived.doubled }, children);
}
export default Component39249;
