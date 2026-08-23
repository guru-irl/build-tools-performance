import React from 'react';
const LABEL_32434 = 'component_32434';
export function Component32434({ value = 32434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32434, 'data-value': derived.doubled }, children);
}
export default Component32434;
