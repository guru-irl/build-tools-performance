import React from 'react';
const LABEL_34080 = 'component_34080';
export function Component34080({ value = 34080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34080, 'data-value': derived.doubled }, children);
}
export default Component34080;
