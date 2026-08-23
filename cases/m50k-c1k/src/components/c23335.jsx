import React from 'react';
const LABEL_23335 = 'component_23335';
export function Component23335({ value = 23335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23335, 'data-value': derived.doubled }, children);
}
export default Component23335;
