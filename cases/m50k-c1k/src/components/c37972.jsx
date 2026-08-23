import React from 'react';
const LABEL_37972 = 'component_37972';
export function Component37972({ value = 37972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37972, 'data-value': derived.doubled }, children);
}
export default Component37972;
