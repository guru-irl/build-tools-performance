import React from 'react';
const LABEL_44096 = 'component_44096';
export function Component44096({ value = 44096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44096, 'data-value': derived.doubled }, children);
}
export default Component44096;
