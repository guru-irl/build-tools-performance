import React from 'react';
const LABEL_35812 = 'component_35812';
export function Component35812({ value = 35812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35812, 'data-value': derived.doubled }, children);
}
export default Component35812;
