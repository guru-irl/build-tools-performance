import React from 'react';
const LABEL_3625 = 'component_3625';
export function Component3625({ value = 3625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3625, 'data-value': derived.doubled }, children);
}
export default Component3625;
