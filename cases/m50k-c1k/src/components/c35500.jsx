import React from 'react';
const LABEL_35500 = 'component_35500';
export function Component35500({ value = 35500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35500, 'data-value': derived.doubled }, children);
}
export default Component35500;
