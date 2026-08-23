import React from 'react';
const LABEL_22434 = 'component_22434';
export function Component22434({ value = 22434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22434, 'data-value': derived.doubled }, children);
}
export default Component22434;
