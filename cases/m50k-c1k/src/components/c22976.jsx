import React from 'react';
const LABEL_22976 = 'component_22976';
export function Component22976({ value = 22976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22976, 'data-value': derived.doubled }, children);
}
export default Component22976;
