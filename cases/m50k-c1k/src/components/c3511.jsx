import React from 'react';
const LABEL_3511 = 'component_3511';
export function Component3511({ value = 3511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3511, 'data-value': derived.doubled }, children);
}
export default Component3511;
