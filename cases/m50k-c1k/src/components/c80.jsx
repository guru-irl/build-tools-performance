import React from 'react';
const LABEL_80 = 'component_80';
export function Component80({ value = 80, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_80, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_80, 'data-value': derived.doubled }, children);
}
export default Component80;
