import React from 'react';
const LABEL_37434 = 'component_37434';
export function Component37434({ value = 37434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37434, 'data-value': derived.doubled }, children);
}
export default Component37434;
