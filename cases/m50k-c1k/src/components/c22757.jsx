import React from 'react';
const LABEL_22757 = 'component_22757';
export function Component22757({ value = 22757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22757, 'data-value': derived.doubled }, children);
}
export default Component22757;
