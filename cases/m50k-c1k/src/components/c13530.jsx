import React from 'react';
const LABEL_13530 = 'component_13530';
export function Component13530({ value = 13530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13530, 'data-value': derived.doubled }, children);
}
export default Component13530;
