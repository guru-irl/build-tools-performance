import React from 'react';
const LABEL_22530 = 'component_22530';
export function Component22530({ value = 22530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22530, 'data-value': derived.doubled }, children);
}
export default Component22530;
