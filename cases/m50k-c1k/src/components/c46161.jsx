import React from 'react';
const LABEL_46161 = 'component_46161';
export function Component46161({ value = 46161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46161, 'data-value': derived.doubled }, children);
}
export default Component46161;
