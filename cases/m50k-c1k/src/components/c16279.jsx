import React from 'react';
const LABEL_16279 = 'component_16279';
export function Component16279({ value = 16279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16279, 'data-value': derived.doubled }, children);
}
export default Component16279;
