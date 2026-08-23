import React from 'react';
const LABEL_24197 = 'component_24197';
export function Component24197({ value = 24197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24197, 'data-value': derived.doubled }, children);
}
export default Component24197;
