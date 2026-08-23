import React from 'react';
const LABEL_14335 = 'component_14335';
export function Component14335({ value = 14335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14335, 'data-value': derived.doubled }, children);
}
export default Component14335;
