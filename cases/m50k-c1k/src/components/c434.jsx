import React from 'react';
const LABEL_434 = 'component_434';
export function Component434({ value = 434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_434, 'data-value': derived.doubled }, children);
}
export default Component434;
