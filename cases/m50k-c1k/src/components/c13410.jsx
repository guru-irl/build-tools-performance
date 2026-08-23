import React from 'react';
const LABEL_13410 = 'component_13410';
export function Component13410({ value = 13410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13410, 'data-value': derived.doubled }, children);
}
export default Component13410;
