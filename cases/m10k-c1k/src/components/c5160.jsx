import React from 'react';
const LABEL_5160 = 'component_5160';
export function Component5160({ value = 5160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5160, 'data-value': derived.doubled }, children);
}
export default Component5160;
