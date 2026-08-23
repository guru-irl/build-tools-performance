import React from 'react';
const LABEL_4274 = 'component_4274';
export function Component4274({ value = 4274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4274, 'data-value': derived.doubled }, children);
}
export default Component4274;
