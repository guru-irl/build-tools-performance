import React from 'react';
const LABEL_21335 = 'component_21335';
export function Component21335({ value = 21335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21335, 'data-value': derived.doubled }, children);
}
export default Component21335;
