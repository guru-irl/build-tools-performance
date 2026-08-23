import React from 'react';
const LABEL_22371 = 'component_22371';
export function Component22371({ value = 22371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22371, 'data-value': derived.doubled }, children);
}
export default Component22371;
