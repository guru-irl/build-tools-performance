import React from 'react';
const LABEL_44434 = 'component_44434';
export function Component44434({ value = 44434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44434, 'data-value': derived.doubled }, children);
}
export default Component44434;
