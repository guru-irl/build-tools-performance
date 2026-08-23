import React from 'react';
const LABEL_11245 = 'component_11245';
export function Component11245({ value = 11245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11245, 'data-value': derived.doubled }, children);
}
export default Component11245;
