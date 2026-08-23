import React from 'react';
const LABEL_12176 = 'component_12176';
export function Component12176({ value = 12176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12176, 'data-value': derived.doubled }, children);
}
export default Component12176;
