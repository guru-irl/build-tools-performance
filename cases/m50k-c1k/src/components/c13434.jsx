import React from 'react';
const LABEL_13434 = 'component_13434';
export function Component13434({ value = 13434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13434, 'data-value': derived.doubled }, children);
}
export default Component13434;
