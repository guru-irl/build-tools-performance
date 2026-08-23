import React from 'react';
const LABEL_24046 = 'component_24046';
export function Component24046({ value = 24046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24046, 'data-value': derived.doubled }, children);
}
export default Component24046;
