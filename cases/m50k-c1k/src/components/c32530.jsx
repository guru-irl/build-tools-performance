import React from 'react';
const LABEL_32530 = 'component_32530';
export function Component32530({ value = 32530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32530, 'data-value': derived.doubled }, children);
}
export default Component32530;
