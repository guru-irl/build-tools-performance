import React from 'react';
const LABEL_3335 = 'component_3335';
export function Component3335({ value = 3335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3335, 'data-value': derived.doubled }, children);
}
export default Component3335;
