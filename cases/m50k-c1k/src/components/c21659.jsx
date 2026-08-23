import React from 'react';
const LABEL_21659 = 'component_21659';
export function Component21659({ value = 21659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21659, 'data-value': derived.doubled }, children);
}
export default Component21659;
