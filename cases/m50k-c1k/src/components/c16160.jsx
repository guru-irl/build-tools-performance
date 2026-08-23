import React from 'react';
const LABEL_16160 = 'component_16160';
export function Component16160({ value = 16160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16160, 'data-value': derived.doubled }, children);
}
export default Component16160;
